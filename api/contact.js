// API route pour l'envoi d'emails de contact
// Cette route sera utilisée par le formulaire de contact

export default async function handler(req, res) {
  // Permettre seulement les requêtes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Validation des données
  if (!name || !email || !message) {
    return res.status(400).json({ 
      message: 'Tous les champs sont requis' 
    });
  }

  // Validation de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      message: 'Format d\'email invalide' 
    });
  }

  try {
    // Configuration Nodemailer (à adapter selon votre configuration SMTP)
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Configuration de l'email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'foch@centrachat.africa',
      subject: `Nouveau message de contact - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #14243D, #1a2f4a); padding: 20px; text-align: center;">
            <h1 style="color: #BFA046; margin: 0;">CENTRACHAT INTERNATIONAL</h1>
            <p style="color: white; margin: 5px 0;">Nouveau message de contact</p>
          </div>
          
          <div style="padding: 30px; background: #f8f8f8;">
            <h2 style="color: #14243D; border-bottom: 2px solid #BFA046; padding-bottom: 10px;">
              Détails du contact
            </h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong style="color: #14243D;">Nom:</strong> ${name}</p>
              <p><strong style="color: #14243D;">Email:</strong> ${email}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #14243D; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          
          <div style="background: #14243D; padding: 20px; text-align: center;">
            <p style="color: #BFA046; margin: 0; font-size: 14px;">
              © CENTRACHAT INTERNATIONAL 2025
            </p>
          </div>
        </div>
      `,
      text: `
        Nouveau message de contact - CENTRACHAT INTERNATIONAL
        
        Nom: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    // Email de confirmation automatique (optionnel)
    const confirmationMail = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Confirmation de réception - CENTRACHAT INTERNATIONAL',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #14243D, #1a2f4a); padding: 20px; text-align: center;">
            <h1 style="color: #BFA046; margin: 0;">CENTRACHAT INTERNATIONAL</h1>
            <p style="color: white; margin: 5px 0;">One Hub, Many Buyers</p>
          </div>
          
          <div style="padding: 30px; background: #f8f8f8;">
            <h2 style="color: #14243D;">Bonjour ${name},</h2>
            
            <p style="line-height: 1.6; color: #333;">
              Nous avons bien reçu votre message et vous remercions de votre intérêt 
              pour CENTRACHAT INTERNATIONAL.
            </p>
            
            <p style="line-height: 1.6; color: #333;">
              Notre équipe examinera votre demande et vous contactera dans les plus brefs délais, 
              généralement sous 24 à 48 heures.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #BFA046;">
              <h3 style="color: #14243D; margin-top: 0;">Vos coordonnées:</h3>
              <p><strong>Nom:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
            </div>
            
            <p style="line-height: 1.6; color: #333;">
              En attendant, n'hésitez pas à nous contacter directement :
            </p>
            
            <ul style="color: #333; line-height: 1.6;">
              <li>Téléphone: +237 655 42 42 42</li>
              <li>Email: foch@centrachat.africa</li>
              <li>WhatsApp: +237 655 42 42 42</li>
            </ul>
          </div>
          
          <div style="background: #14243D; padding: 20px; text-align: center;">
            <p style="color: #BFA046; margin: 0; font-size: 14px;">
              © CENTRACHAT INTERNATIONAL 2025 - Première centrale d'achats panafricaine
            </p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(confirmationMail);

    return res.status(200).json({ 
      message: 'Message envoyé avec succès' 
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return res.status(500).json({ 
      message: 'Erreur lors de l\'envoi du message' 
    });
  }
}
