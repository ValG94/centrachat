// API route pour l'envoi d'emails - CENTRACHAT INTERNATIONAL
// Gère le formulaire de contact ET le formulaire de demande d'adhésion
// SMTP : IONOS - smtp.ionos.fr:465 (SSL)

import nodemailer from 'nodemailer';

// Transporteur SMTP IONOS (SSL sur port 465)
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.ionos.fr',
    port: parseInt(process.env.SMTP_PORT) || 465,
    secure: true, // SSL obligatoire sur port 465 IONOS
    auth: {
      user: process.env.SMTP_USER || 'contact@centrachat.africa',
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });
};

// ─── EMAIL : Formulaire de contact simple ─────────────────────────────────────
const buildContactEmail = ({ name, email, message }) => ({
  from: `"Site CENTRACHAT" <${process.env.SMTP_USER || 'contact@centrachat.africa'}>`,
  to: 'contact@centrachat.africa',
  replyTo: email,
  subject: `📩 Nouveau message de contact – ${name}`,
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
      <!-- En-tête -->
      <div style="background: linear-gradient(135deg, #14243D, #1a2f4a); padding: 28px 30px; text-align: center;">
        <h1 style="color: #BFA046; margin: 0; font-size: 22px; letter-spacing: 1px;">CENTRACHAT INTERNATIONAL</h1>
        <p style="color: #ffffff; margin: 6px 0 0; font-size: 13px; opacity: 0.85;">Nouveau message reçu via le formulaire de contact</p>
      </div>

      <!-- Corps -->
      <div style="padding: 30px; background: #f9f9f9;">
        <table style="width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.08);">
          <tr style="background: #f0f4f8;">
            <td style="padding: 12px 16px; font-weight: bold; color: #14243D; width: 35%; border-bottom: 1px solid #e8e8e8;">Nom complet</td>
            <td style="padding: 12px 16px; color: #333; border-bottom: 1px solid #e8e8e8;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-weight: bold; color: #14243D; border-bottom: 1px solid #e8e8e8;">Adresse email</td>
            <td style="padding: 12px 16px; border-bottom: 1px solid #e8e8e8;">
              <a href="mailto:${email}" style="color: #BFA046; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr style="background: #f0f4f8;">
            <td style="padding: 12px 16px; font-weight: bold; color: #14243D; vertical-align: top;">Message</td>
            <td style="padding: 12px 16px; color: #333; line-height: 1.7;">${message.replace(/\n/g, '<br>')}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 14px 16px; background: #fff8e6; border-left: 4px solid #BFA046; border-radius: 4px;">
          <p style="margin: 0; font-size: 13px; color: #555;">
            💡 Pour répondre directement à cet expéditeur, utilisez le bouton <strong>Répondre</strong> de votre messagerie.
          </p>
        </div>
      </div>

      <!-- Pied de page -->
      <div style="background: #14243D; padding: 18px 30px; text-align: center;">
        <p style="color: #BFA046; margin: 0; font-size: 12px;">© CENTRACHAT INTERNATIONAL 2025 – One Hub, Many Buyers</p>
        <p style="color: rgba(255,255,255,0.5); margin: 4px 0 0; font-size: 11px;">Avenue Rosa Park, US Embassy area, Yaoundé, Cameroun</p>
      </div>
    </div>
  `,
  text: `Nouveau message de contact – CENTRACHAT INTERNATIONAL\n\nNom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
});

