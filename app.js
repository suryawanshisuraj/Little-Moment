const occasions = [
  {name:'Girlfriend Day',category:'Love',emoji:'💌',tag:'For your person',color:'#f5e0db',blob:'#d99383',note:'a little love note'},
  {name:'Boyfriend Day',category:'Love',emoji:'🌷',tag:'For your person',color:'#e8e9da',blob:'#c7b988',note:'just for you'},
  {name:"Valentine’s Day",category:'Love',emoji:'❤️',tag:'Love is in the air',color:'#f0d9d6',blob:'#d77b70',note:'my favorite human'},
  {name:'Anniversary',category:'Love',emoji:'🥂',tag:'One more year',color:'#ece1d0',blob:'#d6ad76',note:'our little story'},
  {name:'Just Because',category:'Love',emoji:'🌼',tag:'No reason needed',color:'#f1e9cf',blob:'#d7b85e',note:'thinking of you'},
  {name:'Friendship Day',category:'Friends & family',emoji:'🫶',tag:'Bestie energy',color:'#e3e9dd',blob:'#a3b597',note:'partners in everything'},
  {name:'Birthday',category:'Friends & family',emoji:'🎂',tag:'Their big day',color:'#f1e3d3',blob:'#e1b18a',note:'make a wish'},
  {name:"Mother’s Day",category:'Friends & family',emoji:'🌸',tag:'For the best',color:'#f0e1e4',blob:'#d79caf',note:'all my love'},
  {name:"Father’s Day",category:'Friends & family',emoji:'☀️',tag:'For the best',color:'#e5e5d9',blob:'#b4ae81',note:'thanks for everything'},
  {name:'Sister’s Day',category:'Friends & family',emoji:'🦋',tag:'Built-in bestie',color:'#e9e2ee',blob:'#bba9ce',note:'my forever friend'},
  {name:'Brother’s Day',category:'Friends & family',emoji:'⭐',tag:'Always in your corner',color:'#e7e2d4',blob:'#c3b277',note:'you’re the best'},
  {name:'Graduation',category:'Milestones',emoji:'🎓',tag:'You did it!',color:'#dfe7df',blob:'#a5b79b',note:'look how far you’ve come'},
  {name:'Congratulations',category:'Milestones',emoji:'🎉',tag:'Big news, big love',color:'#eee3cd',blob:'#d4ad61',note:'so proud of you'},
  {name:'Engagement',category:'Milestones',emoji:'💍',tag:'A new chapter',color:'#eee1d7',blob:'#d4a486',note:'the best is yet to come'},
  {name:'New Year',category:'Festivals',emoji:'✨',tag:'Fresh beginnings',color:'#e4e5dc',blob:'#c3b882',note:'here’s to what’s next'},
  {name:'Diwali',category:'Festivals',emoji:'🪔',tag:'Festival of lights',color:'#f1dfc4',blob:'#dda65c',note:'wishing you light'},
  {name:'Holi',category:'Festivals',emoji:'🎨',tag:'A little more color',color:'#ecdfeb',blob:'#c69ac1',note:'color me happy'},
  {name:'Raksha Bandhan',category:'Festivals',emoji:'🧵',tag:'A bond like no other',color:'#f0e0d8',blob:'#d99383',note:'my first best friend'},
  {name:'Ganesh Chaturthi',category:'Festivals',emoji:'🐘',tag:'New beginnings',color:'#e8e2cf',blob:'#c6a977',note:'may good things find you'},
  {name:'Christmas',category:'Festivals',emoji:'🎄',tag:'A little winter magic',color:'#dfe7dc',blob:'#a0b092',note:'all I want is more time with you'},
  {name:'Eid',category:'Festivals',emoji:'🌙',tag:'A joyful celebration',color:'#e5e9dc',blob:'#afba91',note:'wishing you peace & joy'},
  {name:'Thank You',category:'Friends & family',emoji:'💐',tag:'A little gratitude',color:'#e8e5d6',blob:'#c2bd8a',note:'I appreciate you'},
  {name:'New Baby',category:'Milestones',emoji:'🧸',tag:'A tiny new love',color:'#eee1d7',blob:'#d8aa8e',note:'welcome, little one'},
  {name:'Teacher Appreciation',category:'Friends & family',emoji:'🍎',tag:'For a special teacher',color:'#e7e7db',blob:'#b4b17f',note:'you made a difference'}
];

