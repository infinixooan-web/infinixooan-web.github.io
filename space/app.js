// ===== 콘텐츠 데이터 =====
// 영상은 안전을 위해 "고정 embed" 대신, 신뢰할 만한 키워드로 유튜브 검색을 엽니다.
// 나중에 특정 영상을 고정하고 싶으면 각 소주제에 videoId 를 넣어 확장할 수 있습니다.
const TOPICS = {
  blackhole: {
    name: "블랙홀", emoji: "🕳️", bg: "#3a2a5e",
    subs: [
      {
        t: "블랙홀이란 무엇일까?",
        d: "빛조차 빠져나올 수 없는 신비한 천체",
        explain: "블랙홀은 중력이 너무나도 강해서, 우주에서 가장 빠른 빛조차 한번 들어가면 빠져나올 수 없는 곳이에요. 그래서 '검은 구멍'이라는 뜻의 블랙홀이라고 불러요. 눈으로 직접 볼 수는 없지만, 주변의 별과 가스가 빨려 들어가며 빛을 내서 그 존재를 알 수 있답니다.",
        facts: ["빛도 빠져나올 수 없을 만큼 중력이 강해요.", "너무 어두워서 직접 보이지 않아요.", "주변 물질이 소용돌이치며 밝게 빛나요."],
        fun: "2019년, 인류는 처음으로 블랙홀의 '그림자' 사진을 찍는 데 성공했어요!",
        q: "블랙홀이란 무엇일까 초등 과학 EBS"
      },
      {
        t: "사건의 지평선",
        d: "돌아올 수 없는 경계선",
        explain: "블랙홀에는 '사건의 지평선'이라는 보이지 않는 경계가 있어요. 이 선을 한 번 넘어가면 아무것도 다시 밖으로 나올 수 없어요. 빛도, 우주선도, 정보도요. 그래서 과학자들은 이곳을 '돌아올 수 없는 지점'이라고 불러요.",
        facts: ["한 번 넘으면 되돌아올 수 없어요.", "안쪽에서 일어나는 일은 볼 수 없어요.", "블랙홀의 '입구' 같은 경계예요."],
        fun: "사건의 지평선을 넘어가는 순간에는 시간이 아주 느리게 흐르는 것처럼 보인대요!",
        q: "블랙홀 사건의 지평선 쉬운 설명 초등"
      },
      {
        t: "블랙홀은 어떻게 생길까?",
        d: "거대한 별의 마지막 모습",
        explain: "아주 무거운 별이 나이를 다 먹으면 커다란 폭발(초신성)을 일으켜요. 그리고 남은 중심부가 자기 무게를 못 이기고 점점 쪼그라들어 아주 작고 무거운 점이 되는데, 이것이 바로 블랙홀이에요. 별의 화려한 마지막에서 태어나는 셈이죠.",
        facts: ["태양보다 훨씬 무거운 별에서 생겨요.", "초신성 폭발 뒤에 만들어져요.", "중력으로 스스로 쪼그라들어요."],
        fun: "우리 은하 한가운데에도 태양보다 400만 배나 무거운 거대 블랙홀이 있어요!",
        q: "블랙홀 생성 과정 별의 죽음 초등 과학"
      }
    ]
  },
  solar: {
    name: "태양계", emoji: "🪐", bg: "#5e4a1f",
    subs: [
      {
        t: "태양",
        d: "빛과 열을 주는 중심 별",
        explain: "태양은 태양계의 한가운데에서 스스로 빛과 열을 내는 거대한 별이에요. 지구보다 130만 배나 크고, 대부분 수소라는 가벼운 물질로 이루어져 있어요. 태양이 있어서 지구가 따뜻하고, 식물이 자라고, 우리가 살아갈 수 있답니다.",
        facts: ["스스로 빛나는 '별'이에요.", "지구의 약 130만 배 크기예요.", "지구 생명의 에너지원이에요."],
        fun: "태양빛이 지구까지 오는 데 약 8분 20초가 걸려요. 지금 보는 햇빛은 8분 전의 빛이에요!",
        q: "태양 이란 초등 과학 EBS"
      },
      {
        t: "8개의 행성",
        d: "수성부터 해왕성까지",
        explain: "태양 주위를 도는 여덟 개의 행성이 있어요. 태양과 가까운 순서로 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이에요. 앞의 넷은 단단한 땅으로 된 행성이고, 뒤의 넷은 커다란 가스로 된 행성이에요. 지구는 태양에서 세 번째 행성이랍니다.",
        facts: ["수·금·지·화·목·토·천·해 순서예요.", "지구는 세 번째 행성이에요.", "목성이 가장 크고, 수성이 가장 작아요."],
        fun: "목성은 아주 커서 지구가 무려 1,300개나 들어갈 수 있어요!",
        q: "태양계 8개 행성 초등 과학 EBS"
      },
      {
        t: "달의 비밀",
        d: "지구의 하나뿐인 위성",
        explain: "달은 지구 주위를 도는 하나뿐인 위성이에요. 달의 모양이 초승달, 반달, 보름달로 바뀌어 보이는 건 태양빛을 받는 부분이 날마다 달라 보이기 때문이에요. 또 달의 힘 때문에 바닷물이 밀려왔다 나가는 밀물과 썰물도 생긴답니다.",
        facts: ["지구를 도는 위성이에요.", "모양이 날마다 조금씩 변해 보여요.", "밀물과 썰물을 만들어요."],
        fun: "달에는 공기가 없어서, 아폴로 우주비행사의 발자국이 지금도 그대로 남아 있어요!",
        q: "달 위상 변화 밀물 썰물 초등 과학"
      }
    ]
  },
  stars: {
    name: "별자리", emoji: "✨", bg: "#1f3a5e",
    subs: [
      {
        t: "계절별 별자리",
        d: "계절마다 달라지는 밤하늘",
        explain: "지구가 태양 주위를 돌기 때문에, 계절마다 밤에 보이는 별자리가 달라져요. 봄에는 사자자리, 여름에는 백조자리와 은하수, 가을에는 페가수스자리, 겨울에는 오리온자리가 잘 보인답니다. 계절마다 다른 별 친구들을 만날 수 있어요.",
        facts: ["계절마다 보이는 별자리가 달라요.", "지구가 태양을 돌기 때문이에요.", "여름밤엔 은하수를 볼 수 있어요."],
        fun: "겨울철 오리온자리는 도시에서도 잘 보여서 '겨울 밤하늘의 왕'이라고 불려요!",
        q: "계절별 별자리 봄 여름 가을 겨울 초등"
      },
      {
        t: "북극성 찾기",
        d: "밤하늘의 길잡이 별",
        explain: "북극성은 항상 북쪽 하늘에 거의 그대로 머물러 있어서, 옛날 사람들이 길을 찾을 때 나침반처럼 사용했어요. 북두칠성의 국자 끝 두 별을 이어 쭉 늘리면 만나는 밝은 별이 바로 북극성이에요. 이 별을 찾으면 어느 쪽이 북쪽인지 알 수 있어요.",
        facts: ["항상 북쪽에 있어 길잡이가 돼요.", "북두칠성을 이용해 찾을 수 있어요.", "거의 움직이지 않는 것처럼 보여요."],
        fun: "다른 별들은 북극성을 중심으로 하룻밤 동안 빙글빙글 도는 것처럼 보인답니다!",
        q: "북극성 찾는 방법 북두칠성 초등 과학"
      },
      {
        t: "황도 12궁",
        d: "태양이 지나는 길의 별자리",
        explain: "1년 동안 태양이 지나가는 것처럼 보이는 하늘의 길을 '황도'라고 해요. 그 길에 놓인 열두 개의 별자리를 황도 12궁이라고 부르는데, 물병자리·양자리·사자자리처럼 우리가 '생일 별자리'로 아는 것들이에요.",
        facts: ["태양이 지나는 길에 있는 별자리예요.", "모두 12개가 있어요.", "'생일 별자리'로 잘 알려져 있어요."],
        fun: "사실 태양이 지나는 길에는 '뱀주인자리'까지 하나 더 걸쳐 있어서 13개라는 이야기도 있어요!",
        q: "황도 12궁 별자리 초등 과학 설명"
      }
    ]
  },
  explore: {
    name: "우주 탐사", emoji: "🚀", bg: "#1f5e4a",
    subs: [
      {
        t: "로켓의 원리",
        d: "어떻게 하늘로 날아오를까?",
        explain: "로켓은 아래쪽으로 뜨거운 가스를 힘차게 뿜어내요. 그러면 그 반대 방향, 즉 위로 밀어 올리는 힘이 생겨서 하늘로 날아올라요. 이것을 '작용과 반작용'이라고 해요. 풍선의 입구를 놓으면 앞으로 날아가는 것과 똑같은 원리랍니다.",
        facts: ["가스를 아래로 뿜어 위로 올라가요.", "'작용과 반작용' 원리예요.", "연료를 다 쓰면 단계별로 분리돼요."],
        fun: "로켓은 지구를 벗어나려면 총알보다 훨씬 빠른 초속 약 11km로 날아야 해요!",
        q: "로켓 원리 작용 반작용 초등 과학 EBS"
      },
      {
        t: "국제우주정거장(ISS)",
        d: "우주에 떠 있는 실험실",
        explain: "국제우주정거장은 지구에서 약 400km 위를 도는 커다란 우주 실험실이에요. 여러 나라가 힘을 합쳐 만들었고, 우주비행사들이 이곳에서 몇 달씩 지내며 무중력 상태에서 다양한 실험을 해요. 이곳에서는 몸이 둥둥 떠다닌답니다.",
        facts: ["지구 위 약 400km에서 돌아요.", "여러 나라가 함께 만들었어요.", "무중력 상태에서 생활하고 실험해요."],
        fun: "국제우주정거장은 약 90분마다 지구를 한 바퀴 돌아서, 하루에 해가 16번이나 뜨고 져요!",
        q: "국제우주정거장 ISS 우주비행사 생활 초등"
      },
      {
        t: "화성 탐사",
        d: "붉은 행성을 조사하다",
        explain: "화성은 흙에 철 성분이 많아 붉게 보여서 '붉은 행성'이라고 불려요. 과학자들은 로버라는 로봇 자동차를 화성에 보내 땅을 조사하고 있어요. 옛날 화성에 물이 흘렀던 흔적을 찾았고, 생명체가 살았을 가능성도 연구하고 있답니다.",
        facts: ["흙 속 철 때문에 붉게 보여요.", "'로버' 로봇이 땅을 조사해요.", "과거에 물이 있던 흔적을 찾았어요."],
        fun: "화성에는 태양계에서 가장 높은 산 '올림푸스 몬스'가 있는데, 에베레스트산의 약 3배 높이예요!",
        q: "화성 탐사 로버 붉은 행성 초등 과학"
      }
    ]
  }
};

