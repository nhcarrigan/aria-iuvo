/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

/* eslint-disable @typescript-eslint/naming-convention -- This is the convention for these keys. */
/* eslint-disable stylistic/max-len -- These are going to be long strings and that's okay. */
/* eslint-disable max-lines  -- massive chonky boi*/
import { Locale } from "discord.js";

export const responses: Record<string, { "no-message-content": string; "subscription-required": string; "translation": string; "unsupported-locale": string; "embed": { title: string; description: string; commit: string; version: string }; "button": { support: string; code: string } }> = {
  en: {
    "button": {
      code:    "Source code",
      support: "Need help?",
    },
    "embed": {
      commit:      "Current Commit",
      description: "Aria Iuvo is a Discord bot that uses LibreTranslate to provide translations for messages. She is developed by NHCarrigan. To use the bot, right click on a message, select `Apps`, then select `Translate message`!",
      title:       "About Aria Iuvo",
      version:     "Running Version",
    },
    "no-message-content": "No message content found.",
    "subscription-required":
      "You must be subscribed to translate messages.",
    "translation":
      "{{translation}}\n-# Detected {{language}} with {{confidence}}% confidence.",
    "unsupported-locale": "Language {{target}} is not supported by our translation software.",
  },
  [Locale.Indonesian]: {
    "button": {
      code:    "Kode sumber",
      support: "Butuh bantuan?",
    },
    "embed": {
      commit:      "Commit Saat Ini",
      description: "Aria Iuvo adalah bot Discord yang menggunakan LibreTranslate untuk menyediakan terjemahan pesan. Dia dikembangkan oleh NHCarrigan. Untuk menggunakan bot, klik kanan pada pesan, pilih `Apps`, lalu pilih `Translate message`!",
      title:       "Tentang Aria Iuvo",
      version:     "Versi Berjalan",
    },
    "no-message-content":    "Tidak ditemukan konten pesan.",
    "subscription-required": "Anda harus berlangganan untuk menerjemahkan pesan.",
    "translation":           "{{translation}}\n-# Terdeteksi {{language}} dengan tingkat kepercayaan {{confidence}}%.",
    "unsupported-locale":    "Bahasa {{target}} tidak didukung oleh perangkat lunak terjemahan kami.",
  },
  es: {
    "button": {
      code:    "Código fuente",
      support: "¿Necesitas ayuda?",
    },
    "embed": {
      commit:      "Commit Actual",
      description: "Aria Iuvo es un bot de Discord que usa LibreTranslate para proporcionar traducciones de mensajes. Está desarrollada por NHCarrigan. Para usar el bot, haz clic derecho en un mensaje, selecciona `Apps`, ¡luego selecciona `Translate message`!",
      title:       "Sobre Aria Iuvo",
      version:     "Versión en Ejecución",
    },
    "no-message-content":    "No se encontró contenido del mensaje.",
    "subscription-required": "Debes estar suscrito para traducir mensajes.",
    "translation":           "{{translation}}\n-# Detectado {{language}} con {{confidence}}% de confianza.",
    "unsupported-locale":    "El idioma {{target}} no es compatible con nuestro software de traducción.",
  },
  pt: {
    "button": {
      code:    "Código fonte",
      support: "Precisa de ajuda?",
    },
    "embed": {
      commit:      "Commit Atual",
      description: "Aria Iuvo é um bot do Discord que usa LibreTranslate para fornecer traduções de mensagens. Ela é desenvolvida por NHCarrigan. Para usar o bot, clique com o botão direito em uma mensagem, selecione `Apps`, depois selecione `Translate message`!",
      title:       "Sobre Aria Iuvo",
      version:     "Versão em Execução",
    },
    "no-message-content":    "Nenhum conteúdo de mensagem encontrado.",
    "subscription-required": "Você precisa ser assinante para traduzir mensagens.",
    "translation":           "{{translation}}\n-# Detectado {{language}} com {{confidence}}% de confiança.",
    "unsupported-locale":    "O idioma {{target}} não é suportado pelo nosso software de tradução.",
  },
  [Locale.Czech]: {
    "button": {
      code:    "Zdrojový kód",
      support: "Potřebujete pomoc?",
    },
    "embed": {
      commit:      "Aktuální Commit",
      description: "Aria Iuvo je Discord bot, který používá LibreTranslate k poskytování překladů zpráv. Je vyvíjena NHCarriganem. Pro použití bota klikněte pravým tlačítkem na zprávu, vyberte `Apps`, pak vyberte `Translate message`!",
      title:       "O Aria Iuvo",
      version:     "Aktuální Verze",
    },
    "no-message-content":    "Nebyl nalezen žádný obsah zprávy.",
    "subscription-required": "Pro překládání zpráv musíte mít předplatné.",
    "translation":           "{{translation}}\n-# Detekován jazyk {{language}} s {{confidence}}% jistotou.",
    "unsupported-locale":    "Jazyk {{target}} není podporován naším překladovým softwarem.",
  },
  [Locale.Danish]: {
    "button": {
      code:    "Kildekode",
      support: "Brug for hjælp?",
    },
    "embed": {
      commit:      "Nuværende Commit",
      description: "Aria Iuvo er en Discord bot, der bruger LibreTranslate til at levere oversættelser af beskeder. Hun er udviklet af NHCarrigan. For at bruge botten, højreklik på en besked, vælg `Apps`, vælg derefter `Translate message`!",
      title:       "Om Aria Iuvo",
      version:     "Kørende Version",
    },
    "no-message-content":    "Intet beskedindhold fundet.",
    "subscription-required": "Du skal være abonnent for at oversætte beskeder.",
    "translation":           "{{translation}}\n-# Detekteret {{language}} med {{confidence}}% sikkerhed.",
    "unsupported-locale":    "Sproget {{target}} understøttes ikke af vores oversættelsessoftware.",
  },
  [Locale.Dutch]: {
    "button": {
      code:    "Broncode",
      support: "Hulp nodig?",
    },
    "embed": {
      commit:      "Huidige Commit",
      description: "Aria Iuvo is een Discord bot die LibreTranslate gebruikt om vertalingen voor berichten te verzorgen. Ze is ontwikkeld door NHCarrigan. Om de bot te gebruiken, klik met de rechtermuisknop op een bericht, selecteer `Apps`, selecteer vervolgens `Translate message`!",
      title:       "Over Aria Iuvo",
      version:     "Huidige Versie",
    },
    "no-message-content":    "Geen berichtinhoud gevonden.",
    "subscription-required": "Je moet geabonneerd zijn om berichten te vertalen.",
    "translation":           "{{translation}}\n-# Gedetecteerd {{language}} met {{confidence}}% zekerheid.",
    "unsupported-locale":    "Taal {{target}} wordt niet ondersteund door onze vertaalsoftware.",
  },
  [Locale.Finnish]: {
    "button": {
      code:    "Lähdekoodi",
      support: "Tarvitsetko apua?",
    },
    "embed": {
      commit:      "Nykyinen Commit",
      description: "Aria Iuvo on Discord-botti, joka käyttää LibreTranslatea viestien kääntämiseen. Sen on kehittänyt NHCarrigan. Käyttääksesi bottia, napsauta hiiren oikealla painikkeella viestiä, valitse `Apps`, sitten valitse `Translate message`!",
      title:       "Tietoja Aria Iuvosta",
      version:     "Käynnissä Oleva Versio",
    },
    "no-message-content":    "Viestin sisältöä ei löytynyt.",
    "subscription-required": "Sinun täytyy olla tilaaja kääntääksesi viestejä.",
    "translation":           "{{translation}}\n-# Tunnistettu {{language}} {{confidence}}% varmuudella.",
    "unsupported-locale":    "Kieli {{target}} ei ole käännösohjelmistomme tukema.",
  },
  [Locale.French]: {
    "button": {
      code:    "Code source",
      support: "Besoin d'aide ?",
    },
    "embed": {
      commit:      "Commit Actuel",
      description: "Aria Iuvo est un bot Discord qui utilise LibreTranslate pour fournir des traductions de messages. Elle est développée par NHCarrigan. Pour utiliser le bot, faites un clic droit sur un message, sélectionnez `Apps`, puis sélectionnez `Translate message` !",
      title:       "À propos d'Aria Iuvo",
      version:     "Version en Cours",
    },
    "no-message-content":    "Aucun contenu de message trouvé.",
    "subscription-required": "Vous devez être abonné pour traduire les messages.",
    "translation":           "{{translation}}\n-# Détecté {{language}} avec {{confidence}}% de confiance.",
    "unsupported-locale":    "La langue {{target}} n'est pas prise en charge par notre logiciel de traduction.",
  },
  [Locale.German]: {
    "button": {
      code:    "Quellcode",
      support: "Hilfe benötigt?",
    },
    "embed": {
      commit:      "Aktueller Commit",
      description: "Aria Iuvo ist ein Discord-Bot, der LibreTranslate verwendet, um Übersetzungen für Nachrichten bereitzustellen. Sie wurde von NHCarrigan entwickelt. Um den Bot zu verwenden, klicken Sie mit der rechten Maustaste auf eine Nachricht, wählen Sie `Apps` und dann `Translate message`!",
      title:       "Über Aria Iuvo",
      version:     "Laufende Version",
    },
    "no-message-content":    "Kein Nachrichteninhalt gefunden.",
    "subscription-required": "Sie müssen abonniert sein, um Nachrichten zu übersetzen.",
    "translation":           "{{translation}}\n-# Erkannt {{language}} mit {{confidence}}% Sicherheit.",
    "unsupported-locale":    "Die Sprache {{target}} wird von unserer Übersetzungssoftware nicht unterstützt.",
  },
  [Locale.Greek]: {
    "button": {
      code:    "Πηγαίος κώδικας",
      support: "Χρειάζεστε βοήθεια;",
    },
    "embed": {
      commit:      "Τρέχον Commit",
      description: "Η Aria Iuvo είναι ένα bot Discord που χρησιμοποιεί το LibreTranslate για να παρέχει μεταφράσεις μηνυμάτων. Αναπτύχθηκε από τον NHCarrigan. Για να χρησιμοποιήσετε το bot, κάντε δεξί κλικ σε ένα μήνυμα, επιλέξτε `Apps`, στη συνέχεια επιλέξτε `Translate message`!",
      title:       "Σχετικά με την Aria Iuvo",
      version:     "Τρέχουσα Έκδοση",
    },
    "no-message-content":    "Δεν βρέθηκε περιεχόμενο μηνύματος.",
    "subscription-required": "Πρέπει να είστε συνδρομητής για να μεταφράσετε μηνύματα.",
    "translation":           "{{translation}}\n-# Εντοπίστηκε {{language}} με {{confidence}}% βεβαιότητα.",
    "unsupported-locale":    "Η γλώσσα {{target}} δεν υποστηρίζεται από το λογισμικό μετάφρασής μας.",
  },
  [Locale.Hindi]: {
    "button": {
      code:    "सोर्स कोड",
      support: "मदद चाहिए?",
    },
    "embed": {
      commit:      "वर्तमान कमिट",
      description: "Aria Iuvo एक Discord बॉट है जो संदेशों के अनुवाद के लिए LibreTranslate का उपयोग करती है। इसे NHCarrigan द्वारा विकसित किया गया है। बॉट का उपयोग करने के लिए, किसी संदेश पर राइट क्लिक करें, `Apps` चुनें, फिर `Translate message` चुनें!",
      title:       "Aria Iuvo के बारे में",
      version:     "चल रहा संस्करण",
    },
    "no-message-content":    "कोई संदेश सामग्री नहीं मिली।",
    "subscription-required": "संदेशों का अनुवाद करने के लिए आपको सदस्यता लेनी होगी।",
    "translation":           "{{translation}}\n-# {{confidence}}% विश्वास के साथ {{language}} का पता चला।",
    "unsupported-locale":    "भाषा {{target}} हमारे अनुवाद सॉफ्टवेयर द्वारा समर्थित नहीं है।",
  },
  [Locale.Hungarian]: {
    "button": {
      code:    "Forráskód",
      support: "Segítségre van szüksége?",
    },
    "embed": {
      commit:      "Jelenlegi Commit",
      description: "Az Aria Iuvo egy Discord bot, amely a LibreTranslate-et használja üzenetek fordításához. NHCarrigan fejlesztette. A bot használatához kattintson jobb gombbal egy üzenetre, válassza az `Apps` lehetőséget, majd válassza a `Translate message` opciót!",
      title:       "Az Aria Iuvoról",
      version:     "Futó Verzió",
    },
    "no-message-content":    "Nem található üzenet tartalom.",
    "subscription-required": "Feliratkozás szükséges az üzenetek fordításához.",
    "translation":           "{{translation}}\n-# {{language}} nyelv észlelve {{confidence}}% biztonsággal.",
    "unsupported-locale":    "A(z) {{target}} nyelvet nem támogatja a fordító szoftverünk.",
  },
  [Locale.Italian]: {
    "button": {
      code:    "Codice sorgente",
      support: "Hai bisogno di aiuto?",
    },
    "embed": {
      commit:      "Commit Attuale",
      description: "Aria Iuvo è un bot Discord che utilizza LibreTranslate per fornire traduzioni dei messaggi. È sviluppata da NHCarrigan. Per utilizzare il bot, fai clic destro su un messaggio, seleziona `Apps`, quindi seleziona `Translate message`!",
      title:       "Informazioni su Aria Iuvo",
      version:     "Versione in Esecuzione",
    },
    "no-message-content":    "Nessun contenuto del messaggio trovato.",
    "subscription-required": "Devi essere abbonato per tradurre i messaggi.",
    "translation":           "{{translation}}\n-# Rilevato {{language}} con {{confidence}}% di affidabilità.",
    "unsupported-locale":    "La lingua {{target}} non è supportata dal nostro software di traduzione.",
  },
  [Locale.Japanese]: {
    "button": {
      code:    "ソースコード",
      support: "サポートが必要ですか？",
    },
    "embed": {
      commit:      "現在のコミット",
      description: "Aria Iuvoは、LibreTranslateを使用してメッセージの翻訳を提供するDiscordボットです。NHCarriganによって開発されました。ボットを使用するには、メッセージを右クリックし、`Apps`を選択し、`Translate message`を選択してください！",
      title:       "Aria Iuvoについて",
      version:     "実行中のバージョン",
    },
    "no-message-content":    "メッセージの内容が見つかりません。",
    "subscription-required": "メッセージを翻訳するには購読が必要です。",
    "translation":           "{{translation}}\n-# {{confidence}}%の確率で{{language}}を検出しました。",
    "unsupported-locale":    "言語{{target}}は翻訳ソフトウェアでサポートされていません。",
  },
  [Locale.Korean]: {
    "button": {
      code:    "소스 코드",
      support: "도움이 필요하신가요?",
    },
    "embed": {
      commit:      "현재 커밋",
      description: "Aria Iuvo는 LibreTranslate를 사용하여 메시지 번역을 제공하는 Discord 봇입니다. NHCarrigan이 개발했습니다. 봇을 사용하려면 메시지를 마우스 오른쪽 버튼으로 클릭하고 `Apps`를 선택한 다음 `Translate message`를 선택하세요!",
      title:       "Aria Iuvo 소개",
      version:     "실행 중인 버전",
    },
    "no-message-content":    "메시지 내용을 찾을 수 없습니다.",
    "subscription-required": "메시지를 번역하려면 구독이 필요합니다.",
    "translation":           "{{translation}}\n-# {{confidence}}% 신뢰도로 {{language}} 감지됨.",
    "unsupported-locale":    "언어 {{target}}는 번역 소프트웨어에서 지원되지 않습니다.",
  },
  [Locale.Lithuanian]: {
    "button": {
      code:    "Išeities kodas",
      support: "Reikia pagalbos?",
    },
    "embed": {
      commit:      "Dabartinis Commit",
      description: "Aria Iuvo yra Discord botas, naudojantis LibreTranslate žinučių vertimams. Ją sukūrė NHCarrigan. Norėdami naudoti botą, dešiniuoju pelės klavišu spustelėkite žinutę, pasirinkite `Apps`, tada pasirinkite `Translate message`!",
      title:       "Apie Aria Iuvo",
      version:     "Veikianti Versija",
    },
    "no-message-content":    "Žinutės turinio nerasta.",
    "subscription-required": "Turite būti prenumeratorius, kad galėtumėte versti žinutes.",
    "translation":           "{{translation}}\n-# Aptikta {{language}} su {{confidence}}% tikimybe.",
    "unsupported-locale":    "Kalba {{target}} nėra palaikoma mūsų vertimo programinės įrangos.",
  },
  [Locale.Polish]: {
    "button": {
      code:    "Kod źródłowy",
      support: "Potrzebujesz pomocy?",
    },
    "embed": {
      commit:      "Aktualny Commit",
      description: "Aria Iuvo to bot Discord, który używa LibreTranslate do tłumaczenia wiadomości. Została stworzona przez NHCarrigan. Aby użyć bota, kliknij prawym przyciskiem myszy na wiadomość, wybierz `Apps`, następnie wybierz `Translate message`!",
      title:       "O Aria Iuvo",
      version:     "Aktualna Wersja",
    },
    "no-message-content":    "Nie znaleziono treści wiadomości.",
    "subscription-required": "Musisz być subskrybentem, aby tłumaczyć wiadomości.",
    "translation":           "{{translation}}\n-# Wykryto {{language}} z {{confidence}}% pewnością.",
    "unsupported-locale":    "Język {{target}} nie jest obsługiwany przez nasze oprogramowanie do tłumaczeń.",
  },
  sv: {
    "button": {
      code:    "Källkod",
      support: "Behöver du hjälp?",
    },
    "embed": {
      commit:      "Nuvarande Commit",
      description: "Aria Iuvo är en Discord-bot som använder LibreTranslate för att tillhandahålla översättningar av meddelanden. Hon är utvecklad av NHCarrigan. För att använda boten, högerklicka på ett meddelande, välj `Apps`, välj sedan `Translate message`!",
      title:       "Om Aria Iuvo",
      version:     "Körande Version",
    },
    "no-message-content":    "Inget meddelandeinnehåll hittades.",
    "subscription-required": "Du måste prenumerera för att översätta meddelanden.",
    "translation":           "{{translation}}\n-# Upptäckte {{language}} med {{confidence}}% säkerhet.",
    "unsupported-locale":    "Språket {{target}} stöds inte av vår översättningsprogramvara.",
  },
  [Locale.Romanian]: {
    "button": {
      code:    "Cod sursă",
      support: "Aveți nevoie de ajutor?",
    },
    "embed": {
      commit:      "Commit Curent",
      description: "Aria Iuvo este un bot Discord care folosește LibreTranslate pentru a furniza traduceri pentru mesaje. Este dezvoltat de NHCarrigan. Pentru a folosi botul, faceți clic dreapta pe un mesaj, selectați `Apps`, apoi selectați `Translate message`!",
      title:       "Despre Aria Iuvo",
      version:     "Versiunea Curentă",
    },
    "no-message-content":    "Nu s-a găsit conținutul mesajului.",
    "subscription-required": "Trebuie să fiți abonat pentru a traduce mesaje.",
    "translation":           "{{translation}}\n-# Detectat {{language}} cu {{confidence}}% încredere.",
    "unsupported-locale":    "Limba {{target}} nu este suportată de software-ul nostru de traducere.",
  },
  [Locale.Russian]: {
    "button": {
      code:    "Исходный код",
      support: "Нужна помощь?",
    },
    "embed": {
      commit:      "Текущий Коммит",
      description: "Aria Iuvo - это Discord бот, использующий LibreTranslate для перевода сообщений. Разработан NHCarrigan. Чтобы использовать бота, щелкните правой кнопкой мыши по сообщению, выберите `Apps`, затем выберите `Translate message`!",
      title:       "О Aria Iuvo",
      version:     "Текущая Версия",
    },
    "no-message-content":    "Содержимое сообщения не найдено.",
    "subscription-required": "Для перевода сообщений необходима подписка.",
    "translation":           "{{translation}}\n-# Обнаружен {{language}} с уверенностью {{confidence}}%.",
    "unsupported-locale":    "Язык {{target}} не поддерживается нашим программным обеспечением для перевода.",
  },
  zh: {
    "button": {
      code:    "源代码",
      support: "需要帮助？",
    },
    "embed": {
      commit:      "当前提交",
      description: "Aria Iuvo是一个使用LibreTranslate提供消息翻译的Discord机器人。由NHCarrigan开发。要使用机器人，右键点击消息，选择`Apps`，然后选择`Translate message`！",
      title:       "关于Aria Iuvo",
      version:     "运行版本",
    },
    "no-message-content":    "未找到消息内容。",
    "subscription-required": "您必须订阅才能翻译消息。",
    "translation":           "{{translation}}\n-# 检测到{{language}}，置信度为{{confidence}}%。",
    "unsupported-locale":    "我们的翻译软件不支持{{target}}语言。",
  },
  zt: {
    "button": {
      code:    "原始碼",
      support: "需要幫助？",
    },
    "embed": {
      commit:      "當前提交",
      description: "Aria Iuvo是一個使用LibreTranslate提供訊息翻譯的Discord機器人。由NHCarrigan開發。要使用機器人，右鍵點擊訊息，選擇`Apps`，然後選擇`Translate message`！",
      title:       "關於Aria Iuvo",
      version:     "運行版本",
    },
    "no-message-content":    "未找到訊息內容。",
    "subscription-required": "您必須訂閱才能翻譯訊息。",
    "translation":           "{{translation}}\n-# 檢測到{{language}}，置信度為{{confidence}}%。",
    "unsupported-locale":    "我們的翻譯軟件不支持{{target}}語言。",
  },
  [Locale.Thai]: {
    "button": {
      code:    "ซอร์สโค้ด",
      support: "ต้องการความช่วยเหลือ?",
    },
    "embed": {
      commit:      "คอมมิตปัจจุบัน",
      description: "Aria Iuvo เป็นบอท Discord ที่ใช้ LibreTranslate เพื่อแปลข้อความ พัฒนาโดย NHCarrigan ในการใช้บอท ให้คลิกขวาที่ข้อความ เลือก `Apps` จากนั้นเลือก `Translate message`!",
      title:       "เกี่ยวกับ Aria Iuvo",
      version:     "เวอร์ชันที่ใช้งาน",
    },
    "no-message-content":    "ไม่พบเนื้อหาข้อความ",
    "subscription-required": "คุณต้องเป็นสมาชิกเพื่อแปลข้อความ",
    "translation":           "{{translation}}\n-# ตรวจพบ {{language}} ด้วยความเชื่อมั่น {{confidence}}%",
    "unsupported-locale":    "ภาษา {{target}} ไม่รองรับโดยซอฟต์แวร์แปลภาษาของเรา",
  },
  [Locale.Turkish]: {
    "button": {
      code:    "Kaynak kodu",
      support: "Yardıma mı ihtiyacınız var?",
    },
    "embed": {
      commit:      "Mevcut Commit",
      description: "Aria Iuvo, mesajlar için çeviri sağlamak üzere LibreTranslate kullanan bir Discord botudur. NHCarrigan tarafından geliştirilmiştir. Botu kullanmak için, bir mesaja sağ tıklayın, `Apps`'i seçin, ardından `Translate message`'ı seçin!",
      title:       "Aria Iuvo Hakkında",
      version:     "Çalışan Sürüm",
    },
    "no-message-content":    "Mesaj içeriği bulunamadı.",
    "subscription-required": "Mesajları çevirmek için abone olmanız gerekiyor.",
    "translation":           "{{translation}}\n-# {{confidence}}% güvenle {{language}} tespit edildi.",
    "unsupported-locale":    "{{target}} dili çeviri yazılımımız tarafından desteklenmiyor.",
  },
  [Locale.Ukrainian]: {
    "button": {
      code:    "Вихідний код",
      support: "Потрібна допомога?",
    },
    "embed": {
      commit:      "Поточний Коміт",
      description: "Aria Iuvo - це Discord бот, який використовує LibreTranslate для перекладу повідомлень. Розроблений NHCarrigan. Щоб використовувати бота, клацніть правою кнопкою миші на повідомленні, виберіть `Apps`, потім виберіть `Translate message`!",
      title:       "Про Aria Iuvo",
      version:     "Поточна Версія",
    },
    "no-message-content":    "Вміст повідомлення не знайдено.",
    "subscription-required": "Для перекладу повідомлень потрібна підписка.",
    "translation":           "{{translation}}\n-# Виявлено {{language}} з впевненістю {{confidence}}%.",
    "unsupported-locale":    "Мова {{target}} не підтримується нашим програмним забезпеченням для перекладу.",
  },
};
