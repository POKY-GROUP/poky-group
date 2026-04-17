import { COMPANY_INFO } from '@/lib/company'

export default async function DataDeletionPage({
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
            {isFr ? 'Suppression des Donnees' : 'Data Deletion Instructions'}
          </h1>
          <p className="text-muted-foreground">
            {isFr ? 'Derniere mise a jour: 17 avril 2026' : 'Last updated: April 17, 2026'}
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">
            {isFr ? 'Comment demander la suppression' : 'How to request deletion'}
          </h2>
          <p>
            {isFr
              ? 'Envoyez un email a info@pokygroup.com avec comme objet: "Data Deletion Request".'
              : 'Send an email to info@pokygroup.com with subject: "Data Deletion Request".'}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">
            {isFr ? 'Informations a fournir' : 'Information to include'}
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>{isFr ? 'Nom complet' : 'Full name'}</li>
            <li>{isFr ? 'Adresse email associee' : 'Associated email address'}</li>
            <li>{isFr ? 'Contexte de la demande (site, formulaire, WhatsApp, etc.)' : 'Request context (website, form, WhatsApp, etc.)'}</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">{isFr ? 'Delai de traitement' : 'Processing time'}</h2>
          <p>
            {isFr
              ? 'Nous accusons reception rapidement et traitons les demandes valides sous 30 jours maximum, sauf obligation legale contraire.'
              : 'We acknowledge quickly and process valid requests within up to 30 days, unless legal obligations require otherwise.'}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">{isFr ? 'Contact' : 'Contact'}</h2>
          <p>{COMPANY_INFO.legalName}</p>
          <p>Email: {COMPANY_INFO.email}</p>
          <p>{COMPANY_INFO.rccm}</p>
        </section>
      </div>
    </div>
  )
}

