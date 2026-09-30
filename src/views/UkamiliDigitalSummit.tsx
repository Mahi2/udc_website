import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Target,
  Building2,
  ShieldCheck,
  Award,
  Handshake,
  Briefcase,
  FileCheck2,
  Rocket,
  HeartHandshake,
  Mail,
  Phone,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import summitCover from "../assets/summit-2026-cover.jpg";
import enabelLogo from "../assets/enabel-logo.png.asset.json";
import kbmLogo from "../assets/kbm-logo.png.asset.json";
import SummitApplicationDialog from "../components/SummitApplicationDialog";
import DonationDialog from "../components/DonationDialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import type { SummitTrack } from "../lib/summit-application-schema";

const CONTACT_EMAIL = "contact@ukamili.africa";

const keyFacts = [
  { icon: Calendar, label: "Date indicative", value: "Octobre 2026" },
  { icon: MapPin, label: "Lieu", value: "Lubumbashi, Haut-Katanga" },
  { icon: Building2, label: "Structure porteuse", value: "Ukamili Digital City" },
  { icon: Target, label: "Aboutissement", value: "Pavillon Digital au KBM 2027" },
];

const phases = [
  {
    step: "Phase 1",
    period: "Octobre 2026",
    title: "Ukamili Digital Summit 2026",
    description:
      "Mobilisation de l'écosystème, identification des solutions numériques locales, diagnostic initial et dialogue direct avec les acteurs du marché : panels, ateliers, présentations de solutions et rencontres entre entrepreneurs, entreprises et institutions.",
    icon: Sparkles,
  },
  {
    step: "Phase 2",
    period: "Novembre 2026 – avril 2027",
    title: "Mise en conformité, structuration et certification",
    description:
      "Cœur du parcours : accompagnement administratif, réglementaire, organisationnel, technique et commercial des entreprises sélectionnées, puis évaluation selon un référentiel de préparation au marché construit avec les grandes entreprises et les institutions.",
    icon: FileCheck2,
  },
  {
    step: "Phase 3",
    period: "Mai 2027",
    title: "Accès au marché — Pavillon Digital au KBM 2027",
    description:
      "Présentation des entreprises préparées, démonstrations, rencontres B2B, Deal Room et exploration d'opportunités commerciales au Katanga Business Meeting.",
    icon: Rocket,
  },
];

const readinessLevels = [
  {
    title: "Compliance Ready",
    icon: ShieldCheck,
    description:
      "L'entreprise dispose des principaux documents et éléments réglementaires nécessaires à son activité et comprend les obligations applicables à son secteur.",
  },
  {
    title: "Corporate Ready",
    icon: Briefcase,
    description:
      "L'entreprise possède les capacités administratives, organisationnelles et techniques nécessaires pour dialoguer avec une grande organisation.",
  },
  {
    title: "Market Ready",
    icon: Award,
    description:
      "L'entreprise est préparée à se présenter au marché : offre structurée, documentation professionnelle et compréhension des procédures de référencement et d'achat.",
  },
];

const programme = [
  "Panels sur les besoins réels des grandes entreprises et du secteur minier",
  "Ateliers sur la conformité, la sous-traitance et le référencement fournisseur",
  "Présentations et démonstrations de solutions numériques locales",
  "Rencontres entre entrepreneurs, entreprises, institutions et partenaires",
  "Diagnostic initial des solutions candidates au parcours",
  "Secteurs prioritaires : MiningTech, FinTech, GreenTech, HealthTech",
];

const selectionCriteria = [
  "Être établie ou active en République Démocratique du Congo",
  "Proposer une solution numérique identifiable",
  "Disposer d'une équipe ou d'un porteur clairement identifié",
  "Démontrer la pertinence du problème traité",
  "Manifester une volonté réelle de mise en conformité et de structuration",
];

