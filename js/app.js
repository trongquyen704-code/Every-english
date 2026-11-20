const DATA = {
  vocabulary: [
    ["breakfast","/ˈbrekfəst/","bữa sáng","I have breakfast at seven.","Tôi ăn sáng lúc bảy giờ.","Food"],
    ["water","/ˈwɔːtər/","nước","I drink water every morning.","Tôi uống nước mỗi sáng.","Food"],
    ["hungry","/ˈhʌŋɡri/","đói","I am hungry now.","Bây giờ tôi đói.","Food"],
    ["delicious","/dɪˈlɪʃəs/","ngon","This soup is delicious.","Món súp này rất ngon.","Food"],
    ["bedroom","/ˈbedruːm/","phòng ngủ","My bedroom is small.","Phòng ngủ của tôi nhỏ.","Home"],
    ["kitchen","/ˈkɪtʃən/","nhà bếp","My mother is in the kitchen.","Mẹ tôi đang ở trong bếp.","Home"],
    ["window","/ˈwɪndoʊ/","cửa sổ","Please open the window.","Làm ơn mở cửa sổ.","Home"],
    ["clean","/kliːn/","dọn dẹp; sạch","I clean my room on Sunday.","Tôi dọn phòng vào Chủ nhật.","Home"],
    ["school","/skuːl/","trường học","I go to school by bus.","Tôi đi học bằng xe buýt.","School"],
    ["teacher","/ˈtiːtʃər/","giáo viên","My English teacher is kind.","Giáo viên tiếng Anh của tôi tốt bụng.","School"],
    ["homework","/ˈhoʊmwɜːrk/","bài tập về nhà","I do my homework after dinner.","Tôi làm bài tập sau bữa tối.","School"],
    ["classmate","/ˈklæsmeɪt/","bạn cùng lớp","He is my classmate.","Cậu ấy là bạn cùng lớp của tôi.","School"],
    ["friend","/frend/","bạn bè","I meet my friends after school.","Tôi gặp bạn sau giờ học.","People"],
    ["family","/ˈfæməli/","gia đình","I love my family.","Tôi yêu gia đình mình.","People"],
    ["neighbor","/ˈneɪbər/","hàng xóm","Our neighbor is friendly.","Hàng xóm của chúng tôi thân thiện.","People"],
    ["busy","/ˈbɪzi/","bận rộn","I am busy this morning.","Sáng nay tôi bận.","Daily life"],
    ["usually","/ˈjuːʒuəli/","thường thường","I usually walk to school.","Tôi thường đi bộ đến trường.","Daily life"],
    ["sometimes","/ˈsʌmtaɪmz/","thỉnh thoảng","I sometimes read at night.","Thỉnh thoảng tôi đọc sách vào buổi tối.","Daily life"],
    ["early","/ˈɜːrli/","sớm","I wake up early.","Tôi thức dậy sớm.","Daily life"],
    ["tired","/ˈtaɪərd/","mệt","I feel tired today.","Hôm nay tôi cảm thấy mệt.","Daily life"],
    ["walk","/wɔːk/","đi bộ","I walk in the park.","Tôi đi bộ trong công viên.","Activities"],
    ["listen","/ˈlɪsən/","lắng nghe","I listen to music.","Tôi nghe nhạc.","Activities"],
    ["read","/riːd/","đọc","I read a book every day.","Tôi đọc sách mỗi ngày.","Activities"],
    ["practice","/ˈpræktɪs/","luyện tập","I practice English every day.","Tôi luyện tiếng Anh mỗi ngày.","Activities"],
    ["buy","/baɪ/","mua","I want to buy some fruit.","Tôi muốn mua một ít trái cây.","Shopping"],
    ["price","/praɪs/","giá tiền","What is the price?","Giá bao nhiêu?","Shopping"],
    ["cheap","/tʃiːp/","rẻ","This bag is cheap.","Chiếc túi này rẻ.","Shopping"],
    ["expensive","/ɪkˈspensɪv/","đắt","That phone is expensive.","Chiếc điện thoại đó đắt.","Shopping"],
    ["morning","/ˈmɔːrnɪŋ/","buổi sáng","Good morning!","Chào buổi sáng!","Time"],
    ["evening","/ˈiːvnɪŋ/","buổi tối","I study in the evening.","Tôi học vào buổi tối.","Time"]
  ].map((x,i)=>({id:i+1,word:x[0],phonetic:x[1],meaning:x[2],example:x[3],translation:x[4],topic:x[5],level:"beginner"})),
  sentences: [
    ["Hello! How are you?","Xin chào! Bạn khỏe không?","Greetings"],
    ["I'm fine, thank you.","Tôi khỏe, cảm ơn bạn.","Greetings"],
    ["What is your name?","Bạn tên là gì?","Greetings"],
    ["My name is Nam.","Tên tôi là Nam.","Greetings"],
    ["Nice to meet you.","Rất vui được gặp bạn.","Greetings"],
    ["Where are you from?","Bạn đến từ đâu?","About me"],
    ["I'm from Vietnam.","Tôi đến từ Việt Nam.","About me"],
    ["I am a student.","Tôi là học sinh.","About me"],
    ["I like listening to music.","Tôi thích nghe nhạc.","Hobbies"],
    ["What do you do in your free time?","Bạn làm gì khi rảnh?","Hobbies"],
    ["I usually wake up at six.","Tôi thường thức dậy lúc sáu giờ.","Daily life"],
    ["I go to school every day.","Tôi đi học mỗi ngày.","Daily life"],
    ["I'm studying English.","Tôi đang học tiếng Anh.","Daily life"],
    ["Could you help me, please?","Bạn có thể giúp tôi được không?","Useful"],
    ["Could you say that again?","Bạn có thể nói lại được không?","Useful"],
    ["I don't understand.","Tôi không hiểu.","Useful"],
    ["How much is this?","Cái này bao nhiêu tiền?","Shopping"],
    ["I would like some water, please.","Làm ơn cho tôi một ít nước.","Food"],
    ["Can I have the menu, please?","Cho tôi xin thực đơn được không?","Food"],
    ["The food is very good.","Đồ ăn rất ngon.","Food"],
    ["What time is it?","Bây giờ là mấy giờ?","Time"],
    ["See you tomorrow.","Hẹn gặp bạn ngày mai.","Greetings"],
    ["Have a nice day!","Chúc bạn một ngày tốt lành!","Greetings"],
    ["I'm a little tired today.","Hôm nay tôi hơi mệt.","Daily life"],
    ["Let's go together.","Chúng ta đi cùng nhau nhé.","Friends"]
  ].map((x,i)=>({id:i+1,english:x[0],translation:x[1],topic:x[2]})),
  reading: [
    {id:1,title:"My Daily Routine",topic:"Daily life",level:"Beginner",english:"I usually wake up at six o'clock. I wash my face and brush my teeth. Then, I have breakfast. I go to school in the morning. In the evening, I do my homework and study English.",translation:"Tôi thường thức dậy lúc sáu giờ. Tôi rửa mặt và đánh răng. Sau đó, tôi ăn sáng. Tôi đi học vào buổi sáng. Buổi tối, tôi làm bài tập và học tiếng Anh."},
    {id:2,title:"My Family",topic:"People",level:"Beginner",english:"There are four people in my family. They are my father, my mother, my sister, and me. We live in a small house. We often have dinner together. I love my family very much.",translation:"Gia đình tôi có bốn người. Đó là bố, mẹ, chị/em gái và tôi. Chúng tôi sống trong một ngôi nhà nhỏ. Chúng tôi thường ăn tối cùng nhau. Tôi rất yêu gia đình mình."},
    {id:3,title:"My Best Friend",topic:"People",level:"Beginner",english:"My best friend's name is Minh. He is kind and funny. We study at the same school. We sometimes play football after class. I am happy to have a good friend.",translation:"Bạn thân nhất của tôi tên là Minh. Bạn ấy tốt bụng và vui tính. Chúng tôi học cùng trường. Thỉnh thoảng chúng tôi chơi bóng đá sau giờ học. Tôi vui vì có một người bạn tốt."},
    {id:4,title:"At Breakfast",topic:"Food",level:"Beginner",english:"I have breakfast with my family. I usually eat bread and eggs. I drink a glass of milk. Breakfast gives me energy for the day. I enjoy this time with my family.",translation:"Tôi ăn sáng cùng gia đình. Tôi thường ăn bánh mì và trứng. Tôi uống một ly sữa. Bữa sáng cung cấp năng lượng cho tôi trong ngày. Tôi thích khoảng thời gian này bên gia đình."},
    {id:5,title:"My Bedroom",topic:"Home",level:"Beginner",english:"My bedroom is small but comfortable. There is a bed near the window. I have a desk and a chair. I keep my books on the desk. I clean my bedroom every weekend.",translation:"Phòng ngủ của tôi nhỏ nhưng thoải mái. Có một chiếc giường gần cửa sổ. Tôi có một chiếc bàn và một cái ghế. Tôi để sách trên bàn. Tôi dọn phòng ngủ vào mỗi cuối tuần."},
    {id:6,title:"A Day at School",topic:"School",level:"Beginner",english:"I go to school from Monday to Friday. I study many subjects. My favorite subject is English. I learn new words and practice speaking with my friends. School is an important part of my life.",translation:"Tôi đi học từ thứ Hai đến thứ Sáu. Tôi học nhiều môn. Môn yêu thích của tôi là tiếng Anh. Tôi học từ mới và luyện nói với bạn bè. Trường học là một phần quan trọng trong cuộc sống của tôi."},
    {id:7,title:"My Free Time",topic:"Hobbies",level:"Beginner",english:"In my free time, I like listening to music and reading books. Sometimes, I go for a walk with my friends. These activities help me relax after a busy day.",translation:"Khi rảnh, tôi thích nghe nhạc và đọc sách. Đôi khi, tôi đi dạo với bạn bè. Những hoạt động này giúp tôi thư giãn sau một ngày bận rộn."},
    {id:8,title:"At the Store",topic:"Shopping",level:"Beginner",english:"I go to the store to buy some fruit. I choose apples and bananas. I ask the shop assistant about the price. Then, I pay and go home. Shopping is easy when I make a list.",translation:"Tôi đến cửa hàng để mua trái cây. Tôi chọn táo và chuối. Tôi hỏi nhân viên cửa hàng về giá. Sau đó, tôi trả tiền và về nhà. Việc mua sắm sẽ dễ dàng khi tôi lập danh sách."}
  ]
};