// ===== 화면 그리기 =====
const view = document.getElementById("view");
const crumb = document.getElementById("crumb");

function setCrumb(parts) {
  crumb.innerHTML = parts.map((p, i) => {
    const sep = i > 0 ? '<span class="sep">›</span>' : "";
    if (p.go !== undefined) return sep + `<a data-go="${p.go}">${p.label}</a>`;
    return sep + `<span>${p.label}</span>`;
  }).join(" ");
  crumb.querySelectorAll("[data-go]").forEach(a => {
    a.onclick = () => a.dataset.go === "home" ? renderHome() : renderTopic(a.dataset.go);
  });
}

function renderHome() {
  setCrumb([{ label: "홈" }]);
  view.innerHTML =
    '<h1 class="page-title"><span class="emoji">🌌</span> 우주 탐험대에 온 걸 환영해요!</h1>' +
    '<p class="lead">오늘은 어떤 우주 이야기가 궁금해요? 아래에서 하나를 골라보세요.</p>' +
    '<div class="grid">' +
    Object.keys(TOPICS).map(k => {
      const t = TOPICS[k];
      return `<button class="topic" data-k="${k}">
        <span class="topic__icon" style="background:${t.bg}">${t.emoji}</span>
        <span class="topic__name">${t.name}</span>
        <span class="topic__meta">${t.subs.length}가지 이야기 →</span>
      </button>`;
    }).join("") +
    "</div>";
  view.querySelectorAll("[data-k]").forEach(b => b.onclick = () => renderTopic(b.dataset.k));
}