const designs = [
  {title:'The softest love note',occasion:'Girlfriend Day',badge:'A Little Romantic',image:'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=85',description:'A note they’ll want to keep'},
  {title:'Our kind of forever',occasion:'Anniversary',badge:'Made for Two',image:'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=85',description:'One more page in your story'},
  {title:'Best friends, always',occasion:'Friendship Day',badge:'Bestie Approved',image:'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85',description:'For your built-in happy place'}
];

const TARGET_PHONE = '919529573880';

const occasionGrid = document.querySelector('#occasionGrid');
const templateGrid = document.querySelector('#templateGrid');
const builder = document.querySelector('#builder');
const toInput = document.querySelector('#toName');
const fromInput = document.querySelector('#fromName');
const messageInput = document.querySelector('#message');
const customerPhoneInput = document.querySelector('#customerPhone');
const photoBtnText = document.querySelector('#photoBtnText');
const shareButton = document.querySelector('#shareButton');
const copyLinkButton = document.querySelector('#copyLinkButton');
const previewRecipientBtn = document.querySelector('#previewRecipientBtn');
const liveTo = document.querySelector('#liveTo');
const liveFrom = document.querySelector('#liveFrom');
const liveMessage = document.querySelector('#liveMessage');
const liveOccasion = document.querySelector('#liveOccasion');
const liveCard = document.querySelector('#liveCard');
const liveImage = document.querySelector('#liveImage');
const shareStatus = document.querySelector('#shareStatus');
const toast = document.querySelector('#toast');
const photoUpload = document.querySelector('#photoUpload');
const resetPhotoBtn = document.querySelector('#resetPhotoBtn');

// Recipient Dialog Elements
const recipientDialog = document.querySelector('#recipientDialog');
const closeRecipientBtn = document.querySelector('#closeRecipientBtn');
const recipientToDisplay = document.querySelector('#recipientToDisplay');
const recipientFromDisplay = document.querySelector('#recipientFromDisplay');
const recipientMessageDisplay = document.querySelector('#recipientMessageDisplay');
const recipientOccasionTag = document.querySelector('#recipientOccasionTag');
const recipientImage = document.querySelector('#recipientImage');
const recipientCardDisplay = document.querySelector('#recipientCardDisplay');
const editThisMomentBtn = document.querySelector('#editThisMomentBtn');
const confettiContainer = document.querySelector('#confettiContainer');

let currentOccasion = occasions[0];
let customUserPhoto = null;
let toastTimer;
let showAllOccasions = false;
let lastFocusedElement = null;

function renderOccasions(filter = 'All') {
  const isAll = filter === 'All';
  const list = isAll ? occasions : occasions.filter(item => item.category === filter);
  const visibleList = (isAll && !showAllOccasions) ? list.slice(0, 10) : list;
  
  // WCAG 2.5.3 Fix: Ensure accessible name matches visible text 'Make card'
  occasionGrid.innerHTML = visibleList.map(item => 
    `<article class="occasion-card" data-occasion="${escapeText(item.name)}">
      <div class="occasion-top">
        <span class="occasion-tag">${escapeText(item.tag)}</span>
        <span class="occasion-emoji" aria-hidden="true">${item.emoji}</span>
      </div>
      <div class="occasion-bottom">
        <h3 class="occasion-title">${escapeText(item.name)}</h3>
        <button type="button" class="button button-light button-card" data-occasion="${escapeText(item.name)}" aria-label="Make card for ${escapeText(item.name)}">
          Make card <span>↗</span>
        </button>
      </div>
    </article>`
  ).join('');

  const toggleWrap = document.querySelector('#occasionToggleWrap');
  if (toggleWrap) {
    if (isAll && list.length > 10) {
      toggleWrap.innerHTML = `<button type="button" class="button button-light occasion-toggle-btn" id="toggleOccasionsBtn" aria-expanded="${showAllOccasions}">${showAllOccasions ? 'Show fewer occasions ↑' : `Show all ${occasions.length} occasions (${occasions.length - 10} more) ↓`}</button>`;
    } else {
      toggleWrap.innerHTML = '';
    }
  }
}

