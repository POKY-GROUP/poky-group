import { COMPANY_INFO } from '@/lib/company'

export default async function WhatsAppMessagingPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const isFr = locale === 'fr'

  return (
    <div className="py-16">
      <div className="container mx-auto max-w-4xl px-4 space-y-8">
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold">
            {isFr ? 'Politique de Messagerie WhatsApp' : 'WhatsApp Messaging Policy'}
          </h1>
          <p className="text-muted-foreground">
            {isFr ? 'Derniere mise a jour: 17 avril 2026' : 'Last updated: April 17, 2026'}
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">{isFr ? 'Consentement' : 'Consent'}</h2>
          <p>
            {isFr
              ? 'Nous contactons uniquement les personnes ayant fourni un consentement explicite pour recevoir des messages WhatsApp.'
              : 'We only contact people who have provided explicit consent to receive WhatsApp messages.'}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">{isFr ? 'Desinscription' : 'Opt-out'}</h2>
          <p>
            {isFr
              ? 'Chaque destinataire peut se desinscrire a tout moment en repondant STOP ou en nous contactant a info@pokygroup.com.'
              : 'Any recipient can opt out at any time by replying STOP or by contacting us at info@pokygroup.com.'}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">{isFr ? 'Types de messages autorises' : 'Allowed message types'}</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>{isFr ? 'Support client' : 'Customer support'}</li>
            <li>{isFr ? 'Notifications transactionnelles et operationnelles' : 'Transactional and operational notifications'}</li>
            <li>{isFr ? 'Messages marketing conformes et consentis' : 'Compliant, consented marketing messages'}</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">{isFr ? 'Contenu interdit' : 'Prohibited content'}</h2>
          <p>
            {isFr
              ? 'Nous n utilisons pas WhatsApp pour les produits, services ou pratiques interdits par les politiques WhatsApp Business et les lois applicables.'
              : 'We do not use WhatsApp for products, services, or practices prohibited by WhatsApp Business policies and applicable law.'}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">{isFr ? 'References de conformite' : 'Compliance references'}</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>WhatsApp Business Messaging Policy</li>
            <li>WhatsApp Commerce Policy</li>
            <li>WhatsApp Business Terms of Service</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">{isFr ? 'Entreprise responsable' : 'Responsible entity'}</h2>
          <p>{COMPANY_INFO.legalName}</p>
          <p>{COMPANY_INFO.rccm}</p>
          <p>{COMPANY_INFO.address}</p>
          <p>Email: {COMPANY_INFO.email}</p>
        </section>
      </div>
    </div>
  )
}

