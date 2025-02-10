/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

/* eslint-disable @typescript-eslint/naming-convention -- This is the convention for these keys. */
/* eslint-disable stylistic/max-len -- These are going to be long strings and that's okay. */
import { Locale } from "discord.js";

export const responses: Record<string, { "no-message-content": string; "subscription-required": string; "translation": string; "unsupported-locale": string }> = {
  en: {
    "no-message-content": "No message content found.",
    "subscription-required":
      "You must be subscribed to translate messages.",
    "translation":
      "{{translation}}\n-# Detected {{language}} with {{confidence}}% confidence.",
    "unsupported-locale": "Language {{target}} is not supported by our translation software.",
  },
  [Locale.Indonesian]: {
    "no-message-content": "Tidak ada konten pesan ditemukan.",
    "subscription-required":
      "Anda harus berlangganan untuk menerjemahkan pesan.",
    "translation":
      "{{translation}}\n-# Mendeteksi {{language}} dengan kepercayaan {{confidence}}%.",
    "unsupported-locale": "Bahasa {{target}} tidak didukung oleh perangkat lunak terjemahan kami.",
  },
  es: {
    "no-message-content": "No se encontró contenido del mensaje.",
    "subscription-required":
      "Debes estar suscrito para traducir mensajes.",
    "translation":
      "{{translation}}\n-# Detectado {{language}} con {{confidence}}% de confianza.",
    "unsupported-locale": "El idioma {{target}} no es compatible con nuestro software de traducción.",
  },
  pt: {
    "no-message-content": "Nenhum conteúdo de mensagem encontrado.",
    "subscription-required":
      "Você deve estar inscrito para traduzir mensagens.",
    "translation":
      "{{translation}}\n-# Detectado {{language}} com {{confidence}}% de confiança.",
    "unsupported-locale": "O idioma {{target}} não é suportado pelo nosso software de tradução.",
  },
  [Locale.Czech]: {
    "no-message-content": "Nebyl nalezen žádný obsah zprávy.",
    "subscription-required":
      "Musíte být přihlášeni k překladu zpráv.",
    "translation":
      "{{translation}}\n-# Detekováno {{language}} s důvěrou {{confidence}}%.",
    "unsupported-locale": "Jazyk {{target}} není podporován naším překladovým softwarem.",
  },
  [Locale.Danish]: {
    "no-message-content": "Ingen beskedindhold fundet.",
    "subscription-required":
      "Du skal være tilmeldt for at oversætte beskeder.",
    "translation":
      "{{translation}}\n-# Detekteret {{language}} med {{confidence}}% tillid.",
    "unsupported-locale": "Sproget {{target}} understøttes ikke af vores oversættelsessoftware.",
  },
  [Locale.Dutch]: {
    "no-message-content": "Geen berichtinhoud gevonden.",
    "subscription-required":
      "U moet zijn geabonneerd om berichten te vertalen.",
    "translation":
      "{{translation}}\n-# Gedetecteerd {{language}} met {{confidence}}% vertrouwen.",
    "unsupported-locale": "Taal {{target}} wordt niet ondersteund door onze vertaalsoftware.",
  },
  [Locale.Finnish]: {
    "no-message-content": "Ei viestisisältöä löytynyt.",
    "subscription-required":
      "Sinun on tilattava viestien kääntämiseksi.",
    "translation":
      "{{translation}}\n-# Havaittu {{language}} {{confidence}}% luottamuksella.",
    "unsupported-locale": "Kieltä {{target}} ei tueta käännössovelluksellamme.",
  },
  [Locale.French]: {
    "no-message-content": "Aucun contenu de message trouvé.",
    "subscription-required":
      "Vous devez être abonné pour traduire les messages.",
    "translation":
      "{{translation}}\n-# Détecté {{language}} avec {{confidence}}% de confiance.",
    "unsupported-locale": "La langue {{target}} n'est pas prise en charge par notre logiciel de traduction.",
  },
  [Locale.German]: {
    "no-message-content": "Kein Nachrichteninhalt gefunden.",
    "subscription-required":
      "Sie müssen abonniert sein, um Nachrichten zu übersetzen.",
    "translation":
      "{{translation}}\n-# Erkannt {{language}} mit {{confidence}}% Vertrauen.",
    "unsupported-locale": "Die Sprache {{target}} wird von unserer Übersetzungssoftware nicht unterstützt.",
  },
  [Locale.Greek]: {
    "no-message-content": "Δεν βρέθηκε περιεχόμενο μηνύματος.",
    "subscription-required":
      "Πρέπει να είστε συνδρομητής για να μεταφράσετε μηνύματα.",
    "translation":
      "{{translation}}\n-# Ανιχνεύθηκε {{language}} με {{confidence}}% εμπιστοσύνη.",
    "unsupported-locale": "Η γλώσσα {{target}} δεν υποστηρίζεται από το λογισμικό μετάφρασής μας.",
  },
  [Locale.Hindi]: {
    "no-message-content": "कोई संदेश सामग्री नहीं मिली।",
    "subscription-required":
      "आपको संदेश अनुवाद करने के लिए सब्सक्राइब करना होगा।",
    "translation":
      "{{translation}}\n-# {{confidence}}% विश्वास के साथ {{language}} का पता लगाया गया।",
    "unsupported-locale": "हमारे अनुवाद सॉफ़्टवेयर द्वारा {{target}} भाषा का समर्थन नहीं किया जाता है।",
  },
  [Locale.Hungarian]: {
    "no-message-content": "Nem található üzenettartalom.",
    "subscription-required":
      "Fel kell iratkoznia az üzenetek fordításához.",
    "translation":
      "{{translation}}\n-# {{language}} érzékelve {{confidence}}% bizalommal.",
    "unsupported-locale": "A {{target}} nyelvet nem támogatja fordító szoftverünk.",
  },
  [Locale.Italian]: {
    "no-message-content": "Nessun contenuto del messaggio trovato.",
    "subscription-required":
      "Devi essere abbonato per tradurre i messaggi.",
    "translation":
      "{{translation}}\n-# Rilevato {{language}} con {{confidence}}% di fiducia.",
    "unsupported-locale": "La lingua {{target}} non è supportata dal nostro software di traduzione.",
  },
  [Locale.Japanese]: {
    "no-message-content": "メッセージコンテンツが見つかりません。",
    "subscription-required":
      "メッセージを翻訳するには購読する必要があります。",
    "translation":
      "{{translation}}\n-# {{confidence}}% の信頼度で {{language}} を検出しました。",
    "unsupported-locale": "{{target}} 言語は、翻訳ソフトウェアでサポートされていません。",
  },
  [Locale.Korean]: {
    "no-message-content": "메시지 내용을 찾을 수 없습니다.",
    "subscription-required":
      "메시지를 번역하려면 구독해야 합니다.",
    "translation":
      "{{translation}}\n-# {{confidence}}% 신뢰도로 {{language}} 감지.",
    "unsupported-locale": "{{target}} 언어는 번역 소프트웨어에서 지원되지 않습니다.",
  },
  [Locale.Lithuanian]: {
    "no-message-content": "Nerasta jokio pranešimo turinio.",
    "subscription-required":
      "Norint išversti žinutes, turite būti prenumeratorius.",
    "translation":
      "{{translation}}\n-# Aptikta {{language}} su {{confidence}}% pasitikėjimu.",
    "unsupported-locale": "{{target}} kalba nepalaikoma mūsų vertimo programine įranga.",
  },
  [Locale.Polish]: {
    "no-message-content": "Nie znaleziono treści wiadomości.",
    "subscription-required":
      "Aby tłumaczyć wiadomości, musisz być subskrybentem.",
    "translation":
      "{{translation}}\n-# Wykryto {{language}} z {{confidence}}% pewnością.",
    "unsupported-locale": "Język {{target}} nie jest obsługiwany przez nasze oprogramowanie do tłumaczenia.",
  },
  sv: {
    "no-message-content": "Inget meddelandeinnehåll hittades.",
    "subscription-required":
      "Du måste prenumerera för att översätta meddelanden.",
    "translation":
      "{{translation}}\n-# Upptäckt {{language}} med {{confidence}}% förtroende.",
    "unsupported-locale": "Språket {{target}} stöds inte av vår översättningsprogramvara.",
  },
  [Locale.Romanian]: {
    "no-message-content": "Nu s-a găsit niciun conținut de mesaj.",
    "subscription-required":
      "Trebuie să fiți abonat pentru a traduce mesajele.",
    "translation":
      "{{translation}}\n-# Detectat {{language}} cu {{confidence}}% încredere.",
    "unsupported-locale": "Limba {{target}} nu este acceptată de software-ul nostru de traducere.",
  },
  [Locale.Russian]: {
    "no-message-content": "Содержимое сообщения не найдено.",
    "subscription-required":
      "Вы должны быть подписаны на перевод сообщений.",
    "translation":
      "{{translation}}\n-# Обнаружен {{language}} с {{confidence}}% уверенностью.",
    "unsupported-locale": "Язык {{target}} не поддерживается нашим программным обеспечением для перевода.",
  },
  zh: {
    "no-message-content":    "未找到消息内容。",
    "subscription-required": "您必须订阅以翻译消息。",
    "translation":
      "{{translation}}\n-# 检测到 {{language}}，{{confidence}}% 的信心。",
    "unsupported-locale": "我们的翻译软件不支持 {{target}} 语言。",
  },
  zt: {
    "no-message-content":    "未找到消息内容。",
    "subscription-required": "您必须订阅以翻译消息。",
    "translation":
      "{{translation}}\n-# 检测到 {{language}}，{{confidence}}% 的信心。",
    "unsupported-locale": "我们的翻译软件不支持 {{target}} 语言。",
  },
  [Locale.Thai]: {
    "no-message-content": "ไม่พบเนื้อหาข้อความ",
    "subscription-required":
      "คุณต้องสมัครสมาชิกเพื่อแปลข้อความ",
    "translation":
      "{{translation}}\n-# ตรวจพบ {{language}} ด้วยความมั่นใจ {{confidence}}%",
    "unsupported-locale": "ภาษา {{target}} ไม่ได้รับการสนับสนุนโดยซอฟต์แวร์แปลของเรา",
  },
  [Locale.Turkish]: {
    "no-message-content": "Hiçbir mesaj içeriği bulunamadı.",
    "subscription-required":
      "Mesajları çevirmek için abone olmalısınız.",
    "translation":
      "{{translation}}\n-# {{confidence}}% güvenle {{language}} tespit edildi.",
    "unsupported-locale": "{{target}} dilimiz tarafından desteklenmiyor.",
  },
  [Locale.Ukrainian]: {
    "no-message-content": "Не знайдено вмісту повідомлення.",
    "subscription-required":
      "Ви повинні підписатися на переклад повідомлень.",
    "translation":
      "{{translation}}\n-# Виявлено {{language}} з {{confidence}}% впевненістю.",
    "unsupported-locale": "Мова {{target}} не підтримується нашим програмним забезпеченням для перекладу.",
  },
};