function renderTemplates() {
  // WCAG 2.5.3 Fix: Ensure accessible name matches visible text 'Make card'
  templateGrid.innerHTML = designs.map(item => 
    `<article class="template-card" data-occasion="${escapeText(item.occasion)}">
      <div class="template-image">
        <img src="${item.image}" alt="${escapeText(item.title)}" loading="lazy">
        <span class="template-badge">${escapeText(item.badge)}</span>
        <span class="template-heart" aria-hidden="true">♡</span>
      </div>
      <h3 class="template-title">${escapeText(item.title)}</h3>
      <div class="template-meta">
        <span>${escapeText(item.description)}</span>
        <button type="button" class="button button-light button-card template-cta" data-occasion="${escapeText(item.occasion)}" aria-label="Make card for ${escapeText(item.occasion)}">
          Make card <span>↗</span>
        </button>
      </div>
    </article>`
  ).join('');
}

function prettifyName(name) {
  const clean = name.trim() || 'your favorite person';
  if (clean.length < 22) return `${escapeText(clean)}<br><i>♡</i>`;
  return `${escapeText(clean)} <i>♡</i>`;
}

function escapeText(text) {
  return String(text).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[character]));
}

function syncPreview() {
  const toVal = toInput.value.trim() || 'your favorite person';
  const fromVal = fromInput.value.trim() || 'your person';
  liveTo.innerHTML = prettifyName(toInput.value);
  liveFrom.textContent = fromVal;
  liveMessage.textContent = messageInput.value || 'A little note, just for you. ♡';
  const charEl = document.querySelector('#charCount');
  if (charEl) charEl.textContent = `${messageInput.value.length} / 220`;

  updateSendLinks();
}

function openBuilder(occasionName) {
  lastFocusedElement = document.activeElement;
  currentOccasion = occasions.find(item => item.name === occasionName) || occasions[0];
  liveOccasion.textContent = currentOccasion.name.toUpperCase();

  // Prevent unconditional overwrite if user already typed custom values
  if (!toInput.dataset.touched) toInput.value = 'your favorite person';
  if (!fromInput.dataset.touched) fromInput.value = 'your person';
  if (!messageInput.dataset.touched) {
    messageInput.value = `Of all the people in all the places, I’m glad I found you. ${currentOccasion.note}. ♡`;
  }

  if (customUserPhoto) {
    liveImage.src = customUserPhoto;
    if (resetPhotoBtn) resetPhotoBtn.style.display = 'inline-block';
  } else {
    liveImage.src = designs.find(item => item.occasion === currentOccasion.name)?.image || 
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=85';
    if (resetPhotoBtn) resetPhotoBtn.style.display = 'none';
  }

  shareStatus.textContent = '';
  syncPreview();

  // Reset mobile tabs to Edit view
  builder.classList.remove('mobile-show-preview');
  builder.classList.add('mobile-show-edit');
  const tabEdit = document.querySelector('#tabEditBtn');
  const tabPreview = document.querySelector('#tabPreviewBtn');
  if (tabEdit) { tabEdit.classList.add('active'); tabEdit.setAttribute('aria-selected', 'true'); }
  if (tabPreview) { tabPreview.classList.remove('active'); tabPreview.setAttribute('aria-selected', 'false'); }

  if (!builder.open) {
    builder.showModal();
    // WCAG 2.4.3 Focus Management: focus first input rather than brand logo
    setTimeout(() => { toInput.focus(); }, 50);
  }
}

function closeBuilderModal() {
  if (builder.open) builder.close();
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

renderOccasions();
renderTemplates();

// Occasion category filter clicks
document.querySelector('.occasion-filters').addEventListener('click', event => {
  const button = event.target.closest('.filter-chip');
  if (!button) return;
  document.querySelectorAll('.filter-chip').forEach(chip => chip.classList.toggle('active', chip === button));
  renderOccasions(button.dataset.filter);
});

// Card and toggle click delegation
document.addEventListener('click', event => {
  const toggleBtn = event.target.closest('#toggleOccasionsBtn');
  if (toggleBtn) {
    showAllOccasions = !showAllOccasions;
    const activeChip = document.querySelector('.filter-chip.active');
    renderOccasions(activeChip ? activeChip.dataset.filter : 'All');
    return;
  }
  const card = event.target.closest('[data-occasion]');
  if (card && !event.target.closest('.main-nav') && !event.target.closest('.brand')) {
    openBuilder(card.dataset.occasion);
  }
});

// Track user input edits
[toInput, fromInput, messageInput, customerPhoneInput].filter(Boolean).forEach(input => {
  input.addEventListener('input', () => {
    input.dataset.touched = 'true';
    syncPreview();
  });
});

// Theme choice selection
document.querySelector('.theme-picker')?.addEventListener('click', event => {
  const button = event.target.closest('.theme-choice');
  if (!button) return;
  document.querySelectorAll('.theme-choice').forEach(item => item.classList.toggle('selected', item === button));
  liveCard.className = `live-card theme-${button.dataset.theme}`;
  updateSendLinks();
});

// Photo upload preview handling
if (photoUpload) {
  photoUpload.addEventListener('change', event => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      showToast('Please select a valid image file (JPEG, PNG, WebP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      customUserPhoto = reader.result;
      liveImage.src = customUserPhoto;
      if (photoBtnText) photoBtnText.textContent = 'Change';
      if (resetPhotoBtn) resetPhotoBtn.style.display = 'inline-block';
      showToast('Photo updated in preview! 📷');
    };
    reader.readAsDataURL(file);
  });
}