const tracks: Array<{
  id: SummitTrack;
  title: string;
  icon: typeof Rocket;
  intro: string;
  steps: string[];
  cta: string;
  subject: string;
}> = [
  {
    id: "startup",
    title: "Startups & PME numériques",
    icon: Rocket,
    intro: "Vous portez une solution numérique et visez les marchés des grandes entreprises.",
    steps: [
      "Envoyez votre candidature avec une présentation de votre solution",
      "Participez au diagnostic initial pendant le Summit",
      "Intégrez le parcours de mise en conformité et de structuration",
    ],
    cta: "Candidater comme startup",
    subject: "Candidature startup — Ukamili Digital Summit 2026",
  },
  {
    id: "enterprise",
    title: "Entreprises & institutions",
    icon: Building2,
    intro:
      "Vous souhaitez rencontrer des fournisseurs numériques locaux et exprimer vos besoins métiers.",
    steps: [
      "Réservez votre participation au Summit",
      "Exprimez vos besoins et vos exigences fournisseurs",
      "Rencontrez les solutions présélectionnées en B2B",
    ],
    cta: "Réserver ma participation",
    subject: "Participation entreprise — Ukamili Digital Summit 2026",
  },
  {
    id: "sponsor",
    title: "Sponsors & partenaires",
    icon: Handshake,
    intro:
      "Vous voulez soutenir la préparation et l'accès au marché des entreprises numériques locales.",
    steps: [
      "Choisissez votre forme d'appui : sponsor, technique, industriel, institutionnel",
      "Recevez la note conceptuelle complète du parcours",
      "Formalisons ensemble votre participation",
    ],
    cta: "Devenir partenaire",
    subject: "Partenariat / Sponsoring — Ukamili Digital Summit 2026",
  },
];

const partners = [
  {
    name: "Enabel",
    role: "Partenaire du parcours et sponsor du Digital Summit",
    logo: enabelLogo.url,
    logoClass: "h-10",
  },
  {
    name: "Katanga Business Meeting (KBM)",
    role: "Pavillon Digital 2027 et appui logistique",
    logo: kbmLogo.url,
    logoClass: "h-12",
  },
  { name: "Ukamili Digital City", role: "Conception, coordination et mise en œuvre" },
];

