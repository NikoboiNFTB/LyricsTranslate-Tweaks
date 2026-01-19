# LyricsTranslate-Tweaks

Collection of Tweaks for Lyrics Translate.

## Disable Copy Protection

### Description

Disables the copy protection for [lyricstranslate.com](https://lyricstranslate.com), allowing you to copy full song texts.

### Installation

**Lyrics Translate - Disable Copy Protection** can be installed as a minimal userscript. Alternatively, just add the following filters to uBlock Origin:

```text
lyricstranslate.com##+js(aeld, copy)
lyricstranslate.com##+js(aeld, beforecopy)
```

>> Recommended

### Demonstration

#### With Copy Protection

Normally, when you copy more than two verses you get:

```text

Ich leb noch immer bei Mama
Jetzt schon alt, doch immer da
Auch wenn die Ärmel jetzt länger sind
Bin ich immer noch ihr kleines Kind
 
Wir sind allein, doch viel zu zweit
Und teilen gern ein halbes Leid
Das Haus ist klein,
https://lyricstranslate.com/en/rammstein-meine-tranen-lyrics.html

```

#### Without Copy Protection

But with Disable Copy Protection you can copy the entire text:

```text

Ich leb noch immer bei Mama
Jetzt schon alt, doch immer da
Auch wenn die Ärmel jetzt länger sind
Bin ich immer noch ihr kleines Kind
 
Wir sind allein, doch viel zu zweit
Und teilen gern ein halbes Leid
Das Haus ist klein, die Stille groß
Sie zwingt mich oft auf ihren Schoß
 
Ich leb noch immer bei Mama
Und bleibe wohl für immer da
Im Haus fehlt lange schon ein Mann
Ich helfe aus, so gut ich kann
Viel Liebe schenkt mir Mutter nicht
Doch schlägt sie immer noch in mein Gesicht
Und ab und zu hab ich geweint
Da hat sie lächelnd nur gemeint
 
Ein Mann weint nur, wenn seine Mutter stirbt
Der Tod ist stark, das Herz ist schwach
Wenn das eigen Fleisch im Blut verdirbt
Der Klügere gibt nach
 
Auch den Vater konnte sie nicht lieben
Hat ihn aus der Welt getrieben
Dann und wann ein stummer Schrei
Und eine kleine Litanei
Viel Liebe gab ihm Mutter nicht
Doch schlug sie oft in sein Gesicht
Ab und zu hat er geweint
Da hat sie lächelnd nur gemeint
 
Ein Mann weint nur, wenn seine Mutter stirbt
Der Tod ist stark, das Herz ist schwach
Wenn das eigen Fleisch im Blut verdirbt
Der Klügere gibt nach
Du solltest dich schämen
Zeig nie deine Tränen
Du solltest dich schämen
Zeig nie deine Tränen
Deine Tränen
 
Deine Tränen
Deine Tränen

```

## File Tree

```text
.
├── chromium
│   └── 1.0
│       ├── content.js
│       └── manifest.json
│
├── firefox
│   └── 1.0
│       ├── content.js
│       └── manifest.json
│
├── userscript
│   └── userscript-1.0.user.js
│
├── LICENSE
└── README.md

6 directories, 7 files
```

>> 67!!!

## Contributing

Feel free to fork this repository and submit issues or pull requests if you have any suggestions or improvements. If you encounter any bugs or have feature requests, please open an issue.

## Credits

Created by **[Nikoboi](https://github.com/NikoboiNFTB/)**

## License

This project is licenced under the GNU General Public License V3. See [LICENSE](LICENSE) for details.

## Legal Disclaimer

If needed, for traversing the gray areas.
