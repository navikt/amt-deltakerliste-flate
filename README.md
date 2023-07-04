# amt-deltakerliste-flate

Mikrofrontend for mulighetsrommet admin flate - Tiltaksgjennomføringer

# Kom i gang

1. Bygg amt-deltakerliste-flate ved å kjøre `pnpm build`
2. Start appen lokalt ved å kjøre `pnpm start`

# Test produskjonsbygg av bare mikrofrontenden lokalt med docker
1. `pnpm build`
2. `docker build -t amt-deltakerliste-flate .` Denne må kjøres fra rotmappa til amt-deltakerliste-flate
3. `docker run -d -it --rm -p 8080:8080 amt-deltakerliste-flate`
4. Mikrofrontend serves nå fra http://localhost:8080/amt/amt-deltakerliste-flate/bundle.js
5. `docker ps` lister alle kjørende docker-containere, derfra kan man hente container-id som kan brukes til å stoppe den (`docker stop <container-id>`)

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på github.

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #team-personbruker.