export default function UkamiliDigitalSummit() {
  const [activeTrack, setActiveTrack] = useState<SummitTrack | null>(null);
  const [donationOpen, setDonationOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="relative flex items-end pt-24 pb-12 overflow-hidden bg-secondary-900 sm:min-h-[680px] sm:pt-32 sm:pb-16">
        <img
          src={summitCover}
          alt="UKAMILI Digital Summit 2026 à Lubumbashi, les 22 et 23 octobre 2026"
          width={1920}
          height={1080}
          className="absolute inset-x-0 top-0 w-full h-auto aspect-video object-cover object-center sm:inset-0 sm:h-full sm:aspect-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-900/90 to-secondary-900 sm:bg-gradient-to-t sm:from-secondary-900/95 sm:via-secondary-900/20 sm:to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <Link
            to="/events"
            className="inline-flex items-center text-primary-200 hover:text-white transition-colors mt-32 mb-8 sm:mt-0"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Retour aux événements
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl pt-4 sm:pt-80"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-primary-500/90 text-sm font-semibold">
                Sommet · Édition 2026
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium text-primary-100">
                Phase 1 du Parcours Digital d'Accès au Marché
              </span>
            </div>

            <h1 className="sr-only">UKAMILI DIGITAL SUMMIT 2026</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-100 max-w-3xl">
              Le rendez-vous des acteurs du digital, de l'innovation et de la croissance dans le
              Haut-Katanga pour une transformation numérique concertée, inclusive et ancrée dans
              les réalités locales.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#inscription"
                className="inline-flex items-center px-8 py-3 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
              >
                S'inscrire à l'événement
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#soutenir"
                className="inline-flex items-center px-8 py-3 rounded-lg border border-white/60 text-white font-medium hover:bg-white/10 transition-colors"
              >
                <HeartHandshake className="mr-2 h-5 w-5" />
                Soutenir le Summit
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFacts.map((fact) => (
              <div key={fact.label} className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-50">
                  <fact.icon className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{fact.label}</p>
                  <p className="font-semibold text-gray-900">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About — condensé */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">À propos de l'événement</h2>
            <div className="mt-5 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Ukamili Digital City met en place un <strong>Parcours Digital de Mise en Conformité
                et d'Accès au Marché</strong> visant à identifier, structurer, préparer et connecter
                au marché des startups et PME numériques congolaises capables de répondre aux besoins
                des grandes entreprises, notamment dans le secteur minier. Le Ukamili Digital Summit
                2026 en constitue la première phase : mobilisation de l'écosystème, identification
                des solutions, diagnostic initial et dialogue avec les acteurs du marché.
              </p>
              <p>
                L'initiative part d'un constat simple : la qualité technique d'une solution ne suffit
                pas pour accéder aux marchés des grandes organisations. Les entrepreneurs doivent
                aussi répondre à des exigences administratives, réglementaires, organisationnelles,
                techniques et commerciales.
              </p>
            </div>
          </div>

          <aside className="bg-secondary-50 rounded-2xl p-6 h-fit">
            <h3 className="text-lg font-semibold text-gray-900">Informations générales</h3>
            <dl className="mt-5 space-y-3 text-sm">
              <div>
                <dt className="text-gray-500">Période du parcours</dt>
                <dd className="font-medium text-gray-900">Octobre 2026 – mai 2027</dd>
              </div>
              <div>
                <dt className="text-gray-500">Zone d'intervention</dt>
                <dd className="font-medium text-gray-900">
                  Grand Katanga, avec ouverture nationale
                </dd>
              </div>
              <div>
                <dt className="text-gray-500">Secteurs prioritaires</dt>
                <dd className="font-medium text-gray-900">
                  MiningTech, FinTech, GreenTech, HealthTech
                </dd>
              </div>
              <div>
                <dt className="text-gray-500">Participants attendus</dt>
                <dd className="font-medium text-gray-900">
                  Startups, PME numériques, entreprises minières, institutions, investisseurs,
                  universités, incubateurs
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* Parcours & programme — section unique à onglets */}
      <section className="py-12 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Le parcours et le programme</h2>
            <p className="mt-3 text-gray-600">
              Identifier → Diagnostiquer → Mettre en conformité → Structurer → Préparer → Certifier →
              Connecter au marché.
            </p>
          </div>

          <Tabs defaultValue="phases" className="mt-8">
            <TabsList className="flex flex-wrap h-auto gap-1 bg-white/70 p-1.5 rounded-xl border border-gray-100">
              <TabsTrigger value="phases" className="rounded-lg">Les 3 phases</TabsTrigger>
              <TabsTrigger value="programme" className="rounded-lg">Programme</TabsTrigger>
              <TabsTrigger value="criteres" className="rounded-lg">Critères de sélection</TabsTrigger>
              <TabsTrigger value="niveaux" className="rounded-lg">Niveaux de préparation</TabsTrigger>
            </TabsList>

            <TabsContent value="phases" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {phases.map((phase, index) => (
                  <motion.div
                    key={phase.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-primary-50">
                        <phase.icon className="h-6 w-6 text-primary-500" />
                      </div>
                      <span className="text-sm font-semibold text-primary-600">{phase.step}</span>
                    </div>
                    <p className="mt-5 text-sm text-gray-500">{phase.period}</p>
                    <h3 className="mt-1 text-lg font-bold text-gray-900">{phase.title}</h3>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">{phase.description}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="programme" className="mt-8">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                  {programme.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary-500 mt-0.5 shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="criteres" className="mt-8">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                  {selectionCriteria.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-primary-500 mt-0.5 shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-gray-500">
                  La certification de préparation ne remplace ni les autorisations légales ni les
                  procédures internes de référencement propres à chaque entreprise.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="niveaux" className="mt-8">
              <p className="text-gray-600 max-w-3xl mb-6">
                À l'issue du parcours, les entreprises accompagnées sont évaluées selon un
                référentiel construit avec les grandes entreprises et les institutions compétentes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {readinessLevels.map((level) => (
                  <div
                    key={level.title}
                    className="rounded-2xl bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white p-6"
                  >
                    <div className="p-3 rounded-xl bg-white/10 w-fit">
                      <level.icon className="h-6 w-6 text-primary-200" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold">{level.title}</h3>
                    <p className="mt-2 text-sm text-primary-100 leading-relaxed">
                      {level.description}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Inscription */}
      <section id="inscription" className="py-12 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Comment y souscrire</h2>
            <p className="mt-3 text-gray-600">
              Choisissez le profil qui correspond à votre organisation et remplissez le formulaire
              en ligne : votre dossier est transmis directement à l'équipe UKAMILI.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tracks.map((track, index) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-lg p-6"
              >
                <div className="p-3 rounded-xl bg-primary-50 w-fit">
                  <track.icon className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">{track.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{track.intro}</p>

                <ol className="mt-5 space-y-3 flex-grow">
                  {track.steps.map((step, stepIndex) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500 text-xs font-semibold text-white">
                        {stepIndex + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>

                <button
                  type="button"
                  onClick={() => setActiveTrack(track.id)}
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
                >
                  {track.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-secondary-50 p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Besoin d'informations ?</h3>
              <p className="mt-2 text-gray-600">
                L'équipe UKAMILI vous accompagne dans votre inscription et peut vous transmettre la
                note conceptuelle complète du parcours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 font-medium hover:bg-gray-50 transition-colors"
              >
                <Mail className="mr-2 h-5 w-5 text-primary-500" />
                {CONTACT_EMAIL}
              </a>
              <a
                href="tel:+243993298761"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 font-medium hover:bg-gray-50 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5 text-primary-500" />
                +243 993 298 761
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Soutenir / don */}
      <section id="soutenir" className="py-12 bg-secondary-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Soutenir le Summit</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Le financement de la phase de mise en conformité et de structuration est l'étape
                déterminante du programme. Votre soutien permet d'accompagner davantage
                d'entrepreneurs vers les marchés des grandes entreprises.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Sponsoring de l'événement et du parcours",
                  "Appui technique et mobilisation d'experts",
                  "Contribution libre au fonds d'accompagnement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-primary-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-gray-100 shadow-lg p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary-50">
                  <HeartHandshake className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Faire un don</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Contribuez directement au financement du Ukamili Digital Summit 2026 et de
                l'accompagnement des entreprises numériques locales.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {["25 $", "100 $", "500 $"].map((amount) => (
                  <span
                    key={amount}
                    className="rounded-lg border border-gray-200 px-4 py-3 text-center font-semibold text-gray-600"
                  >
                    {amount}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setDonationOpen(true)}
                className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
              >
                Faire un don
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <p className="mt-3 text-sm text-gray-500 text-center">
                Mobile money (Airtel, Orange, M-Pesa, Afrimoney) ou virement bancaire. Une question ?{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Don — Ukamili Digital Summit 2026")}`}
                  className="text-primary-600 underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires + CTA final condensés */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900">Partenaires du parcours</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <div key={partner.name} className="rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
                {"logo" in partner && partner.logo ? (
                  <div className="flex h-14 items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      className={`${partner.logoClass} mx-auto w-auto object-contain`}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50">
                    <Handshake className="h-6 w-6 text-primary-500" />
                  </div>
                )}
                <h3 className="mt-4 text-lg font-bold text-gray-900">{partner.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{partner.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 px-6 py-10 sm:px-8 text-center text-white">
            <div className="flex justify-center">
              <Users className="h-10 w-10 text-primary-200" />
            </div>
            <h3 className="mt-4 text-2xl font-bold">
              Rejoignez le Ukamili Digital Summit 2026
            </h3>
            <p className="mt-3 text-primary-100 max-w-2xl mx-auto">
              Entreprises, institutions, bailleurs et organisations : contribuez à la préparation et
              à l'accès au marché des entreprises numériques locales.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="#inscription"
                className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-primary-700 font-medium hover:bg-primary-50 transition-colors"
              >
                S'inscrire
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 rounded-lg border border-white/60 text-white font-medium hover:bg-white/10 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {activeTrack && (
        <SummitApplicationDialog track={activeTrack} onClose={() => setActiveTrack(null)} />
      )}

      {donationOpen && <DonationDialog onClose={() => setDonationOpen(false)} />}
    </div>
  );
}