const STORE_KEY = "everydayEnglish_v1";
const defaultState = () => ({learnedWords:[],learnedSentences:[],review:{},minutesByDate:{},lastStudyDate:null,streak:0,settings:{rate:0.85}});
let state = loadState();
let currentPage = "home", currentLearn = "vocabulary", currentTopic = "Tất cả", searchTerm = "", listenIndex = 0, reviewQueue = [], reviewIndex = 0;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
function loadState(){try{return {...defaultState(),...JSON.parse(localStorage.getItem(STORE_KEY)||"{}")}}catch(e){return defaultState()}}
function saveState(){localStorage.setItem(STORE_KEY,JSON.stringify(state));renderHome();renderProgress();renderReviewSummary()}
function todayKey(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`}
function addStudyMinute(){const k=todayKey();state.minutesByDate[k]=(state.minutesByDate[k]||0)+1;const last=state.lastStudyDate;if(last!==k){const y=new Date();y.setDate(y.getDate()-1);const yesterday=`${y.getFullYear()}-${String(y.getMonth()+1).padStart(2,"0")}-${String(y.getDate()).padStart(2,"0")}`;state.streak=last===yesterday?(state.streak||0)+1:1;state.lastStudyDate=k}saveState()}
function toast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),2100)}
function go(page){currentPage=page;$$(".page").forEach(p=>p.classList.toggle("active",p.id===`page-${page}`));$$(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===page));if(page==="learn")renderLearn();if(page==="listen")renderListen();if(page==="review")renderReview();if(page==="progress")renderProgress();window.scrollTo({top:0,behavior:"smooth"})}
function speak(text){if(!("speechSynthesis" in window)){toast("Thiết bị hoặc trình duyệt chưa hỗ trợ phát âm.");return}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang="en-US";u.rate=Number(state.settings.rate||.85);const voices=speechSynthesis.getVoices();const us=voices.find(v=>v.lang==="en-US");if(us)u.voice=us;speechSynthesis.speak(u);addStudyMinute()}
function renderHome(){const mins=state.minutesByDate[todayKey()]||0;$("#minutesToday").textContent=mins;$("#dailyBar").style.width=Math.min(100,mins/15*100)+"%";$("#goalMessage").textContent=mins>=15?"Tuyệt vời! Bạn đã hoàn thành mục tiêu hôm nay.":"Mỗi ngày 15 phút là đủ để tiến bộ.";const d=DATA.vocabulary[(new Date().getDate()-1)%DATA.vocabulary.length];$("#dailySuggestion").innerHTML=`<div class="card-meta"><span class="pill">TỪ VỰNG HÔM NAY</span><button class="tiny-icon" data-speak="${d.word}" aria-label="Nghe từ">♫</button></div><h3>${d.word}</h3><p>${d.meaning} · ${d.phonetic}</p><button class="text-button" data-go="learn" data-learn="vocabulary">Học từ này →</button>`}
function topicsFor(type){const arr=type==="vocabulary"?DATA.vocabulary:type==="sentences"?DATA.sentences:DATA.reading;return ["Tất cả",...new Set(arr.map(x=>x.topic))]}
function renderLearn(){ $$(".segment").forEach(b=>b.classList.toggle("active",b.dataset.learnTab===currentLearn));const panel=$("#learnPanel");const topics=topicsFor(currentLearn);const filters=`<div class="filter-row">${topics.map(t=>`<button class="filter-chip ${currentTopic===t?"active":""}" data-topic="${t}">${t}</button>`).join("")}</div>`;
 if(currentLearn==="vocabulary"){let items=DATA.vocabulary.filter(x=>(currentTopic==="Tất cả"||x.topic===currentTopic)&&(`${x.word} ${x.meaning} ${x.example}`).toLowerCase().includes(searchTerm));panel.innerHTML=`<input class="search-box" id="learnSearch" placeholder="Tìm từ tiếng Anh hoặc tiếng Việt..." value="${searchTerm}">${filters}<p class="small muted">${items.length} từ vựng · Beginner</p>${items.map(x=>`<article class="word-card"><div class="card-meta"><span class="pill">${x.topic.toUpperCase()}</span><div class="card-actions"><button class="tiny-icon" data-speak="${x.word}" aria-label="Nghe phát âm">♫</button></div></div><h2>${x.word}</h2><p class="phonetic">${x.phonetic}</p><p class="meaning">${x.meaning}</p><div class="example"><strong>${x.example}</strong><span class="translation">${x.translation}</span></div><div class="card-footer"><span class="small muted">${state.learnedWords.includes(x.id)?"✓ Đã học":"Từ mới"}</span><button class="mark-button" data-learn-word="${x.id}">${state.learnedWords.includes(x.id)?"Đã học ✓":"Đánh dấu đã học"}</button></div></article>`).join("")||'<div class="empty-state">Không tìm thấy từ phù hợp.</div>'}`;
 else if(currentLearn==="sentences"){let items=DATA.sentences.filter(x=>(currentTopic==="Tất cả"||x.topic===currentTopic)&&(`${x.english} ${x.translation}`).toLowerCase().includes(searchTerm));panel.innerHTML=`<input class="search-box" id="learnSearch" placeholder="Tìm câu tiếng Anh hoặc tiếng Việt..." value="${searchTerm}">${filters}<p class="small muted">${items.length} câu giao tiếp</p>${items.map(x=>`<article class="sentence-card"><div class="card-meta"><span class="pill">${x.topic.toUpperCase()}</span><button class="tiny-icon" data-speak="${x.english}" aria-label="Nghe câu">♫</button></div><h3>${x.english}</h3><p class="translation">${x.translation}</p><div class="card-footer"><span class="small muted">${state.learnedSentences.includes(x.id)?"✓ Đã học":"Câu thực hành"}</span><button class="mark-button" data-learn-sentence="${x.id}">${state.learnedSentences.includes(x.id)?"Đã học ✓":"Đánh dấu đã học"}</button></div></article>`).join("")||'<div class="empty-state">Không tìm thấy câu phù hợp.</div>'}`;
 else {let items=DATA.reading.filter(x=>(currentTopic==="Tất cả"||x.topic===currentTopic)&&(`${x.title} ${x.english} ${x.translation}`).toLowerCase().includes(searchTerm));panel.innerHTML=`<input class="search-box" id="learnSearch" placeholder="Tìm đoạn văn..." value="${searchTerm}">${filters}<p class="small muted">${items.length} đoạn văn · Beginner</p>${items.map(x=>`<article class="reading-card"><div class="card-meta"><span class="pill">${x.topic.toUpperCase()}</span><span class="small muted">${x.level}</span></div><h3>${x.title}</h3><p class="reading-en">${x.english}</p><p class="translation">${x.translation}</p><div class="card-footer"><button class="secondary-button" data-speak="${x.english}">♫ Nghe đoạn văn</button><span class="small muted">${x.english.split(/\s+/).length} từ</span></div></article>`).join("")||'<div class="empty-state">Không tìm thấy đoạn văn.</div>'}`}
}
function renderListen(){const item=DATA.sentences[listenIndex%DATA.sentences.length];$("#listenText").textContent=item.english;$("#listenTranslation").textContent=item.translation;$("#listenTranslation").classList.add("hidden");$("#toggleListenTranslation").textContent="Hiện nghĩa";$("#listenCount").textContent=String(listenIndex+1).padStart(2,"0")+" / "+DATA.sentences.length;$("#speechRate").value=state.settings.rate||.85;$("#speedLabel").textContent=Number(state.settings.rate||.85).toFixed(2).replace(/0$/,"")+"x"}
function renderReviewSummary(){const due=DATA.vocabulary.filter(x=>!state.review[x.id]||state.review[x.id]!=="known").length;$("#reviewDue").textContent=due;$("#reviewDone").textContent=Object.values(state.review).filter(x=>x==="known").length}
function buildReviewQueue(){reviewQueue=DATA.vocabulary.filter(x=>state.review[x.id]!=="known");reviewIndex=0}
function renderReview(){buildReviewQueue();const card=$("#reviewCard");if(!reviewQueue.length){card.innerHTML='<p class="eyebrow">WELL DONE</p><h2>Bạn đã ôn hết rồi!</h2><p class="muted">Hãy quay lại vào ngày mai nhé.</p>';$("#reviewHint").textContent="Bạn có thể học thêm từ mới trong mục Học.";renderReviewSummary();return}const x=reviewQueue[reviewIndex%reviewQueue.length];card.innerHTML=`<p class="eyebrow">NHỚ TỪ NÀY KHÔNG?</p><h2>${x.word}</h2><p class="phonetic">${x.phonetic}</p><p class="translation hidden" id="reviewMeaning">${x.meaning}</p><button class="secondary-button full" id="showReviewMeaning">Hiện nghĩa</button><div class="review-actions"><button class="again-button" id="reviewAgain">Ôn lại</button><button class="know-button" id="reviewKnow">Đã nhớ</button></div>`;renderReviewSummary()}
function renderProgress(){const words=state.learnedWords.length,sentences=state.learnedSentences.length,mins=state.minutesByDate[todayKey()]||0;$("#statWords").textContent=words;$("#statSentences").textContent=sentences;$("#statMinutes").textContent=mins;$("#statStreak").textContent=state.streak||0;$("#progressBar").style.width=Math.min(100,mins/15*100)+"%";$("#progressText").textContent=`Bạn đã hoàn thành ${Math.min(100,Math.round(mins/15*100))}% mục tiêu hôm nay.`}
document.addEventListener("click",e=>{const nav=e.target.closest("[data-page]");if(nav){go(nav.dataset.page);return}const link=e.target.closest("[data-page-link]");if(link){e.preventDefault();go(link.dataset.pageLink);return}const goBtn=e.target.closest("[data-go]");if(goBtn){if(goBtn.dataset.learn){currentLearn=goBtn.dataset.learn;currentTopic="Tất cả";searchTerm=""}go(goBtn.dataset.go);return}const tab=e.target.closest("[data-learn-tab]");if(tab){currentLearn=tab.dataset.learnTab;currentTopic="Tất cả";searchTerm="";renderLearn();return}const topic=e.target.closest("[data-topic]");if(topic){currentTopic=topic.dataset.topic;renderLearn();return}const showMeaning=e.target.closest("#showReviewMeaning");if(showMeaning){const el=$("#reviewMeaning");if(el){el.classList.toggle("hidden");showMeaning.textContent=el.classList.contains("hidden")?"Hiện nghĩa":"Ẩn nghĩa"}return}const again=e.target.closest("#reviewAgain");if(again){if(!reviewQueue.length)return;const x=reviewQueue[reviewIndex%reviewQueue.length];state.review[x.id]="due";reviewIndex++;saveState();renderReview();toast("Từ này sẽ được ôn lại.");return}const know=e.target.closest("#reviewKnow");if(know){if(!reviewQueue.length)return;const x=reviewQueue[reviewIndex%reviewQueue.length];state.review[x.id]="known";if(!state.learnedWords.includes(x.id))state.learnedWords.push(x.id);saveState();renderReview();toast("Tốt lắm! Đã ghi nhận.");return}const speakBtn=e.target.closest("[data-speak]");if(speakBtn){speak(speakBtn.dataset.speak);return}const word=e.target.closest("[data-learn-word]");if(word){const id=Number(word.dataset.learnWord);if(!state.learnedWords.includes(id))state.learnedWords.push(id);state.review[id]="due";saveState();renderLearn();toast("Đã lưu từ vào tiến độ học.");return}const sentence=e.target.closest("[data-learn-sentence]");if(sentence){const id=Number(sentence.dataset.learnSentence);if(!state.learnedSentences.includes(id))state.learnedSentences.push(id);saveState();renderLearn();toast("Đã lưu câu vào tiến độ học.");return}});
document.addEventListener("input",e=>{if(e.target.id==="learnSearch"){const pos=e.target.selectionStart;searchTerm=e.target.value.toLowerCase();renderLearn();const input=$("#learnSearch");input.focus();input.setSelectionRange(pos,pos)}});
$("#playListen").addEventListener("click",()=>speak($("#listenText").textContent));
$("#toggleListenTranslation").addEventListener("click",()=>{$("#listenTranslation").classList.toggle("hidden");$("#toggleListenTranslation").textContent=$("#listenTranslation").classList.contains("hidden")?"Hiện nghĩa":"Ẩn nghĩa"});
$("#prevListen").addEventListener("click",()=>{listenIndex=(listenIndex-1+DATA.sentences.length)%DATA.sentences.length;renderListen()});
$("#nextListen").addEventListener("click",()=>{listenIndex=(listenIndex+1)%DATA.sentences.length;renderListen()});
$("#speechRate").addEventListener("input",e=>{state.settings.rate=Number(e.target.value);$("#speedLabel").textContent=state.settings.rate.toFixed(2).replace(/0$/,"")+"x";localStorage.setItem(STORE_KEY,JSON.stringify(state))});
$("#exportBtn").addEventListener("click",()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="everyday-english-backup.json";a.click();URL.revokeObjectURL(url);toast("Đã tạo bản sao lưu.")});
$("#importFile").addEventListener("change",async e=>{const file=e.target.files[0];if(!file)return;try{const imported=JSON.parse(await file.text());if(!imported||typeof imported!=="object"||!Array.isArray(imported.learnedWords))throw new Error();state={...defaultState(),...imported};saveState();renderLearn();renderReview();toast("Đã nhập dữ liệu thành công.")}catch(err){toast("File sao lưu không hợp lệ.")}e.target.value=""});
$("#resetBtn").addEventListener("click",()=>{if(confirm("Bạn có chắc muốn xóa toàn bộ tiến độ học trên thiết bị này?")){state=defaultState();saveState();renderLearn();renderReview();toast("Đã đặt lại tiến độ.")}});
$("#settingsBtn").addEventListener("click",()=>{$("#defaultRate").value=String(state.settings.rate||.85);$("#settingsDialog").showModal()});
$("#closeSettings").addEventListener("click",()=>$("#settingsDialog").close());
$("#defaultRate").addEventListener("change",e=>{state.settings.rate=Number(e.target.value);saveState();renderListen();toast("Đã cập nhật tốc độ phát âm.")});
$$("[data-page-link]").forEach(x=>x.addEventListener("click",e=>e.preventDefault()));
const dateText=new Intl.DateTimeFormat("vi-VN",{weekday:"long",day:"numeric",month:"long"}).format(new Date());$("#todayLabel").textContent=dateText.toUpperCase();
renderHome();renderProgress();renderLearn();renderReviewSummary();renderListen();
