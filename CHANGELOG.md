# Changelog

## v1.1.0

### Novità
- **Interfaccia multilingua**: Italiano, English, Español, Français, Português, Polski.
  - Lingua rilevata automaticamente dal sistema e modificabile dal selettore nella barra superiore.
  - Tradotti anche il menu dell'applicazione e le finestre di salvataggio (JSON/PDF).
- **Selettore tema**:
  - *Originale*: l'interfaccia PaperCSS di Powir, invariata.
  - *Windows 11 · Chiaro* e *Windows 11 · Scuro*: nuovo tema moderno in stile Fluent Design,
    con icone Fluent UI System Icons (Microsoft, MIT) e Bootstrap Icons per i loghi social (MIT).
- Lingua e tema vengono ricordati al riavvio.

### Correzioni
- L'avviso di aggiornamento compare solo se la versione remota è più recente di quella installata.
- Dopo "Esporta PDF" la barra laterale evidenzia correttamente la sezione Informazioni.

### Invariato
- Raccolta dati (`powercfg /batteryreport`), calcoli, grafici ed esportazioni funzionano come nell'originale.
- I valori letti dal report di Windows (nomi dei campi, periodi) restano nella lingua del sistema.
