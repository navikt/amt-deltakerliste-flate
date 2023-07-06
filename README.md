# amt-deltakerliste-flate

Mikrofrontend for mulighetsrommet admin flate - Tiltaksgjennomføringer
FOreøpig er "Deltakerliste" bak en feature-toggle "mulighetsrommet.admin-flate-vis-deltakerliste-fra-komet" i dev.

## Kom i gang

1. Bygg amt-deltakerliste-flate ved å kjøre `pnpm build`
2. Start appen lokalt ved å kjøre `pnpm start`

## Test i dev
Etter å ha deplyet endringene i Deltakerliste til dev kan vi teste mikrofrontenden i mulighetsrommet admin flate: https://mulighetsrommet-admin-flate.intern.dev.nav.no/tiltaksgjennomforinger
Velg en gjennomføring og velg tabben "Deltakerliste"

## Test produskjonsbygg av bare mikrofrontenden lokalt med docker
1. `pnpm build`
2. `docker build -t amt-deltakerliste-flate .` Denne må kjøres fra rotmappa til amt-deltakerliste-flate
3. `docker run -d -it --rm -p 8080:8080 amt-deltakerliste-flate`
4. Mikrofrontend serves nå fra http://localhost:8080/amt/amt-deltakerliste-flate/bundle.js
5. `docker ps` lister alle kjørende docker-containere, derfra kan man hente container-id som kan brukes til å stoppe den (`docker stop <container-id>`)

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på github.

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #team-personbruker.