// ─── EMAIL : Accusé de réception (formulaire de contact) ──────────────────────
const buildContactConfirmation = ({ name, email, message }) => ({
  from: `"CENTRACHAT INTERNATIONAL" <${process.env.SMTP_USER || 'contact@centrachat.africa'}>`,
  to: email,
  subject: 'Votre message a bien été reçu – CENTRACHAT INTERNATIONAL',
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #14243D, #1a2f4a); padding: 28px 30px; text-align: center;">
        <h1 style="color: #BFA046; margin: 0; font-size: 22px; letter-spacing: 1px;">CENTRACHAT INTERNATIONAL</h1>
        <p style="color: #ffffff; margin: 6px 0 0; font-size: 13px; opacity: 0.85;">One Hub, Many Buyers</p>
      </div>

      <div style="padding: 30px; background: #f9f9f9;">
        <h2 style="color: #14243D; margin-top: 0;">Bonjour ${name},</h2>
        <p style="line-height: 1.7; color: #444;">
          Nous avons bien reçu votre message et nous vous remercions de l'intérêt que vous portez à <strong>CENTRACHAT INTERNATIONAL</strong>.
        </p>
        <p style="line-height: 1.7; color: #444;">
          Notre équipe examinera votre demande et vous contactera dans les plus brefs délais, généralement sous <strong>24 à 48 heures ouvrables</strong>.
        </p>

        <div style="background: #ffffff; padding: 20px; border-radius: 8px; margin: 24px 0; border-left: 4px solid #BFA046;">
          <p style="margin: 0 0 6px; font-size: 13px; color: #888; text-transform: uppercase; letter-spacing: 0.5px;">Récapitulatif de votre message</p>
          <p style="margin: 4px 0; color: #333;"><strong>Nom :</strong> ${name}</p>
          <p style="margin: 4px 0; color: #333;"><strong>Email :</strong> ${email}</p>
          <p style="margin: 12px 0 4px; color: #333;"><strong>Message :</strong></p>
          <p style="margin: 0; color: #555; line-height: 1.6; font-style: italic;">${message.replace(/\n/g, '<br>')}</p>
        </div>

        <p style="line-height: 1.7; color: #444;">En attendant, vous pouvez nous joindre directement :</p>
        <ul style="color: #444; line-height: 1.9; padding-left: 20px;">
          <li>📞 Téléphone / WhatsApp : <a href="tel:+237655424242" style="color: #BFA046;">+237 655 42 42 42</a></li>
          <li>📧 Email : <a href="mailto:contact@centrachat.africa" style="color: #BFA046;">contact@centrachat.africa</a></li>
        </ul>
      </div>

      <div style="background: #14243D; padding: 18px 30px; text-align: center;">
        <p style="color: #BFA046; margin: 0; font-size: 12px;">© CENTRACHAT INTERNATIONAL 2025 – Première centrale d'achats panafricaine</p>
        <p style="color: rgba(255,255,255,0.5); margin: 4px 0 0; font-size: 11px;">Avenue Rosa Park, US Embassy area, Yaoundé, Cameroun</p>
      </div>
    </div>
  `,
  text: `Bonjour ${name},\n\nNous avons bien reçu votre message.\nNotre équipe vous contactera sous 24 à 48 heures.\n\nCENTRACHAT INTERNATIONAL\ncontact@centrachat.africa | +237 655 42 42 42`,
});

// ─── EMAIL : Formulaire de demande d'adhésion ─────────────────────────────────
const buildMembershipEmail = ({ company, contact, email, phone, sector, volume, message }) => ({
  from: `"Site CENTRACHAT" <${process.env.SMTP_USER || 'contact@centrachat.africa'}>`,
  to: 'contact@centrachat.africa',
  replyTo: email,
  subject: `🤝 Nouvelle demande d'adhésion – ${company}`,
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #14243D, #1a2f4a); padding: 28px 30px; text-align: center;">
        <h1 style="color: #BFA046; margin: 0; font-size: 22px; letter-spacing: 1px;">CENTRACHAT INTERNATIONAL</h1>
        <p style="color: #ffffff; margin: 6px 0 0; font-size: 13px; opacity: 0.85;">Nouvelle demande d'adhésion reçue</p>
      </div>

      <div style="padding: 30px; background: #f9f9f9;">
        <h3 style="color: #14243D; margin-top: 0; border-bottom: 2px solid #BFA046; padding-bottom: 8px;">Informations de l'organisation</h3>
        <table style="width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.08); margin-bottom: 20px;">
          <tr style="background: #f0f4f8;">
            <td style="padding: 12px 16px; font-weight: bold; color: #14243D; width: 40%; border-bottom: 1px solid #e8e8e8;">Organisation</td>
            <td style="padding: 12px 16px; color: #333; border-bottom: 1px solid #e8e8e8;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-weight: bold; color: #14243D; border-bottom: 1px solid #e8e8e8;">Personne de contact</td>
            <td style="padding: 12px 16px; color: #333; border-bottom: 1px solid #e8e8e8;">${contact}</td>
          </tr>
          <tr style="background: #f0f4f8;">
            <td style="padding: 12px 16px; font-weight: bold; color: #14243D; border-bottom: 1px solid #e8e8e8;">Email</td>
            <td style="padding: 12px 16px; border-bottom: 1px solid #e8e8e8;">
              <a href="mailto:${email}" style="color: #BFA046; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-weight: bold; color: #14243D; border-bottom: 1px solid #e8e8e8;">Téléphone</td>
            <td style="padding: 12px 16px; color: #333; border-bottom: 1px solid #e8e8e8;">${phone || 'Non renseigné'}</td>
          </tr>
          <tr style="background: #f0f4f8;">
            <td style="padding: 12px 16px; font-weight: bold; color: #14243D; border-bottom: 1px solid #e8e8e8;">Secteur d'activité</td>
            <td style="padding: 12px 16px; color: #333; border-bottom: 1px solid #e8e8e8;">${sector || 'Non renseigné'}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-weight: bold; color: #14243D; border-bottom: 1px solid #e8e8e8;">Volume annuel estimé</td>
            <td style="padding: 12px 16px; color: #333; border-bottom: 1px solid #e8e8e8;">${volume || 'Non renseigné'}</td>
          </tr>
          ${message ? `
          <tr style="background: #f0f4f8;">
            <td style="padding: 12px 16px; font-weight: bold; color: #14243D; vertical-align: top;">Message</td>
            <td style="padding: 12px 16px; color: #333; line-height: 1.7;">${message.replace(/\n/g, '<br>')}</td>
          </tr>` : ''}
        </table>

        <div style="padding: 14px 16px; background: #fff8e6; border-left: 4px solid #BFA046; border-radius: 4px;">
          <p style="margin: 0; font-size: 13px; color: #555;">
            💡 Pour répondre à cette demande, utilisez le bouton <strong>Répondre</strong> de votre messagerie.
          </p>
        </div>
      </div>

      <div style="background: #14243D; padding: 18px 30px; text-align: center;">
        <p style="color: #BFA046; margin: 0; font-size: 12px;">© CENTRACHAT INTERNATIONAL 2025 – One Hub, Many Buyers</p>
        <p style="color: rgba(255,255,255,0.5); margin: 4px 0 0; font-size: 11px;">Avenue Rosa Park, US Embassy area, Yaoundé, Cameroun</p>
      </div>
    </div>
  `,
  text: `Nouvelle demande d'adhésion – CENTRACHAT INTERNATIONAL\n\nOrganisation : ${company}\nContact : ${contact}\nEmail : ${email}\nTéléphone : ${phone || 'Non renseigné'}\nSecteur : ${sector || 'Non renseigné'}\nVolume annuel : ${volume || 'Non renseigné'}\n\nMessage :\n${message || 'Aucun message'}`,
});