if (resetPhotoBtn) {
  resetPhotoBtn.addEventListener('click', () => {
    customUserPhoto = null;
    if (photoUpload) photoUpload.value = '';
    if (photoBtnText) photoBtnText.textContent = 'Add photo';
    liveImage.src = designs.find(item => item.occasion === currentOccasion.name)?.image || 
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=85';
    resetPhotoBtn.style.display = 'none';
    showToast('Photo reset to default occasion artwork.');
  });
}

// Mobile tab toggle in builder
const tabEditBtn = document.querySelector('#tabEditBtn');
const tabPreviewBtn = document.querySelector('#tabPreviewBtn');

if (tabEditBtn && tabPreviewBtn) {
  tabEditBtn.addEventListener('click', () => {
    builder.classList.remove('mobile-show-preview');
    builder.classList.add('mobile-show-edit');
    tabEditBtn.classList.add('active');
    tabEditBtn.setAttribute('aria-selected', 'true');
    tabPreviewBtn.classList.remove('active');
    tabPreviewBtn.setAttribute('aria-selected', 'false');
  });

  tabPreviewBtn.addEventListener('click', () => {
    builder.classList.remove('mobile-show-edit');
    builder.classList.add('mobile-show-preview');
    tabPreviewBtn.classList.add('active');
    tabPreviewBtn.setAttribute('aria-selected', 'true');
    tabEditBtn.classList.remove('active');
    tabEditBtn.setAttribute('aria-selected', 'false');
  });
}

document.querySelector('.close-builder').addEventListener('click', closeBuilderModal);
builder.addEventListener('click', event => {
  if (event.target === builder) closeBuilderModal();
});

function getSharePayload() {
  const occasion = currentOccasion ? currentOccasion.name : 'Little Moment';
  const to = toInput?.value.trim() || 'your favorite person';
  const from = fromInput?.value.trim() || 'your person';
  const message = messageInput?.value.trim() || 'A little note, just for you. ♡';
  const theme = document.querySelector('.theme-choice.selected')?.dataset.theme || 'rose';

  let rawPhone = customerPhoneInput ? customerPhoneInput.value.trim() : '';
  const digitsOnly = rawPhone.replace(/\D/g, '');
  let formattedPhone = '';
  if (digitsOnly) {
    if (digitsOnly.startsWith('91') && digitsOnly.length > 10) {
      formattedPhone = `+${digitsOnly}`;
    } else if (digitsOnly.length === 10) {
      formattedPhone = `+91 ${digitsOnly}`;
    } else {
      formattedPhone = `+${digitsOnly}`;
    }
  }

  const shareData = new URLSearchParams({ occasion, to, from, message, theme });
  const shareUrl = `${location.href.split('#')[0]}#gift?${shareData.toString()}`;

  let whatsappMsg = `✨ *Little Moment Card* ✨\n\n` +
    `• Occasion: ${occasion}\n` +
    `• For: ${to}\n` +
    `• From: ${from}\n` +
    `• Note: "${message}"\n` +
    `• Theme: ${theme.toUpperCase()}\n`;
  if (formattedPhone) {
    whatsappMsg += `• WhatsApp: ${formattedPhone}\n`;
  }
  whatsappMsg += `\n👉 View Card: ${shareUrl}`;

  const recipientNote = `Dear ${to},\n\nI made a little corner of the internet just for you for ${occasion}:\n\n"${message}"\n— ${from} ♡\n\nOpen your Little Moment here:\n${shareUrl}`;

  return { shareUrl, messageText: whatsappMsg, recipientNote, to, from, occasion, customerPhone: formattedPhone, theme, message };
}

