import Link from 'next/link'
import { COMPANY_INFO } from '@/lib/company'

export default async function LegalNoticePage({
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
            {isFr ? 'Mentions Legales' : 'Legal Notice'}
          </h1>
          <p className="text-muted-foreground">
            {isFr ? 'Derniere mise a jour: 17 avril 2026' : 'Last updated: April 17, 2026'}
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">
            {isFr ? 'Identite de la societe' : 'Company identity'}
          </h2>
          <p>{COMPANY_INFO.legalName}</p>
          <p>{COMPANY_INFO.rccm}</p>
          <p>{COMPANY_INFO.address}</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">{isFr ? 'Contact' : 'Contact'}</h2>
          <p>Email: {COMPANY_INFO.email}</p>
          <p>{isFr ? 'Telephone' : 'Phone'}: {COMPANY_INFO.phone}</p>
          <p>
            {isFr ? 'Site web' : 'Website'}:{' '}
            <Link className="text-primary underline" href={COMPANY_INFO.website}>
              {COMPANY_INFO.website}
            </Link>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">
            {isFr ? 'Utilisation de la plateforme WhatsApp' : 'Use of WhatsApp platform'}
          </h2>
          <p>
            {isFr
              ? 'Notre entreprise utilise la plateforme WhatsApp Business dans le respect des politiques Meta et de la legislation applicable.'
              : 'Our company uses the WhatsApp Business Platform in compliance with Meta policies and applicable law.'}
          </p>
          <p>
            {isFr ? 'Voir aussi notre ' : 'See also our '}
            <Link className="text-primary underline" href={`/${locale}/whatsapp-messaging-policy`}>
              {isFr ? 'politique de messagerie WhatsApp' : 'WhatsApp messaging policy'}
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  )
}

