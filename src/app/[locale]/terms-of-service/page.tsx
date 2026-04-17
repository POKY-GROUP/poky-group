import { COMPANY_INFO } from '@/lib/company'

export default async function TermsOfServicePage({
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
            {isFr ? 'Conditions de Service' : 'Terms of Service'}
          </h1>
          <p className="text-muted-foreground">
            {isFr ? 'Derniere mise a jour: 17 avril 2026' : 'Last updated: April 17, 2026'}
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">{isFr ? 'Objet' : 'Scope'}</h2>
          <p>
            {isFr
              ? 'Ces conditions regissent l acces et l utilisation des services proposes par POKY GROUP SAS.'
              : 'These terms govern access to and use of services provided by POKY GROUP SAS.'}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">{isFr ? 'Utilisation acceptable' : 'Acceptable use'}</h2>
          <p>
            {isFr
              ? 'Vous acceptez de ne pas utiliser nos services pour des activites illegales, frauduleuses, abusives, ou contraires aux politiques Meta/WhatsApp.'
              : 'You agree not to use our services for illegal, fraudulent, abusive, or Meta/WhatsApp policy-violating activity.'}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">
            {isFr ? 'Messagerie WhatsApp Business' : 'WhatsApp Business messaging'}
          </h2>
          <p>
            {isFr
              ? 'Les envois WhatsApp sont soumis aux politiques de messagerie WhatsApp Business et aux lois applicables, y compris les exigences de consentement et de desinscription.'
              : 'WhatsApp messaging is subject to WhatsApp Business messaging policies and applicable law, including consent and opt-out requirements.'}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">{isFr ? 'Responsabilite' : 'Liability'}</h2>
          <p>
            {isFr
              ? 'Sauf disposition legale contraire, les services sont fournis en l etat et notre responsabilite reste limitee dans les limites autorisees par la loi.'
              : 'Except where prohibited by law, services are provided as-is and our liability is limited to the extent permitted by law.'}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">{isFr ? 'Informations legales' : 'Legal information'}</h2>
          <p>{COMPANY_INFO.legalName}</p>
          <p>{COMPANY_INFO.rccm}</p>
          <p>{COMPANY_INFO.address}</p>
          <p>Email: {COMPANY_INFO.email}</p>
        </section>
      </div>
    </div>
  )
}