function updateSendLinks() {
  const { messageText } = getSharePayload();
  const encodedText = encodeURIComponent(messageText);
  const whatsappUrl = `https://wa.me/${TARGET_PHONE}?text=${encodedText}`;

  if (shareButton) shareButton.href = whatsappUrl;
}

// Copy Recipient Share Link button
if (copyLinkButton) {
  copyLinkButton.addEventListener('click', async () => {
    const { recipientNote, shareUrl } = getSharePayload();
    const copyText = `${recipientNote}`;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(copyText);
        shareStatus.textContent = 'Recipient link & heartfelt note copied to clipboard! ♡';
        showToast('Link & note copied! Ready to send ♡');
      } else {
        throw new Error('Clipboard API unavailable');
      }
    } catch {
      shareStatus.textContent = `Direct link: ${shareUrl}`;
      showToast('Link ready below.');
    }
  });
}

// Preview Celebration as Recipient
if (previewRecipientBtn) {
  previewRecipientBtn.addEventListener('click', () => {
    const payload = getSharePayload();
    openRecipientCard(payload);
  });
}

function openRecipientCard(payload) {
  recipientToDisplay.innerHTML = prettifyName(payload.to);
  recipientFromDisplay.textContent = payload.from;
  recipientMessageDisplay.textContent = payload.message;
  recipientOccasionTag.textContent = (payload.occasion || 'CELEBRATION').toUpperCase();
  recipientImage.src = customUserPhoto || designs.find(item => item.occasion === payload.occasion)?.image || 
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=85';
  recipientCardDisplay.className = `live-card recipient-card theme-${payload.theme || 'rose'}`;

  // Launch celebration confetti
  triggerConfetti();

  if (!recipientDialog.open) {
    recipientDialog.showModal();
  }
}

function triggerConfetti() {
  if (!confettiContainer) return;
  confettiContainer.innerHTML = '';
  const colors = ['#c84e3a', '#e9be69', '#d99483', '#79886f', '#9887a0'];
  for (let i = 0; i < 36; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 1.5}s`;
    piece.style.animationDuration = `${2 + Math.random() * 1.5}s`;
    confettiContainer.appendChild(piece);
  }
}

if (closeRecipientBtn) {
  closeRecipientBtn.addEventListener('click', () => recipientDialog.close());
}
recipientDialog.addEventListener('click', event => {
  if (event.target === recipientDialog) recipientDialog.close();
});

if (editThisMomentBtn) {
  editThisMomentBtn.addEventListener('click', () => {
    recipientDialog.close();
    openBuilder(currentOccasion.name);
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// Mobile topbar menu toggle
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
  const nav = document.querySelector('.main-nav');
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => {
  document.querySelector('.main-nav').classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

// Restores shared preview from URL hash
function restoreSharedPreview() {
  if (!location.hash.startsWith('#gift?')) return;
  const data = new URLSearchParams(location.hash.slice(6));
  const occasion = data.get('occasion');
  if (!occasion) return;

  const to = data.get('to') || 'your favorite person';
  const from = data.get('from') || 'your person';
  const message = data.get('message') || 'Of all the people in all the places, I’m glad I found you. ♡';
  const theme = data.get('theme') || 'rose';

  // Synchronize builder state
  currentOccasion = occasions.find(item => item.name === occasion) || occasions[0];
  toInput.value = to;
  toInput.dataset.touched = 'true';
  fromInput.value = from;
  fromInput.dataset.touched = 'true';
  messageInput.value = message;
  messageInput.dataset.touched = 'true';

  if (customerPhoneInput) customerPhoneInput.value = data.get('phone') || '';

  document.querySelectorAll('.theme-choice').forEach(button => 
    button.classList.toggle('selected', button.dataset.theme === theme)
  );
  liveCard.className = `live-card theme-${theme}`;
  syncPreview();

  // Directly open celebratory recipient presentation card view for recipients!
  openRecipientCard({ occasion, to, from, message, theme });
}

// Initial restore on load & dynamic hashchange listener
restoreSharedPreview();
window.addEventListener('hashchange', restoreSharedPreview);