function renderTopic(k) {
  const t = TOPICS[k];
  setCrumb([{ label: "홈", go: "home" }, { label: t.name }]);
  view.innerHTML =
    `<h1 class="page-title"><span class="emoji">${t.emoji}</span> ${t.name}</h1>` +
    '<p class="lead">배우고 싶은 이야기를 골라보세요.</p>' +
    '<div class="sublist">' +
    t.subs.map((s, i) => `<button class="subitem" data-i="${i}">
        <span>
          <span class="subitem__title">${s.t}</span>
          <span class="subitem__desc">${s.d}</span>
        </span>
        <span class="subitem__arrow">›</span>
      </button>`).join("") +
    "</div>";
  view.querySelectorAll("[data-i]").forEach(b => b.onclick = () => renderDetail(k, +b.dataset.i));
}

function renderDetail(k, i) {
  const t = TOPICS[k];
  const s = t.subs[i];
  setCrumb([{ label: "홈", go: "home" }, { label: t.name, go: k }, { label: s.t }]);
  const searchUrl = "https://www.youtube.com/results?search_query=" + encodeURIComponent(s.q);
  view.innerHTML =
    `<h2 class="detail-title">${s.t}</h2>` +
    `<a class="video-cta" href="${searchUrl}" target="_blank" rel="noopener">
        <span class="video-cta__play">▶</span>
        <span class="video-cta__label">관련 교육 영상 보기</span>
        <span class="video-cta__hint">유튜브에서 "${s.t}" 교육 영상을 열어요</span>
      </a>` +
    `<p class="explain">${s.explain}</p>` +
    `<div class="facts"><h3>🔑 핵심 개념</h3><ul>${s.facts.map(f => `<li>${f}</li>`).join("")}</ul></div>` +
    `<div class="fun">💡 <b>알고 있나요?</b> ${s.fun}</div>`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("homeBtn").onclick = renderHome;
renderHome();