// ─── EMAIL : Accusé de réception (demande d'adhésion) ─────────────────────────
const buildMembershipConfirmation = ({ company, contact, email }) => ({
  from: `"CENTRACHAT INTERNATIONAL" <${process.env.SMTP_USER || 'contact@centrachat.africa'}>`,
  to: email,
  subject: 'Demande d\'adhésion reçue – CENTRACHAT INTERNATIONAL',
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #14243D, #1a2f4a); padding: 28px 30px; text-align: center;">
        <h1 style="color: #BFA046; margin: 0; font-size: 22px; letter-spacing: 1px;">CENTRACHAT INTERNATIONAL</h1>
        <p style="color: #ffffff; margin: 6px 0 0; font-size: 13px; opacity: 0.85;">One Hub, Many Buyers</p>
      </div>

      <div style="padding: 30px; background: #f9f9f9;">
        <h2 style="color: #14243D; margin-top: 0;">Bonjour ${contact},</h2>
        <p style="line-height: 1.7; color: #444;">
          Nous avons bien reçu la demande d'adhésion de <strong>${company}</strong> et nous vous remercions de votre confiance.
        </p>
        <p style="line-height: 1.7; color: #444;">
          Notre équipe étudiera votre dossier et vous contactera dans les <strong>48 à 72 heures ouvrables</strong> pour la suite du processus d'intégration.
        </p>

        <div style="background: #ffffff; padding: 20px; border-radius: 8px; margin: 24px 0; border-left: 4px solid #BFA046;">
          <p style="margin: 0 0 10px; font-size: 13px; color: #888; text-transform: uppercase; letter-spacing: 0.5px;">Processus d'adhésion</p>
          <ol style="margin: 0; padding-left: 20px; color: #444; line-height: 2;">
            <li>✅ Soumission de votre demande <em style="color: #BFA046;">(étape complétée)</em></li>
            <li>🔍 Évaluation de votre profil par notre équipe</li>
            <li>📞 Entretien de qualification</li>
            <li>🎉 Validation et intégration au réseau CENTRACHAT</li>
          </ol>
        </div>

        <p style="line-height: 1.7; color: #444;">Pour toute question, n'hésitez pas à nous contacter :</p>
        <ul style="color: #444; line-height: 1.9; padding-left: 20px;">
          <li>📞 Téléphone / WhatsApp : <a href="tel:+237655424242" style="color: #BFA046;">+237 655 42 42 42</a></li>
          <li>📧 Email : <a href="mailto:contact@centrachat.africa" style="color: #BFA046;">contact@centrachat.africa</a></li>
        </ul>
      </div>

      <div style="background: #14243D; padding: 18px 30px; text-align: center;">
        <p style="color: #BFA046; margin: 0; font-size: 12px;">© CENTRACHAT INTERNATIONAL 2025 – Première centrale d'achats panafricaine</p>
        <p style="color: rgba(255,255,255,0.5); margin: 4px 0 0; font-size: 11px;">Avenue Rosa Park, US Embassy area, Yaoundé, Cameroun</p>
      </div>
    </div>
  `,
  text: `Bonjour ${contact},\n\nNous avons bien reçu la demande d'adhésion de ${company}.\nNotre équipe vous contactera sous 48 à 72 heures.\n\nCENTRACHAT INTERNATIONAL\ncontact@centrachat.africa | +237 655 42 42 42`,
});

