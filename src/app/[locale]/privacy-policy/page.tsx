import Link from 'next/link'
import { COMPANY_INFO } from '@/lib/company'

export default async function PrivacyPolicyPage({
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
            {isFr ? 'Politique de Confidentialite' : 'Privacy Policy'}
          </h1>
          <p className="text-muted-foreground">
            {isFr ? 'Derniere mise a jour: 17 avril 2026' : 'Last updated: April 17, 2026'}
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">
            {isFr ? 'Donnees collectées' : 'Data we collect'}
          </h2>
          <p>
            {isFr
              ? 'Nous collectons les informations envoyees via nos formulaires (nom, email, message), ainsi que les donnees techniques strictement necessaires au fonctionnement et a la securite de la plateforme.'
              : 'We collect information submitted through our forms (name, email, message), and technical data strictly necessary for platform operations and security.'}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">
            {isFr ? 'Utilisation des donnees' : 'How we use data'}
          </h2>
          <p>
            {isFr
              ? 'Les donnees sont utilisees pour repondre aux demandes, fournir nos services, assurer la conformite et prevenir les abus.'
              : 'Data is used to answer requests, deliver services, ensure compliance, and prevent abuse.'}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">
            {isFr ? 'Messagerie WhatsApp' : 'WhatsApp messaging'}
          </h2>
          <p>
            {isFr
              ? 'Nous envoyons des messages WhatsApp uniquement aux personnes ayant fourni un consentement valide. Chaque message peut etre interrompu a tout moment via une demande de desinscription.'
              : 'We only send WhatsApp messages to people with valid consent. Any messaging can be stopped at any time through an opt-out request.'}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">
            {isFr ? 'Conservation des donnees' : 'Data retention'}
          </h2>
          <p>
            {isFr
              ? 'Nous conservons les donnees seulement pendant la duree necessaire a nos obligations legales, contractuelles, ou de support.'
              : 'We retain data only for as long as needed for legal, contractual, or support obligations.'}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">
            {isFr ? 'Suppression des donnees' : 'Data deletion'}
          </h2>
          <p>
            {isFr ? 'Vous pouvez demander la suppression de vos donnees via ' : 'You can request data deletion via '}
            <Link className="text-primary underline" href={`/${locale}/data-deletion`}>
              {isFr ? 'notre procedure de suppression' : 'our deletion procedure'}
            </Link>
            .
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">{isFr ? 'Contact vie privee' : 'Privacy contact'}</h2>
          <p>{COMPANY_INFO.legalName}</p>
          <p>Email: {COMPANY_INFO.email}</p>
          <p>{COMPANY_INFO.rccm}</p>
        </section>
      </div>
    </div>
  )
}

