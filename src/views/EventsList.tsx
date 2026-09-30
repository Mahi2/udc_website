import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight, Sparkles } from "lucide-react";
import { events } from "../data/events";

export default function EventsList() {
  const upcoming = events.filter((event) => event.status === "upcoming");
  const past = events.filter((event) => event.status === "past");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium text-primary-100 mb-6">
              <Sparkles className="h-4 w-4" />
              Events UKAMILI
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Événements</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Les rendez-vous qui rassemblent entrepreneurs, entreprises et institutions autour du
              numérique au Grand Katanga.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Événements à venir</h2>
              <p className="mt-2 text-gray-600">
                Participez, exposez votre solution ou accompagnez l'écosystème comme partenaire.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcoming.map((event, index) => (
              <motion.article
                key={event.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-secondary-900">
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/45 via-transparent to-secondary-900/10" />
                  <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-primary-600">
                    {event.category}
                  </span>
                  <span className="absolute top-4 right-4 bg-primary-500 px-3 py-1 rounded-full text-sm font-semibold text-white">
                    {event.dateLabel}
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                  <p className="mt-2 text-primary-600 font-medium">{event.subtitle}</p>
                  <p className="mt-4 text-gray-600 leading-relaxed">{event.excerpt}</p>

                  <div className="mt-6 space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary-500" />
                      <span>{event.periodLabel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary-500" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary-500" />
                      <span>{event.audience}</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    {event.hasDetailPage ? (
                      <Link
                        to="/events/$slug"
                        params={{ slug: event.slug }}
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
                      >
                        Découvrir l'événement
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    ) : (
                      <span className="text-sm text-gray-400">Détails bientôt disponibles</span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Past */}
      {past.length > 0 && (
        <section className="py-16 bg-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Éditions passées</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {past.map((event) => (
                <div key={event.slug} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-44">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-primary-600 font-medium">{event.dateLabel}</p>
                    <h3 className="mt-2 text-lg font-bold text-gray-900">{event.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{event.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold">Vous souhaitez organiser un événement avec nous ?</h2>
            <p className="mt-4 text-primary-100 max-w-2xl mx-auto">
              UKAMILI DIGITAL CITY accueille et co-organise conférences, ateliers et rencontres
              d'affaires autour du numérique au Grand Katanga.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-primary-700 font-medium hover:bg-primary-50 transition-colors"
              >
                Nous contacter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/engagement"
                className="inline-flex items-center px-8 py-3 rounded-lg border border-white/60 text-white font-medium hover:bg-white/10 transition-colors"
              >
                Nous rejoindre
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