// ─── HANDLER PRINCIPAL ────────────────────────────────────────────────────────
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { type, ...data } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  try {
    const transporter = createTransporter();

    // ── Formulaire de CONTACT ──
    if (type === 'contact' || !type) {
      const { name, email, message } = data;

      if (!name || !email || !message) {
        return res.status(400).json({ message: 'Tous les champs sont requis.' });
      }
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Format d\'email invalide.' });
      }

      await transporter.sendMail(buildContactEmail({ name, email, message }));
      await transporter.sendMail(buildContactConfirmation({ name, email, message }));

      return res.status(200).json({ message: 'Message envoyé avec succès.' });
    }

    // ── Formulaire d'ADHÉSION ──
    if (type === 'membership') {
      const { company, contact, email, phone, sector, volume, message } = data;

      if (!company || !contact || !email) {
        return res.status(400).json({ message: 'Les champs organisation, contact et email sont requis.' });
      }
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Format d\'email invalide.' });
      }

      await transporter.sendMail(buildMembershipEmail({ company, contact, email, phone, sector, volume, message }));
      await transporter.sendMail(buildMembershipConfirmation({ company, contact, email }));

      return res.status(200).json({ message: 'Demande d\'adhésion envoyée avec succès.' });
    }

    return res.status(400).json({ message: 'Type de formulaire non reconnu.' });

  } catch (error) {
    console.error('Erreur SMTP :', error);
    return res.status(500).json({
      message: 'Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter directement.',
      detail: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
