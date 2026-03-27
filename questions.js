const QUESTION_BANK = [
  { 
    subj: 1, 
    q: "DIKW 피라미드(DIKW Pyramid)에서 데이터(Data)를 통해 패턴을 인식하는 단계를 의미하는 것은?", 
    choices: ["지식(Knowledge)", "정보(Information)", "데이터(Data)", "지혜(Wisdom)"], 
    ans: 1, 
    exp: "DIKW 피라미드에서 '패턴을 인식하는 단계'는 정보(Information)입니다. 데이터(Data)는 가공되지 않은 원시 사실이고, 지식(Knowledge)은 정보에서 도출된 원리·규칙을 의사결정에 활용하는 단계이며, 지혜(Wisdom)는 지식을 바탕으로 미래 행동을 판단하는 최상위 단계입니다. '정보'와 '지식'은 혼동하기 쉬우나, 패턴 인식·해석까지는 정보 단계입니다. ☞ 암기 팁: Data(원시)→Information(패턴인식)→Knowledge(원리·의사결정)→Wisdom(미래판단)" 
  },
  { 
    subj: 1, 
    q: "암묵지(Tacit Knowledge)와 형식지(Explicit Knowledge)의 상호작용 과정 중, 암묵지 지식을 매뉴얼이나 문서로 전환하는 과정은?", 
    choices: ["표출화(Externalization)", "내면화(Internalization)", "공통화(Socialization)", "연결화(Combination)"], 
    ans: 0, 
    exp: "표출화(Externalization)는 암묵지→형식지 변환입니다. 내면화(Internalization)는 형식지→암묵지(책·매뉴얼을 읽어 몸에 익히는 것), 공통화(Socialization)는 암묵지→암묵지(경험 공유), 연결화(Combination)는 형식지→형식지(문서 통합·재구성)입니다. ☞ 암기 팁: 표출화(Externalization) = 암묵지를 문서(형식지)로 '표출'" 
  },
  { 
    subj: 1, 
    q: "데이터베이스(Database)의 4가지 대표적인 특징에 해당하지 않는 것은?", 
    choices: ["공용 데이터(Shared Data)", "통합된 데이터(Integrated Data)", "휘발성 데이터(Volatile Data)", "운영 데이터(Operational Data)"], 
    ans: 2, 
    exp: "데이터베이스 4대 특성: 공용 데이터(Shared), 통합된 데이터(Integrated), 저장된 데이터(Stored), 변화되는 데이터(Operational)입니다. '휘발성 데이터'는 전원 차단 시 사라지는 RAM 특성으로 DB 특성이 아닙니다. '운영 데이터(Operational Data)'는 실제 DB 특성이므로 구별에 주의해야 합니다. ☞ 암기 팁: DB특성=공(Shared)·통(Integrated)·저(Stored)·운(Operational) — 휘발성은 RAM!" 
  },
  { 
    subj: 1, 
    q: "데이터베이스 설계 절차(Database Design Process)를 올바른 순서로 나열한 것은?", 
    choices: ["개념적 설계 - 물리적 설계 - 논리적 설계", "물리적 설계 - 논리적 설계 - 개념적 설계", "논리적 설계 - 개념적 설계 - 물리적 설계", "개념적 설계 - 논리적 설계 - 물리적 설계"], 
    ans: 3, 
    exp: "데이터베이스 설계는 개념적 설계, 논리적 설계, 물리적 설계 순으로 진행됩니다." 
  },
  { 
    subj: 1, 
    q: "SQL 언어 중 데이터베이스 조작언어(DML, Data Manipulation Language)에 해당하는 명령어들로만 짝지어진 것은?", 
    choices: ["CREATE, ALTER, DROP", "COMMIT, ROLLBACK", "GRANT, REVOKE", "SELECT, INSERT, DELETE, UPDATE"], 
    ans: 3, 
    exp: "SELECT, INSERT, DELETE, UPDATE는 데이터를 조회하고 수정하는 조작언어(DML)입니다. CREATE, ALTER, DROP은 정의언어(DDL)입니다." 
  },
  { 
    subj: 1, 
    q: "다량의 단기 거래를 실시간으로 처리하는 기업 내부 활용 데이터베이스 시스템은?", 
    choices: ["OLAP(Online Analytical Processing)", "OLTP(Online Transaction Processing)", "CRM(Customer Relationship Management)", "SCM(Supply Chain Management)"], 
    ans: 1, 
    exp: "OLTP는 다량의 단기 거래를 실시간으로 처리하는 시스템이며, OLAP는 다차원 데이터를 대화식으로 분석하는 시스템입니다." 
  },
  { 
    subj: 1, 
    q: "가트너(Gartner)가 정의한 빅데이터의 3V 특징에 해당하지 않는 것은?", 
    choices: ["Volume(규모)", "Variety(다양성)", "Velocity(속도)", "Validity(유효성)"], 
    ans: 3, 
    exp: "가트너가 최초 정의한 빅데이터 3V는 Volume·Variety·Velocity입니다. Veracity(신뢰성)는 IBM이 추가한 4번째 V이며, Validity(유효성)는 7V 확장 개념 중 하나입니다. 시험에서 Veracity가 자주 오답으로 제시되므로 Validity와의 혼동에 주의하세요. ☞ 암기 팁: 가트너 3V=Volume+Variety+Velocity / Veracity(신뢰)는 IBM이 추가" 
  },
  { 
    subj: 1, 
    q: "빅데이터가 만들어내는 가치 패러다임의 변화로 올바르지 않은 것은?", 
    choices: ["표본조사에서 전수조사로 변화", "사전처리에서 사후처리로 변화", "양(Quantity)에서 질(Quality)로의 강조로 변화", "상관관계에서 인과관계로 변화"], 
    ans: 3, 
    exp: "빅데이터 변화: ①표본→전수조사, ②사전→사후처리, ③질(Quality)→양(Quantity) 강조로의 변화가 올바릅니다. '상관관계에서 인과관계로'는 역방향이 잘못됩니다. 빅데이터는 오히려 인과관계 규명보다 방대한 데이터에서 상관관계를 찾는 방향으로 변화합니다. ☞ 암기 팁: 빅데이터 = 인과관계→상관관계(역방향 주의!), 질→양 강조" 
  },
  { 
    subj: 1, 
    q: "데이터 사이언티스트(Data Scientist)에게 요구되는 소프트 스킬(Soft Skill)에 해당하는 것은?", 
    choices: ["빅데이터 인프라 이해 능력", "데이터 마이닝 알고리즘 구현 능력", "통계적 모델링 및 검증 능력", "스토리텔링 및 커뮤니케이션"], 
    ans: 3, 
    exp: "소프트 스킬은 비판적 사고, 스토리텔링, 커뮤니케이션, 통찰력 등 대인·의사소통 역량입니다. 빅데이터 인프라 이해, 데이터 마이닝 구현, 통계적 모델링은 모두 전문 기술(하드 스킬)입니다. ☞ 암기 팁: 소프트스킬=스토리텔링·커뮤니케이션·비판적사고 / 하드스킬=통계·프로그래밍·알고리즘" 
  },
  { 
    subj: 1, 
    q: "빅데이터 분석 조직 구조 중 독립적인 전담 조직을 구성하지만, 타 부서와 중복 업무 가능성이 존재하는 구조는?", 
    choices: ["집중 구조", "분산 구조", "기능 구조", "매트릭스 구조"], 
    ans: 0, 
    exp: "집중 구조는 독립 전담 조직(DSCoE)을 구성하지만 현업 부서와 업무가 중복될 수 있습니다. 분산 구조는 각 부서에 분석가를 배치하는 방식, 기능 구조는 부서 내 기능 일부로 분석 수행, 매트릭스 구조는 겸직 형태입니다. ☞ 암기 팁: 집중구조=독립조직+중복가능, 분산구조=현업배치+민첩대응" 
  },
  { 
    subj: 1, 
    q: "빅데이터 플랫폼의 계층 구조 중 자원의 배치 및 관리, 저장장치 및 네트워크 관리를 담당하는 가장 하위 계층은?", 
    choices: ["소프트웨어 계층", "플랫폼 계층", "인프라스트럭처 계층(Infrastructure Layer)", "어플리케이션 계층"], 
    ans: 2, 
    exp: "인프라스트럭처 계층은 서버, 저장장치, 네트워크 등을 관리하는 빅데이터 플랫폼의 최하위 계층입니다." 
  },
  { 
    subj: 1, 
    q: "머신러닝(Machine Learning)의 종류 중 정답을 가르쳐주지 않고 데이터의 패턴을 학습시키는 방법은?", 
    choices: ["지도학습(Supervised Learning)", "비지도학습(Unsupervised Learning)", "준지도학습(Semi-supervised Learning)", "자기지도학습(Self-supervised Learning)"], 
    ans: 1, 
    exp: "비지도학습은 레이블 없이 데이터의 패턴·구조를 스스로 파악합니다. 지도학습은 레이블 데이터로 학습, 준지도학습은 일부 레이블+다량 비레이블 혼합 학습, 자기지도학습은 데이터 일부를 마스킹하고 이를 예측하는 방식(BERT 등)입니다. ☞ 암기 팁: 비지도=레이블 없이 패턴 발견, 준지도=레이블 일부만 사용" 
  },
  { 
    subj: 1, 
    q: "우리나라의 데이터 3법에 포함되지 않는 법률은?", 
    choices: ["개인정보보호법", "정보통신망 이용 촉진 및 정보보호 등에 관한 법률", "신용정보의 이용 및 보호에 관한 법률", "전자금융거래법"], 
    ans: 3, 
    exp: "데이터 3법: ①개인정보보호법, ②정보통신망법, ③신용정보법입니다. 전자금융거래법, 위치정보법은 포함되지 않습니다. 시험에서는 '위치정보법'이나 '전자금융거래법'을 오답으로 자주 제시합니다. ☞ 암기 팁: 데이터 3법=개인정보보호+정보통신망+신용정보 (위치·전자금융은 제외)" 
  },
  { 
    subj: 1, 
    q: "개인정보 비식별 조치 방법 중 '홍길동, 35세'를 '임꺽정, 30세'로 변경하는 기법은?", 
    choices: ["총계처리(Aggregation)", "가명처리(Pseudonymization)", "데이터 범주화(Data Categorization)", "데이터 마스킹(Data Masking)"], 
    ans: 1, 
    exp: "가명처리는 실명→다른 이름, 나이→근사값으로 대체합니다. 총계처리는 개별값→집계통계로 대체, 범주화는 '35세'→'30대'처럼 범주로 묶기, 마스킹은 '홍길*'처럼 일부를 '*'으로 가리기입니다. ☞ 암기 팁: 가명처리=이름·나이 등을 다른 유사값으로 대체 / 마스킹=일부 *로 가리기" 
  },
  { 
    subj: 1, 
    q: "프라이버시 보호 모델 중 민감한 정보의 다양성을 높여 동질성 공격과 배경 지식에 의한 공격으로부터 보호하는 모델은?", 
    choices: ["k-익명성(k-Anonymity)", "l-다양성(l-Diversity)", "t-근접성(t-Closeness)", "δ-존재성(δ-Presence)"], 
    ans: 1, 
    exp: "l-다양성은 같은 준식별자 그룹 내 민감 속성이 l개 이상 다양하게 존재하도록 합니다. k-익명성은 동일 레코드 k개 이상 보장, t-근접성은 민감속성 분포가 전체 분포와 유사하도록 보장, δ-존재성은 레코드 존재 여부 보호입니다. ☞ 암기 팁: l-다양성=민감속성 l개 이상 다양화, t-근접성=분포 유사성 보장" 
  },
  { 
    subj: 1, 
    q: "데이터 분석 프로젝트의 우선순위 선정 기준 중 '시급성' 관점과 가장 관련이 깊은 요소는?", 
    choices: ["데이터의 양(Volume)", "데이터의 다양성(Variety)", "비즈니스 효과 및 핵심성과지표(Value)", "기술 구현 난이도(Velocity)"], 
    ans: 2, 
    exp: "우선순위 선정 시 시급성은 비즈니스 효과(Return) 및 KPI 등 가치(Value)와 직결되며, 난이도는 투자비용 요소(Volume, Variety, Velocity)와 관련됩니다." 
  },
  { 
    subj: 1, 
    q: "하향식 접근 방법(Top-Down Approach)의 문제탐색 단계에서 발굴 범위를 거시적 관점으로 확장할 때 사용하는 STEEP 기법에 해당하지 않는 것은?", 
    choices: ["사회(Society)", "기술(Technology)", "경제(Economy)", "교육(Education)"], 
    ans: 3, 
    exp: "STEEP은 사회(Society), 기술(Technology), 경제(Economy), 환경(Environment), 정치(Politics)를 의미합니다." 
  },
  { 
    subj: 1, 
    q: "CRISP-DM 분석 방법론의 6단계 절차에 포함되지 않는 것은?", 
    choices: ["업무 이해(Business Understanding)", "데이터 전처리(Data Preprocessing)", "모델링(Modeling)", "평가(Evaluation)"], 
    ans: 1, 
    exp: "CRISP-DM 방법론은 업무 이해, 데이터 이해, 데이터 준비(Data Preparation), 모델링, 평가, 전개(Deployment) 순으로 진행됩니다. 전처리는 KDD 방법론의 명칭입니다." 
  },
  { 
    subj: 1, 
    q: "빅데이터 분석 수준 진단 결과 중 조직 및 인력 등의 준비도는 높으나, 분석업무 및 기법이 부족한 유형은?", 
    choices: ["준비형", "정착형", "도입형", "확산형"], 
    ans: 2, 
    exp: "도입형은 준비도는 높으나 성숙도(분석업무, 기법)가 낮은 상태를 의미합니다." 
  },
  { 
    subj: 1, 
    q: "하둡 에코시스템(Hadoop Ecosystem)에서 분산 코디네이터 역할을 수행하는 서브 프로젝트는?", 
    choices: ["Zookeeper", "MapReduce", "HDFS", "Flume"], 
    ans: 0, 
    exp: "Zookeeper는 분산 환경에서 서버 간의 상호 조정이 필요한 다양한 서비스를 제공하는 분산 코디네이터입니다." 
  },
  { 
    subj: 1, 
    q: "기업 내부 데이터를 활용하는 시스템 중, 다차원 데이터를 대화식으로 분석하여 의사결정을 지원하는 시스템은?", 
    choices: ["OLTP", "OLAP", "CRM", "ERP"], 
    ans: 1, 
    exp: "OLAP(Online Analytical Processing)는 다차원 데이터를 대화식으로 분석하는 시스템입니다. OLTP는 다량의 단기 거래를 실시간 처리합니다." 
  },
  { 
    subj: 1, 
    q: "빅데이터를 활용하기 위한 3대 핵심 요소로 올바르게 짝지어진 것은?", 
    choices: ["인력, 자원, 기술", "데이터, 네트워크, 클라우드", "소프트웨어, 하드웨어, 데이터", "인력, 프로세스, 시스템"], 
    ans: 0, 
    exp: "빅데이터 활용을 위한 3대 요소는 데이터를 분석할 전문 인력(Data Scientist), 기본 자원이 되는 데이터(Data), 그리고 이를 처리할 기술(Technology)입니다." 
  },
  { 
    subj: 1, 
    q: "빅데이터가 만들어내는 가치 패러다임의 변화 단계를 순서대로 나열한 것은?", 
    choices: ["Digitalization - Connection - Agency", "Connection - Digitalization - Agency", "Agency - Digitalization - Connection", "Digitalization - Agency - Connection"], 
    ans: 0, 
    exp: "가치 패러다임은 아날로그의 디지털화(Digitalization), 정보들의 연결(Connection), 그리고 정보가 스스로 행동하는 주체가 되는 단계(Agency)로 변화합니다." 
  },
  { 
    subj: 1, 
    q: "인공지능(Artificial Intelligence), 머신러닝(Machine Learning), 딥러닝(Deep Learning)의 포함 관계로 올바른 것은?", 
    choices: ["딥러닝 ⊂ 머신러닝 ⊂ 인공지능", "머신러닝 ⊂ 딥러닝 ⊂ 인공지능", "인공지능 ⊂ 딥러닝 ⊂ 머신러닝", "딥러닝 ⊂ 인공지능 ⊂ 머신러닝"], 
    ans: 0, 
    exp: "인공지능이 가장 넓은 개념이며, 그 안에 머신러닝이 포함되고, 머신러닝의 하위 개념으로 인공신경망을 활용하는 딥러닝이 포함됩니다." 
  },
  { 
    subj: 1, 
    q: "데이터 3법 개정을 통해 통계 작성, 과학적 연구, 공익적 기록 보존의 목적으로 정보 주체의 동의 없이도 활용할 수 있게 된 정보의 형태는?", 
    choices: ["개인정보(Personal Information)", "가명정보(Pseudonymous Information)", "익명정보(Anonymous Information)", "민감정보(Sensitive Information)"], 
    ans: 1, 
    exp: "데이터 3법 개정으로 도입된 가명정보(Pseudonymous Information)는 특정 조건 하에 동의 없이 활용이 가능해졌습니다." 
  },
  { 
    subj: 1, 
    q: "빅데이터의 부작용을 통제하기 위한 방안 중, 알고리즘으로 인해 부당하게 피해를 입은 사람들을 구제하는 전문 인력을 지칭하는 용어는?", 
    choices: ["데이터 엔지니어(Data Engineer)", "데이터 사이언티스트(Data Scientist)", "데이터 스튜어드(Data Steward)", "알고리즈미스트(Algorithmicist)"], 
    ans: 3, 
    exp: "알고리즈미스트(Algorithmicist)는 알고리즘의 편향이나 오류로 인해 발생한 피해자를 구제하고 알고리즘을 해석하는 역할을 담당합니다." 
  },
  { 
    subj: 1, 
    q: "분석 대상(What)은 알려져 있으나, 분석 방법(How)을 모르는 경우에 적용하는 분석 과제 도출 방식은?", 
    choices: ["최적화(Optimization)", "솔루션(Solution)", "통찰(Insight)", "발견(Discovery)"], 
    ans: 1, 
    exp: "분석 대상을 알지만 방법을 모를 때는 솔루션(Solution)을 찾습니다. 대상을 모르고 방법만 알 때는 통찰(Insight)을 도출합니다." 
  },
  { 
    subj: 1, 
    q: "데이터 분석 프로젝트의 우선순위 선정 기준 중, 비즈니스 효과(Return) 및 KPI와 연관되어 시급성을 판단하는 기준은?", 
    choices: ["Value", "Volume", "Variety", "Velocity"], 
    ans: 0, 
    exp: "시급성은 비즈니스 가치(Value)를 기준으로 판단하며, 난이도는 데이터의 규모(Volume), 다양성(Variety), 생성 속도(Velocity) 등 투자 비용 요소를 기준으로 판단합니다." 
  },
  { 
    subj: 1, 
    q: "하향식 접근 방법(Top-Down Approach)의 첫 번째 단계로, 비즈니스 모델이나 외부 사례를 기반으로 문제 자체를 발굴하는 단계는?", 
    choices: ["문제 정의(Problem Definition)", "해결방안 탐색(Solution Search)", "문제 탐색(Problem Discovery)", "타당성 검토(Feasibility Study)"], 
    ans: 2, 
    exp: "하향식 접근 방법은 문제 탐색, 문제 정의, 해결방안 탐색, 타당성 검토의 순서로 진행됩니다." 
  },
  { 
    subj: 1, 
    q: "문제 정의 자체가 어려울 때, 사물이나 데이터를 그대로 인식하고 탐색하여 문제를 도출하는 상향식 접근 방법(Bottom-Up Approach)에서 주로 활용하는 기술은?", 
    choices: ["지도학습(Supervised Learning)", "비지도학습(Unsupervised Learning)", "강화학습(Reinforcement Learning)", "최적화 알고리즘(Optimization Algorithm)"], 
    ans: 1, 
    exp: "상향식 접근법은 데이터 자체의 패턴을 발견해야 하므로 비지도학습(Unsupervised Learning)이나 프로토타이핑 접근법을 주로 사용합니다." 
  },
  { 
    subj: 1, 
    q: "소프트웨어 개발 모델 중 일부분을 우선 개발하여 사용자에게 제공하고, 피드백을 통해 점진적으로 보완해 나가는 모델은?", 
    choices: ["폭포수 모델(Waterfall Model)", "애자일 모델(Agile Model)", "프로토타입 모델(Prototyping Model)", "나선형 모델(Spiral Model)"], 
    ans: 2, 
    exp: "프로토타입 모델은 핵심 기능을 먼저 구현해 피드백으로 점진 보완합니다. 폭포수는 단방향 순차 진행, 애자일은 짧은 스프린트로 반복 개발(팀 중심), 나선형은 위험 분석을 포함한 반복 개발입니다. ☞ 암기 팁: 프로토타입=시제품 먼저+피드백 반영 / 애자일=짧은 스프린트 반복 / 나선형=위험분석 포함" 
  },
  { 
    subj: 1, 
    q: "KDD(Knowledge Discovery in Databases) 분석 방법론에서 이상값(Outlier)과 잡음(Noise)을 식별하고 데이터를 가공하는 단계는?", 
    choices: ["데이터 선택(Selection)", "전처리(Preprocessing)", "통합(Integration)", "변환(Transformation)"], 
    ans: 1, 
    exp: "KDD 전처리(Preprocessing)는 이상값·잡음 제거, 결측치 처리를 수행합니다. 데이터 선택은 분석 목적에 맞는 데이터 부분집합 추출, 통합은 여러 소스 병합, 변환은 마이닝에 적합한 형태로 가공합니다. ☞ 암기 팁: KDD=선택→전처리(이상값/잡음)→변환→마이닝→평가" 
  },
  { 
    subj: 1, 
    q: "빅데이터 분석 방법론의 데이터 준비(Preparing) 단계에 해당하는 태스크(Task)는?", 
    choices: ["프로젝트 위험계획 수립", "데이터 스토어 설계", "탐색적 데이터 분석(EDA)", "시스템 테스트 및 운영"], 
    ans: 1, 
    exp: "데이터 스토어 설계는 데이터 준비 단계에 포함됩니다. 위험계획은 기획 단계, EDA는 분석 단계, 시스템 테스트는 시스템 구현 단계에 해당합니다." 
  },
  { 
    subj: 1, 
    q: "빅데이터 거버넌스 프레임워크(Big Data Governance Framework)의 구성요소에 해당하지 않는 것은?", 
    choices: ["조직(Organization)", "프로세스(Process)", "데이터(Data)", "네트워크(Network)"], 
    ans: 3, 
    exp: "분석 거버넌스 체계의 주요 구성요소는 조직, 프로세스, 시스템, 데이터, 분석관련 교육 및 마인드 육성체계입니다." 
  },
  { 
    subj: 1, 
    q: "데이터 수집 기술 중, 응용 프로그램에서 다른 프로그램으로 데이터를 전송할 수 있도록 제공되는 인터페이스는?", 
    choices: ["API", "FTP", "ETL", "Sqoop"], 
    ans: 0, 
    exp: "API(Application Programming Interface)는 소프트웨어 애플리케이션들이 서로 상호작용하고 데이터를 교환할 수 있게 해주는 인터페이스입니다." 
  },
  { 
    subj: 1, 
    q: "데이터 유형 중 메타데이터(Metadata)를 포함하여 데이터의 구조를 파악할 수 있는 HTML, XML, JSON 등의 데이터 형태는?", 
    choices: ["정형 데이터(Structured Data)", "반정형 데이터(Semi-structured Data)", "비정형 데이터(Unstructured Data)", "연속형 데이터(Continuous Data)"], 
    ans: 1, 
    exp: "반정형 데이터는 고정 스키마 없지만 메타데이터·태그로 구조 파악 가능(HTML, XML, JSON, 로그 등)합니다. 정형은 RDBMS 테이블, 비정형은 이미지·동영상·음성·텍스트, 연속형은 데이터 형태가 아닌 측정 척도입니다. ☞ 암기 팁: 반정형=메타데이터 포함(HTML/XML/JSON) / 비정형=이미지·음성·자연어" 
  },
  { 
    subj: 1, 
    q: "개인정보 비식별화 처리 기법 중 '주민등록번호 901111-1234567'을 '90년대 생, 남자'로 변경하여 개인을 특정하지 못하게 하는 기법은?", 
    choices: ["총계처리", "가명처리", "데이터 삭제", "데이터 마스킹"], 
    ans: 2, 
    exp: "데이터 삭제(Data Suppression) 기법 중 식별요소의 전부 또는 일부를 삭제하여 해당 값을 포괄적인 의미로 변경한 사례입니다." 
  },
  { 
    subj: 1, 
    q: "데이터 품질 기준 중 여러 시스템에 저장된 데이터가 서로 동일한 값을 유지하고 있는지를 나타내는 지표는?", 
    choices: ["완전성(Completeness)", "정확성(Accuracy)", "최신성(Timeliness)", "일관성(Consistency)"], 
    ans: 3, 
    exp: "일관성(Consistency)은 데이터가 여러 저장소나 시스템 간에 모순 없이 동일한 상태를 유지하는 것을 의미합니다." 
  },
  { 
    subj: 1, 
    q: "하둡 분산 파일 시스템(HDFS)의 구성 요소 중, 슬레이브 노드를 관리하고 파일 시스템의 네임스페이스를 유지하는 역할을 하는 것은?", 
    choices: ["네임 노드(Name Node)", "데이터 노드(Data Node)", "보조 네임 노드(Secondary Name Node)", "노드 매니저(Node Manager)"], 
    ans: 0, 
    exp: "네임 노드는 파일 시스템 메타데이터(파일명·블록 위치·권한)를 관리하는 마스터 역할입니다. 데이터 노드는 실제 데이터 블록 저장, 보조 네임 노드는 네임 노드 체크포인트 보조, 노드 매니저는 YARN의 자원·컨테이너 관리를 담당합니다. ☞ 암기 팁: 네임 노드=마스터(메타데이터관리) / 데이터 노드=슬레이브(실제 데이터)" 
  },
  { 
    subj: 1, 
    q: "NoSQL 데이터베이스 유형 중 문서를 트리 구조로 저장하거나 검색하며, MongoDB가 대표적인 솔루션인 유형은?", 
    choices: ["키-값 데이터베이스(Key-Value DB)", "열 지향 데이터베이스(Column-family DB)", "그래프 데이터베이스(Graph DB)", "문서 데이터베이스(Document DB)"], 
    ans: 3, 
    exp: "문서 DB는 JSON·BSON·XML 형태로 데이터 저장, MongoDB가 대표적입니다. 키-값 DB는 Redis·DynamoDB, 열 지향 DB는 HBase·Cassandra, 그래프 DB는 Neo4j가 대표적입니다. ☞ 암기 팁: 문서DB=MongoDB(JSON), 열DB=HBase·Cassandra, 그래프DB=Neo4j" 
  },
  { 
    subj: 1, 
    q: "암묵지와 형식지 간의 상호작용 중, 만들어진 교재나 매뉴얼(형식지)을 통해 다른 사람의 암묵지를 터득하는 과정은?", 
    choices: ["공통화(Socialization)", "표출화(Externalization)", "연결화(Combination)", "내면화(Internalization)"], 
    ans: 3, 
    exp: "내면화(Internalization)는 문서화된 형식지를 바탕으로 개인의 경험을 더해 다시 암묵지로 습득하는 과정입니다." 
  },
  { 
    subj: 1, 
    q: "기업 내부 활용 데이터베이스 중 최신 정보를 바탕으로 지연 없는 신속한 의사결정을 지원하는 시스템은?", 
    choices: ["ERP(Enterprise Resource Planning)", "RTE(Real-Time Enterprise)", "CRM(Customer Relationship Management)", "KMS(Knowledge Management System)"], 
    ans: 1, 
    exp: "RTE(Real-Time Enterprise)는 기업 내외부의 모든 정보를 실시간으로 통합하여 지연 없는 신속한 의사결정을 지원하는 시스템입니다." 
  },
  { 
    subj: 1, 
    q: "빅데이터의 가치 산정이 어려운 이유로 가장 거리가 먼 것은?", 
    choices: ["데이터의 활용 시기와 대상을 정확히 알 수 없다.", "기존에는 가치가 없던 데이터도 새로운 기법으로 가치가 창출된다.", "데이터가 특정 목적에만 제한적으로 사용되어 범용성이 낮다.", "데이터가 다방면에서 활용되며 그 가치가 계속 변화한다."], 
    ans: 2, 
    exp: "빅데이터는 특정 목적뿐만 아니라 누가, 언제, 어디서 활용할지 알 수 없고 재사용 및 다목적 활용이 가능하므로 가치 산정이 어렵습니다." 
  },
  { 
    subj: 1, 
    q: "데이터 단위의 크기를 작은 것부터 큰 순서로 올바르게 나열한 것은?", 
    choices: ["PB - EB - ZB - YB", "TB - PB - ZB - EB", "EB - PB - YB - ZB", "TB - EB - PB - YB"], 
    ans: 0, 
    exp: "데이터 단위는 KB, MB, GB, TB, PB(Peta), EB(Exa), ZB(Zetta), YB(Yotta) 순으로 커집니다." 
  },
  { 
    subj: 1, 
    q: "빅데이터 분석 조직 구조 중, 데이터 분석 전문가들을 각 현업 부서에 직접 배치하여 신속한 업무 처리를 돕는 구조는?", 
    choices: ["집중 구조", "기능 구조", "분산 구조", "매트릭스 구조"], 
    ans: 2, 
    exp: "분산 구조는 분석 전담 조직(DSCoE)의 인력을 각 사업부나 현업 부서에 배치하여 현업의 요구에 민첩하게 대응하는 구조입니다." 
  },
  { 
    subj: 1, 
    q: "빅데이터 플랫폼의 계층 구조 중 데이터 및 자원의 관리, 작업 스케줄링, 프로파일링을 담당하는 계층은?", 
    choices: ["인프라스트럭처 계층(Infrastructure Layer)", "플랫폼 계층(Platform Layer)", "소프트웨어 계층(Software Layer)", "애플리케이션 계층(Application Layer)"], 
    ans: 1, 
    exp: "플랫폼 계층은 하드웨어 인프라와 소프트웨어 사이에서 데이터와 컴퓨팅 자원을 관리하고 작업 스케줄링을 수행하는 중간 계층입니다." 
  },
  { 
    subj: 1, 
    q: "경량 딥러닝 학습 기법 중 사전에 훈련된 거대한 모델(Teacher Network)의 지식을 더 작은 모델(Student Network)에 전달하는 기법은?", 
    choices: ["전이학습(Transfer Learning)", "파인튜닝(Fine-Tuning)", "지식증류(Knowledge Distillation)", "메타학습(Meta Learning)"], 
    ans: 2, 
    exp: "지식증류(Knowledge Distillation)는 크고 무거운 모델의 예측 능력을 가볍고 빠른 모델에 전수하여 성능을 유지하면서 모델을 경량화하는 기법입니다." 
  },
  { 
    subj: 1, 
    q: "데이터 3법에 명시된 정보의 종류 중, 다른 정보와 결합하더라도 더 이상 특정 개인을 알아볼 수 없도록 처리되어 제한 없이 자유롭게 활용할 수 있는 정보는?", 
    choices: ["개인정보(Personal Information)", "가명정보(Pseudonymous Information)", "익명정보(Anonymous Information)", "민감정보(Sensitive Information)"], 
    ans: 2, 
    exp: "익명정보는 개인 식별이 완벽하게 불가능해진 상태의 정보로, 개인정보보호법의 엄격한 규제를 받지 않고 자유롭게 상업적, 학술적 활용이 가능합니다." 
  },
  { 
    subj: 1, 
    q: "빅데이터의 발전으로 인한 부작용 중 하나인 프라이버시 침해 문제에 대한 대응 방안으로 가장 적절한 것은?", 
    choices: ["사전 동의 제도의 엄격한 적용", "알고리즘 접근 허용 및 해석", "데이터 제공자 책임에서 사용자 책임으로 전환", "결과에 대한 책임 원칙 훼손 방지"], 
    ans: 2, 
    exp: "프라이버시 침해 문제에 대응하기 위해 데이터를 제공한 사람의 동의 여부보다, 데이터를 활용하는 사용자(활용자)의 책임으로 무게 중심이 이동하고 있습니다." 
  },
  { 
    subj: 1, 
    q: "분석 과제 발굴에서 분석 대상(What)을 모르고 분석 방법(How)은 알려져 있을 때 도출하는 과제 유형은?", 
    choices: ["통찰(Insight)", "솔루션(Solution)", "최적화(Optimization)", "발견(Discovery)"], 
    ans: 0, 
    exp: "분석 방법은 알지만 대상을 정확히 모르는 경우, 기존의 방법론을 데이터를 통해 탐색하여 새로운 지식이나 통찰(Insight)을 도출하게 됩니다." 
  },
  { 
    subj: 1, 
    q: "IT 프로젝트의 우선순위 선정 기준 중 실행 용이성 평가 요소에 해당하는 것은?", 
    choices: ["전략적 필요성", "해결 지연 시의 리스크", "비즈니스 효과", "투자 용이성 및 기술 구현 난이도"], 
    ans: 3, 
    exp: "실행 용이성은 예산 확보 여부와 같은 투자 용이성과 기술 구현 난이도(기술 용이성)를 기준으로 평가합니다. 전략적 중요도는 필요성과 시급성을 봅니다." 
  },
  { 
    subj: 1, 
    q: "하향식 접근 방법(Top-Down Approach)의 문제 탐색 단계에서 비즈니스 모델 기반으로 탐색할 때 고려하는 5가지 영역이 아닌 것은?", 
    choices: ["업무(Operation)", "고객(Customer)", "제품(Product)", "경쟁자(Competitor)"], 
    ans: 3, 
    exp: "비즈니스 모델 기반 탐색의 5대 영역은 업무, 제품, 고객, 규제와 감사, 지원 인프라입니다. 경쟁자는 거시적 관점(시장의 니즈 등)에서 확장하여 고려됩니다." 
  },
  { 
    subj: 1, 
    q: "사용자 공감으로 시작하여 아이디어 발산과 수렴 과정을 통해 분석 과제를 도출하는 방식인 디자인 싱킹(Design Thinking)의 올바른 절차는?", 
    choices: ["문제정의 - 공감하기 - 프로토타입 - 아이디어 도출 - 테스트", "공감하기 - 문제정의 - 아이디어 도출 - 프로토타입 - 테스트", "아이디어 도출 - 공감하기 - 문제정의 - 테스트 - 프로토타입", "공감하기 - 아이디어 도출 - 문제정의 - 프로토타입 - 테스트"], 
    ans: 1, 
    exp: "디자인 싱킹은 공감하기(Empathize), 문제 정의(Define), 아이디어 도출(Ideate), 프로토타입(Prototype), 테스트(Test)의 5단계로 진행됩니다." 
  },
  { 
    subj: 1, 
    q: "KDD(Knowledge Discovery in Databases) 분석 방법론에서 데이터의 패턴을 찾기 위해 특정 분석 알고리즘을 적용하는 단계는?", 
    choices: ["전처리(Preprocessing)", "변환(Transformation)", "마이닝(Data Mining)", "평가(Evaluation)"], 
    ans: 2, 
    exp: "데이터 마이닝(Data Mining) 단계는 분석 목적에 맞는 마이닝 알고리즘을 선택하고 기계학습 등을 적용하여 데이터로부터 의미 있는 패턴이나 규칙을 도출하는 과정입니다." 
  },
  { 
    subj: 1, 
    q: "데이터 분석 수준 진단을 위한 분석 성숙도(Maturity) 평가에서 기반으로 삼는 모델은?", 
    choices: ["CMMI", "CRISP-DM", "SEMMA", "KDD"], 
    ans: 0, 
    exp: "분석 성숙도 진단은 소프트웨어 공학에서 프로세스 개선을 위해 널리 쓰이는 CMMI(Capability Maturity Model Integration)의 5단계(도입, 활용, 확산, 최적화 등) 모형을 기반으로 합니다." 
  },
  { 
    subj: 1, 
    q: "정형 데이터를 수집하는 기술 중, 관계형 데이터베이스(RDBMS)와 하둡(Hadoop) 간에 대용량 데이터를 효율적으로 전송할 수 있도록 돕는 도구는?", 
    choices: ["아파치 플럼(Flume)", "아파치 스쿱(Sqoop)", "웹 크롤링(Web Crawling)", "카프카(Kafka)"], 
    ans: 1, 
    exp: "아파치 스쿱(Sqoop)은 관계형 데이터베이스와 하둡 플랫폼 간의 정형 데이터 추출 및 적재를 위한 도구입니다. 플럼(Flume)은 비정형 로그 데이터를 수집하는 데 쓰입니다." 
  },
  { 
    subj: 1, 
    q: "개인정보 비식별 조치 기법 중, 개별 데이터의 값을 직접 보여주지 않고 전체의 평균이나 총합으로 대체하는 방법은?", 
    choices: ["가명처리(Pseudonymization)", "데이터 마스킹(Data Masking)", "총계처리(Aggregation)", "데이터 범주화(Data Categorization)"], 
    ans: 2, 
    exp: "총계처리(Aggregation)는 데이터 집합의 총합, 평균, 최댓값, 최솟값 등의 통계값만 제공하여 개별 데이터가 노출되는 것을 방지하는 기법입니다." 
  },
  { 
    subj: 1, 
    q: "프라이버시 보호 모델 중 특정 정보가 너무 편중되어 있을 때 발생할 수 있는 쏠림 공격이나 유사성 공격으로부터 데이터를 보호하는 모델은?", 
    choices: ["k-익명성(k-Anonymity)", "l-다양성(l-Diversity)", "t-근접성(t-Closeness)", "차등정보보호(Differential Privacy)"], 
    ans: 2, 
    exp: "t-근접성(t-Closeness)은 동질 집합 내 민감 정보의 분포가 전체 데이터 집합의 분포와 크게 다르지 않도록 맞추어 편중에 의한 쏠림 공격을 방지하는 모델입니다." 
  },
  { 
    subj: 1, 
    q: "구글이 대용량 데이터 처리를 위해 설계한 분산 파일 시스템으로, 마스터(Master)와 청크 서버(Chunk Server) 구조를 갖는 것은?", 
    choices: ["HDFS", "GFS", "Ceph", "Amazon S3"], 
    ans: 1, 
    exp: "GFS(Google File System)는 구글이 자사의 데이터 처리를 위해 개발한 분산 파일 시스템입니다. 이를 기반으로 아파치 진영에서 오픈소스로 구현한 것이 하둡의 HDFS입니다." 
  },
  { 
    subj: 1, 
    q: "데이터 웨어하우스(Data Warehouse)의 특징 중 한 번 적재된 데이터를 갱신하거나 삭제하지 않고 역사적 기록을 보존하는 읽기 전용 형태를 의미하는 특성은?", 
    choices: ["주제지향성(Subject-Oriented)", "데이터 통합(Integrated)", "시계열성(Time-Variant)", "비휘발성(Non-Volatile)"], 
    ans: 3, 
    exp: "DW 4특성: ①주제지향성(업무 주제별 구성), ②통합성(일관된 형식으로 통합), ③시계열성(시간 변화 추적), ④비휘발성(한번 저장 후 수정 없이 보존)입니다. 시계열성과 비휘발성은 모두 시간 관련이지만, 시계열성은 시간에 따른 변화 추적, 비휘발성은 데이터의 불변성을 의미합니다. ☞ 암기 팁: 비휘발성=한번 저장→읽기전용보존 / 시계열성=시간 흐름에 따른 변화 추적" 
  },
  {
    subj: 1,
    q: "개인정보 보호법에 따라 정보 주체가 자신의 개인정보에 대한 통제권을 가지고, 이를 본인이 원하는 다른 서비스에 직접 제공하도록 요구할 수 있는 권리 및 사업을 지칭하는 용어는?",
    choices: ["마이데이터(MyData)", "오픈 API(Open API)", "데이터 스토어(Data Store)", "데이터 마트(Data Mart)"],
    ans: 0,
    exp: "마이데이터(MyData)는 정보 주체가 자신의 정보를 적극적으로 관리하고 통제하며, 이를 신용평가, 자산관리 등에 능동적으로 활용하는 일련의 과정을 의미합니다."
  },
  {
    subj: 1,
    q: "데이터베이스 시스템의 구성 요소 중, 데이터베이스의 구조와 제약조건에 관한 전반적인 명세를 의미하는 것은?",
    choices: ["인스턴스(Instance)", "스키마(Schema)", "메타데이터(Metadata)", "인덱스(Index)"],
    ans: 1,
    exp: "스키마(Schema)는 데이터베이스의 데이터 구조, 자료의 속성, 데이터 간의 관계 및 제약조건 등에 관한 전반적인 명세(Specification)를 의미합니다."
  },
  {
    subj: 1,
    q: "기업 내의 다양한 애플리케이션 간에 데이터를 원활하게 공유하고 연동할 수 있도록 통합하는 인프라 소프트웨어는?",
    choices: ["ETL", "EAI", "CDC", "Sqoop"],
    ans: 1,
    exp: "EAI(Enterprise Application Integration)는 기업 내 서로 다른 플랫폼 및 애플리케이션 간의 정보 전달, 연동, 통합을 가능하게 해주는 솔루션입니다."
  },
  {
    subj: 1,
    q: "데이터베이스에서 데이터에 변경이 발생했을 때, 이를 실시간으로 감지하여 다른 시스템이나 데이터 웨어하우스로 복제하는 기술은?",
    choices: ["CDC(Change Data Capture)", "EAI(Enterprise Application Integration)", "RPA(Robotic Process Automation)", "API(Application Programming Interface)"],
    ans: 0,
    exp: "CDC(Change Data Capture)는 데이터베이스 내 데이터에 대한 변경(Insert, Update, Delete)을 식별하여 필요한 시스템으로 실시간 전송하는 기술입니다."
  },
  {
    subj: 1,
    q: "빅데이터 플랫폼을 자체적인 전산실 서버에 직접 구축하고 운영하는 방식은?",
    choices: ["퍼블릭 클라우드(Public Cloud)", "온프레미스(On-Premise)", "프라이빗 클라우드(Private Cloud)", "하이브리드 클라우드(Hybrid Cloud)"],
    ans: 1,
    exp: "온프레미스(On-Premise)는 기업이 자체적으로 물리적 서버 등의 IT 인프라를 보유하고 시스템을 직접 구축하여 운영하는 방식입니다."
  },
  {
    subj: 1,
    q: "데이터 거버넌스(Data Governance) 체계의 3대 핵심 구성 요소로 올바르게 짝지어진 것은?",
    choices: ["원칙, 조직, 프로세스", "데이터, 네트워크, 스토리지", "수집, 저장, 분석", "보안, 품질, 아키텍처"],
    ans: 0,
    exp: "데이터 거버넌스의 3대 구성 요소는 데이터를 유지 관리하기 위한 지침인 원칙(Principle), 관리를 담당하는 조직(Organization), 관리 활동 절차인 프로세스(Process)입니다."
  },
  {
    subj: 1,
    q: "데이터 비식별 조치 가이드라인에 따른 비식별 조치 절차 4단계를 순서대로 나열한 것은?",
    choices: ["사전검토 - 비식별 조치 - 적정성 평가 - 사후관리", "비식별 조치 - 사전검토 - 적정성 평가 - 사후관리", "사전검토 - 적정성 평가 - 비식별 조치 - 사후관리", "비식별 조치 - 적정성 평가 - 사전검토 - 사후관리"],
    ans: 0,
    exp: "개인정보 비식별 조치는 사전검토, 비식별 조치, 적정성 평가, 사후관리의 4단계 절차를 거쳐 안전하게 수행되어야 합니다."
  },
  {
    subj: 1,
    q: "데이터 분석을 위한 데이터 분할(Data Split) 과정에서, 모델의 매개변수(Hyperparameter)를 튜닝하고 과적합을 방지하기 위해 사용하는 데이터 세트는?",
    choices: ["훈련 데이터(Training Data)", "검증 데이터(Validation Data)", "테스트 데이터(Test Data)", "정답 데이터(Label Data)"],
    ans: 1,
    exp: "검증 데이터(Validation Data)는 훈련된 모델의 성능을 중간 평가하고 하이퍼파라미터를 미세 조정하여 과적합을 방지하는 목적으로 사용됩니다."
  },
  {
    subj: 1,
    q: "하둡 에코시스템 중 대용량 비정형 로그 데이터를 안정적으로 수집하기 위해 사용되는 분산형 로그 수집 기술은?",
    choices: ["Flume", "Sqoop", "Oozie", "Zookeeper"],
    ans: 0,
    exp: "Flume(플럼)은 다량의 로그 데이터를 효율적으로 수집, 집계, 이동시키기 위한 분산형 로그 수집 서비스입니다."
  },
  {
    subj: 1,
    q: "하둡 에코시스템 중 SQL과 유사한 쿼리 언어를 제공하여, 맵리듀스(MapReduce)를 깊이 알지 못해도 하둡 데이터를 쉽게 분석할 수 있게 해주는 인프라는?",
    choices: ["Pig", "Hive", "Mahout", "HBase"],
    ans: 1,
    exp: "Hive(하이브)는 하둡 기반의 데이터 웨어하우스 인프라로, HiveQL이라는 SQL 유사 언어를 통해 맵리듀스 작업을 쉽게 수행할 수 있도록 지원합니다."
  },
  {
    subj: 1,
    q: "SAS사가 주도한 데이터 마이닝 방법론으로, 샘플링부터 평가까지 5단계 절차를 갖는 것은?",
    choices: ["KDD", "CRISP-DM", "SEMMA", "빅데이터 분석 방법론"],
    ans: 2,
    exp: "SEMMA 방법론은 샘플링(Sample), 탐색(Explore), 수정(Modify), 모델링(Model), 평가(Assess)의 5단계로 구성된 데이터 마이닝 방법론입니다."
  },
  {
    subj: 1,
    q: "분석 프로젝트 관리를 위한 5대 주요 영역에 해당하지 않는 것은?",
    choices: ["데이터 규모(Data Size)", "분석 복잡도(Data Complexity)", "정확도와 정밀도(Accuracy & Precision)", "네트워크 속도(Network Speed)"],
    ans: 3,
    exp: "분석 프로젝트 관리의 5대 주요 영역은 데이터 규모, 데이터 복잡도, 속도(Speed), 분석 복잡도, 정확도와 정밀도입니다. 네트워크 속도는 IT 인프라 영역입니다."
  },
  {
    subj: 1,
    q: "투자 대비 효과(ROI) 관점에서 빅데이터의 성과를 평가할 때 고려해야 할 투자 비용(Investment) 요소에 해당하는 것은?",
    choices: ["데이터 볼륨(Volume) 및 다양성(Variety)", "가치(Value)", "비즈니스 효과", "핵심성과지표(KPI) 달성"],
    ans: 0,
    exp: "ROI 관점에서 Volume(규모), Variety(다양성), Velocity(속도)는 투자 비용(Investment) 요소이며, Value(가치)는 비즈니스 효과(Return) 요소입니다."
  },
  {
    subj: 1,
    q: "분석 성숙도 평가 모델 중, 조직 내 분석 전담 조직이 구성되고 분석 업무가 규칙적으로 수행되며 경영진이 이를 지원하는 단계는?",
    choices: ["도입 단계", "활용 단계", "확산 단계", "최적화 단계"],
    ans: 2,
    exp: "확산 단계에서는 전사 차원에서 분석을 관리하고 전담 조직이 운영되며 경영진의 적극적인 지원이 이루어집니다."
  },
  {
    subj: 1,
    q: "문제 탐색 단계에서 사용되는 프레임워크 중, 제품, 조직, 거시적 관점에서 비즈니스 모델을 분석하는 기법은?",
    choices: ["디자인 싱킹(Design Thinking)", "비즈니스 모델 캔버스(Business Model Canvas)", "SWOT 분석", "5 포스 모델(5 Forces Model)"],
    ans: 1,
    exp: "비즈니스 모델 캔버스를 활용하여 업무, 제품, 고객, 규제와 감사, IT 인프라 관점에서 분석 기회를 탐색할 수 있습니다."
  },
  {
    subj: 1,
    q: "분석 마스터플랜 수립 시 우선순위 평가 기준 중 '비즈니스 효과(Return)'에 해당하는 세부 평가 항목은?",
    choices: ["데이터 획득 비용", "데이터 가공 비용", "시스템 연동 난이도", "전략적 중요도"],
    ans: 3,
    exp: "비즈니스 효과는 전략적 중요도와 비즈니스 성과(KPI)로 평가합니다. 데이터 획득 및 가공 비용, 시스템 연동은 투자 비용(Investment)에 해당합니다."
  },
  {
    subj: 1,
    q: "빅데이터 거버넌스 중 데이터 품질 관리(DQM) 과정에서, 데이터가 누락 없이 얼마나 완벽하게 저장되어 있는지를 나타내는 지표는?",
    choices: ["정확성(Accuracy)", "유효성(Validity)", "완전성(Completeness)", "일관성(Consistency)"],
    ans: 2,
    exp: "완전성(Completeness)은 필수 항목에 데이터가 누락되지 않고 모두 입력되어 있는지를 의미하는 품질 지표입니다."
  },
  {
    subj: 1,
    q: "빅데이터 조직 구조 모델 중, 별도의 분석 전담 조직 없이 각 부서 내에서 자체적으로 분석 인력을 확보하여 업무를 수행하는 구조는?",
    choices: ["집중 구조", "하이브리드 구조", "분산 구조", "기능 구조"],
    ans: 3,
    exp: "기능 구조는 해당 업무 부서 내에서 직접 데이터 분석을 수행하므로, 전사적 핵심 분석이 어렵고 부서 간 업무 중복이 발생할 수 있습니다."
  },
  {
    subj: 1,
    q: "데이터 사이언티스트에게 필요한 역량 중 통계학, 선형대수학, 프로그래밍 기술 등을 포괄하는 역량은?",
    choices: ["하드 스킬(Hard Skill)", "소프트 스킬(Soft Skill)", "비즈니스 스킬(Business Skill)", "커뮤니케이션 스킬(Communication Skill)"],
    ans: 0,
    exp: "수학적 지식, 통계적 분석 역량, 프로그래밍 및 데이터 처리 기술 등은 분석가가 갖춰야 할 하드 스킬(Hard Skill)입니다."
  },
  {
    subj: 1,
    q: "정보의 상호작용 형태 중, 조직 내의 문서나 매뉴얼 등 형식화된 지식(형식지)들을 모아 새로운 형식지를 창출하는 과정은?",
    choices: ["공통화(Socialization)", "표출화(Externalization)", "연결화(Combination)", "내면화(Internalization)"],
    ans: 2,
    exp: "연결화(Combination)는 이미 존재하는 여러 형식지들을 조합하고 분석하여 새로운 형태의 형식지로 가공하는 과정입니다."
  },
  {
    subj: 1,
    q: "DIKW 피라미드에서 'A마트의 기저귀 매출이 높은 지역에 아동복 매장을 추가로 열어야 한다'는 판단에 해당하는 단계는?",
    choices: ["데이터(Data)", "정보(Information)", "지식(Knowledge)", "지혜(Wisdom)"],
    ans: 3,
    exp: "지혜(Wisdom)는 지식(Knowledge)을 기반으로 한 창의적인 아이디어 도출 및 전략적 판단과 예측을 수행하는 최상위 단계입니다."
  },
  {
    subj: 1,
    q: "KDD 분석 방법론 중, 분석 목적에 맞는 변수를 찾고 차원을 축소하여 데이터를 효율적으로 구성하는 단계는?",
    choices: ["전처리(Preprocessing)", "데이터 선택(Selection)", "마이닝(Data Mining)", "변환(Transformation)"],
    ans: 3,
    exp: "변환(Transformation) 단계에서는 분석 목적에 맞게 데이터를 변경하거나 차원을 축소하여 학습에 용이한 형태로 데이터를 가공합니다."
  },
  {
    subj: 1,
    q: "CRISP-DM 분석 방법론 중, 비즈니스 목적을 파악하고 이를 데이터 분석 문제로 변환하여 프로젝트 계획을 수립하는 단계는?",
    choices: ["업무 이해(Business Understanding)", "데이터 이해(Data Understanding)", "데이터 준비(Data Preparation)", "모델링(Modeling)"],
    ans: 0,
    exp: "업무 이해(Business Understanding)는 프로젝트의 목적과 요구사항을 명확히 하고, 이를 달성하기 위한 초기 프로젝트 계획을 수립하는 첫 단계입니다."
  },
  {
    subj: 1,
    q: "CRISP-DM 분석 방법론에서 전체 프로젝트 시간의 50~80%가 소요되며, 정제되지 않은 데이터로부터 분석용 데이터 세트를 구성하는 단계는?",
    choices: ["업무 이해(Business Understanding)", "데이터 이해(Data Understanding)", "데이터 준비(Data Preparation)", "평가(Evaluation)"],
    ans: 2,
    exp: "데이터 준비(Data Preparation) 단계는 원시 데이터를 수집, 정제, 통합, 포맷팅하여 최종 분석에 사용할 데이터를 준비하는 과정으로 가장 많은 시간이 소요됩니다."
  },
  {
    subj: 1,
    q: "하둡 아키텍처에서 맵리듀스 작업의 리소스 관리와 스케줄링을 담당하는 클러스터 관리 기술은?",
    choices: ["HDFS", "YARN", "Zookeeper", "HBase"],
    ans: 1,
    exp: "YARN(Yet Another Resource Negotiator)은 하둡 2.0부터 도입된 자원 관리 및 작업 스케줄링 프레임워크입니다."
  },
  {
    subj: 1,
    q: "분산 데이터베이스 환경이 가져야 할 3가지 속성인 CAP 정리에 해당하지 않는 것은?",
    choices: ["일관성(Consistency)", "가용성(Availability)", "분할 내성(Partition Tolerance)", "성능(Performance)"],
    ans: 3,
    exp: "CAP 정리는 분산 시스템이 일관성(Consistency), 가용성(Availability), 분할 내성(Partition Tolerance)의 3가지 중 2가지만을 완벽히 만족할 수 있다는 정리입니다."
  },
  {
    subj: 1,
    q: "NoSQL 데이터베이스 중 소셜 네트워크의 친구 관계, 추천 시스템 등에 적합하도록 노드와 엣지 구조로 데이터를 저장하는 유형은?",
    choices: ["문서 데이터베이스(Document DB)", "키-값 데이터베이스(Key-Value DB)", "그래프 데이터베이스(Graph DB)", "열 데이터베이스(Column DB)"],
    ans: 2,
    exp: "그래프 데이터베이스(Graph DB)는 데이터 간의 관계를 노드(Node)와 엣지(Edge)로 표현하여 복잡한 네트워크 구조를 분석하는 데 특화되어 있습니다."
  },
  {
    subj: 1,
    q: "개인정보 비식별 조치 중 특정 정보를 해당 정보가 포함된 상위 범주의 정보로 묶어서 식별성을 낮추는 기법은?",
    choices: ["데이터 마스킹(Data Masking)", "가명처리(Pseudonymization)", "데이터 범주화(Data Categorization)", "총계처리(Aggregation)"],
    ans: 2,
    exp: "데이터 범주화(Data Categorization)는 '35세'를 '30~40세'로, '서울시 서초구'를 '서울특별시'로 변경하는 등 데이터를 넓은 범주로 묶는 기법입니다."
  },
  {
    subj: 1,
    q: "인공지능 시스템이 학습 데이터에 내재된 편견을 그대로 학습하여 인종, 성별 등에 대해 불공정한 결과를 도출하는 윤리적 문제는?",
    choices: ["알고리즘 편향성(Algorithmic Bias)", "데이터 무결성(Data Integrity)", "블랙박스 문제(Black Box Problem)", "저작권 침해(Copyright Infringement)"],
    ans: 0,
    exp: "알고리즘 편향성(Algorithmic Bias)은 AI가 과거의 차별적이거나 편향된 데이터로 학습되어 결과적으로 불공정한 판단을 내리는 현상을 말합니다."
  },
  {
    subj: 1,
    q: "웹상에 존재하는 문서, 이미지 등의 정형 및 비정형 데이터를 자동으로 수집하는 기술은?",
    choices: ["스쿱(Sqoop)", "플럼(Flume)", "웹 크롤링(Web Crawling)", "센서 로그(Sensor Log)"],
    ans: 2,
    exp: "웹 크롤링(Web Crawling) 또는 웹 스크래핑(Web Scraping)은 자동화된 봇을 이용하여 웹사이트의 데이터를 수집하는 기법입니다."
  },
  {
    subj: 1,
    q: "웹 크롤링을 수행할 때 해당 웹사이트가 로봇의 접근을 허용하는지, 수집해도 되는 데이터 범위는 어디까지인지를 확인하기 위해 참조해야 하는 파일은?",
    choices: ["index.html", "robots.txt", "sitemap.xml", "config.json"],
    ans: 1,
    exp: "robots.txt는 웹사이트 관리자가 크롤러(로봇)의 접근을 제어하기 위해 서버의 최상위 디렉토리에 작성해 두는 텍스트 파일입니다."
  },
  {
    subj: 1,
    q: "빅데이터 플랫폼 데이터 저장소 중, 원시 형태의 다양한 데이터를 포맷 변경 없이 그대로 대규모로 저장해 두는 중앙 집중식 저장소는?",
    choices: ["데이터 웨어하우스(Data Warehouse)", "데이터 마트(Data Mart)", "데이터 레이크(Data Lake)", "관계형 데이터베이스(RDBMS)"],
    ans: 2,
    exp: "데이터 레이크(Data Lake)는 구조화, 반구조화, 비구조화 데이터를 원본 그대로 한 곳에 모아두는 대규모 저장 공간입니다."
  },
  {
    subj: 1,
    q: "데이터 웨어하우스(Data Warehouse)의 데이터를 특정 부서나 사용자의 목적에 맞게 재구성하여 제공하는 소규모 데이터 저장소는?",
    choices: ["데이터 레이크(Data Lake)", "데이터 마트(Data Mart)", "데이터 스토리지(Data Storage)", "데이터 파이프라인(Data Pipeline)"],
    ans: 1,
    exp: "데이터 마트(Data Mart)는 데이터 웨어하우스의 일부 데이터를 추출하여 특정 부서(예: 마케팅부, 재무부)의 분석 목적에 맞게 구축한 소규모 데이터 저장소입니다."
  },
  {
    subj: 1,
    q: "비즈니스 모델 탐색 관점 중, 시장의 환경 변화, 법규 변경, 보안 정책 등을 고려하여 새로운 분석 과제를 도출하는 영역은?",
    choices: ["업무(Operation)", "제품(Product)", "규제와 감사(Regulation & Audit)", "고객(Customer)"],
    ans: 2,
    exp: "규제와 감사 영역은 새로운 법령 제정이나 보안 요구사항 변화 등으로 인해 발생하는 분석 기회를 탐색하는 관점입니다."
  },
  {
    subj: 1,
    q: "분석 과제의 적용 범위(Scope) 및 방식에 대한 고려 요소로 거리가 먼 것은?",
    choices: ["업무 내재화 적용 수준", "분석 데이터 적용 수준", "기술 적용 수준", "예산 확보 방안"],
    ans: 3,
    exp: "적용 범위 및 방식은 업무 내재화 수준, 분석 데이터 적용 수준, 기술 적용 수준을 고려하여 결정합니다. 예산 확보 방안은 실행 용이성 측면의 검토 요소입니다."
  },
  {
    subj: 1,
    q: "빅데이터 활용 모델 중 고객의 구매 이력 등 대규모 거래 데이터를 분석하여 상품 간의 동시 구매 규칙을 찾아내는 기법은?",
    choices: ["분류 분석(Classification)", "군집 분석(Clustering)", "연관규칙 학습(Association Rule Learning)", "회귀 분석(Regression)"],
    ans: 2,
    exp: "연관규칙 학습(장바구니 분석)은 '기저귀를 사는 고객은 맥주도 같이 산다'와 같이 항목 간의 연관성을 찾아내는 분석 기법입니다."
  },
  {
    subj: 1,
    q: "정형 데이터와 비정형 데이터에 대한 설명으로 올바르지 않은 것은?",
    choices: ["정형 데이터는 RDBMS에 주로 저장된다.", "비정형 데이터는 고정된 스키마가 없다.", "반정형 데이터에는 메타데이터가 포함된다.", "비정형 데이터는 수집과 저장이 매우 용이하고 분석이 단순하다."],
    ans: 3,
    exp: "비정형 데이터(이미지, 음성, 텍스트 등)는 구조화되어 있지 않아 정형 데이터에 비해 수집, 저장, 그리고 분석 과정이 훨씬 복잡하고 어렵습니다."
  },
  {
    subj: 1,
    q: "데이터베이스 내의 데이터를 구성하는 기본적인 3가지 요소 체계로 올바르게 짝지어진 것은?",
    choices: ["개체, 속성, 관계", "테이블, 행, 열", "키, 인덱스, 뷰", "데이터, 정보, 지식"],
    ans: 0,
    exp: "데이터베이스 모델링에서 데이터는 개체(Entity), 속성(Attribute), 관계(Relationship)의 세 가지 요소로 구성됩니다."
  },
  {
    subj: 1,
    q: "소프트웨어 생명주기(SDLC) 모델 중 각 단계가 한 번 완료되면 다시 이전 단계로 돌아가기 어려운 가장 전통적인 모델은?",
    choices: ["폭포수 모델(Waterfall Model)", "애자일 모델(Agile Model)", "나선형 모델(Spiral Model)", "프로토타입 모델(Prototyping Model)"],
    ans: 0,
    exp: "폭포수 모델(Waterfall Model)은 폭포에서 물이 떨어지듯 요구사항 분석부터 설계, 구현, 테스트, 유지보수까지 순차적으로 진행되는 모델입니다."
  },
  {
    subj: 1,
    q: "프라이버시 보호 모델 중 데이터 집합 내 특정 쿼리에 대한 결과에 수학적인 노이즈를 추가하여, 개별 데이터의 포함 여부를 추론할 수 없게 만드는 가장 강력한 모델은?",
    choices: ["k-익명성", "l-다양성", "t-근접성", "차등정보보호(Differential Privacy)"],
    ans: 3,
    exp: "차등정보보호(Differential Privacy)는 데이터에 일정량의 무작위 노이즈를 주입하여 특정 개인의 정보 유무가 통계 결과에 영향을 주지 않도록 하는 고도화된 보호 모델입니다."
  },
  { 
    subj: 2, 
    q: "데이터의 척도(Scale) 중 절대적인 기준인 0이 존재하고 사칙연산이 모두 가능한 척도는 무엇인가?", 
    choices: ["순서척도(Ordinal Scale)", "등간척도(Interval Scale)", "명목척도(Nominal Scale)", "비율척도(Ratio Scale)"], 
    ans: 3, 
    exp: "비율척도는 절대 0점 존재+사칙연산 모두 가능합니다. 등간척도는 구간 간격은 일정하지만 절대 0 없음(온도 등), 순서척도는 순위 가능하지만 간격 불균등(등수 등), 명목척도는 이름만 다름(성별, 혈액형 등)입니다. ☞ 암기 팁: 비율척도=절대0+사칙연산 / 등간척도=구간균등+절대0없음 (온도가 0도라도 '아무것도 없는 것'이 아님!)" 
  },
  { 
    subj: 2, 
    q: "결측값(Missing Value)의 종류 중, 특정 정치 성향 유권자들의 응답률이 낮은 것처럼 특정 변수와 관련되어 발생하였지만 분석하고자 하는 결과와는 관계가 없는 경우는?", 
    choices: ["완전 무작위 결측(MCAR)", "무작위 결측(MAR)", "비 무작위 결측(MNAR)", "구조적 결측(Structural Missing)"], 
    ans: 1, 
    exp: "MAR(무작위 결측): 결측이 다른 관측 변수와 관련되지만 결과 변수와는 무관합니다. MCAR은 결측이 완전히 무작위(어떤 변수와도 무관), MNAR은 결측이 결측값 자체나 결과 변수와 직접 관련됩니다. 구조적 결측은 논리적으로 존재할 수 없는 값(예: 미혼자의 배우자 나이)입니다. ☞ 암기 팁: MCAR=완전무작위, MAR=다른변수와관련(결과무관), MNAR=결과와직접관련" 
  },
  { 
    subj: 2, 
    q: "이상값(Outlier) 판단 기법 중, 평균으로부터 표준편차의 3배를 넘어가는 데이터를 이상값으로 판단하는 기법은?", 
    choices: ["사분위수(IQR)", "ESD(Extreme Studentized Deviation)", "DBScan", "Z-Score"], 
    ans: 1, 
    exp: "ESD는 평균±3σ 기준의 이상값 판별법입니다. Z-Score도 표준화 후 임계값 초과를 이상값으로 보지만, ESD는 특히 정규분포 가정 하에 그룹 내 극단값을 반복 검정하는 방법입니다. IQR은 Q1-1.5IQR ~ Q3+1.5IQR 기준, DBScan은 밀도 기반입니다. ☞ 암기 팁: ESD=평균±3σ(정규분포 가정) / IQR=Q1-1.5IQR~Q3+1.5IQR / DBScan=밀도 기반" 
  },
  { 
    subj: 2, 
    q: "분석 변수 선택(Feature Selection) 방법 중, 모델의 성능을 기준으로 변수를 선택하며 전진 선택법(Forward Selection)과 후진 제거법(Backward Elimination)을 포함하는 방법은?", 
    choices: ["임베디드 방법(Embedded Method)", "차원 축소(Dimensionality Reduction)", "필터 방법(Filter Method)", "래퍼 방법(Wrapper Method)"], 
    ans: 3, 
    exp: "래퍼 방법은 모델 성능을 직접 평가 기준으로 변수 선택(전진선택법·후진제거법·단계적선택법). 필터 방법은 상관계수·카이제곱 등 통계량으로 모델과 독립적으로 변수 선택, 임베디드 방법은 Lasso처럼 모델 학습 내에서 변수 선택이 동시 수행됩니다. ☞ 암기 팁: 래퍼=모델성능기준(전진/후진), 필터=통계량기준, 임베디드=Lasso 등 학습 중 선택" 
  },
  { 
    subj: 2, 
    q: "선형 차원 축소 기법 중, 분류 문제에서 클래스 간 분산을 최대화하면서 차원을 축소하는 기법은?", 
    choices: ["주성분 분석(PCA)", "요인 분석(Factor Analysis)", "특이값 분해(SVD)", "선형 판별 분석(LDA)"], 
    ans: 3, 
    exp: "LDA는 클래스 간 분산/클래스 내 분산 비율을 최대화하는 방향으로 차원 축소 → 분류에 최적화. PCA는 분산 최대화(클래스 무관), 요인 분석은 잠재요인 추출, SVD는 행렬 분해 기법입니다. ☞ 암기 팁: LDA=클래스 간 분산↑ 클래스 내 분산↓(분류 목적) / PCA=전체 분산 최대화(비지도)" 
  },
  { 
    subj: 2, 
    q: "비선형 차원 축소 기법 중, 고차원 데이터 간의 거리 정보를 확률적으로 유지하여 차원을 축소하며 주로 복잡한 데이터의 시각화에 많이 쓰이는 기법은?", 
    choices: ["MDS(Multi-Dimensional Scaling)", "t-SNE(t-Distributed Stochastic Neighbor Embedding)", "UMAP(Uniform Manifold Approximation)", "오토인코더(AutoEncoder)"], 
    ans: 1, 
    exp: "t-SNE는 확률 분포로 이웃 관계를 보존하며 2D·3D로 시각화하는 비선형 기법입니다. MDS는 거리 보존(Stress 최소화), UMAP은 t-SNE보다 빠르며 전역 구조도 보존, 오토인코더는 신경망 기반 비선형 차원 축소입니다. ☞ 암기 팁: t-SNE=확률적 이웃 보존+시각화 / UMAP=t-SNE보다 빠르고 전역구조도 보존" 
  },
  { 
    subj: 2, 
    q: "수치형 변수 변환 방법 중, 데이터의 평균을 0으로, 표준편차를 1로 변환하는 기법은?", 
    choices: ["정규화(Min-Max Scaling)", "표준화(Standardization/Z-Score)", "Box-Cox 변환(Box-Cox Transformation)", "로그 변환(Log Transformation)"], 
    ans: 1, 
    exp: "표준화(Z-Score)는 (X-μ)/σ로 평균=0, 표준편차=1로 변환합니다. 정규화(Min-Max)는 (X-min)/(max-min)으로 0~1 범위로 변환, Box-Cox는 비대칭 분포를 정규분포로 변환, 로그 변환은 양수 비대칭 분포에 사용합니다. ☞ 암기 팁: 표준화=평균0·표준편차1(Z-Score) / 정규화=0~1 범위(Min-Max)" 
  },
  { 
    subj: 2, 
    q: "불균형 데이터 처리(Imbalanced Data Handling) 기법 중, 소수 클래스의 데이터를 복사하거나 SMOTE 알고리즘 등으로 유사한 데이터를 새롭게 생성하여 비율을 맞추는 방법은?", 
    choices: ["가중치 균형(Weighted Balance)", "과소표집(UnderSampling)", "과대표집(OverSampling)", "앙상블 기법(Ensemble Method)"], 
    ans: 2, 
    exp: "과대표집은 소수 클래스를 늘리는 방법으로 SMOTE(합성 데이터 생성)가 대표적입니다. 과소표집은 다수 클래스를 줄이는 방법, 가중치 균형은 손실 함수에서 소수 클래스에 더 높은 가중치 부여, 앙상블은 여러 모델 결합 방식입니다. ☞ 암기 팁: 과대표집(OverSampling)=소수 클래스 늘리기(SMOTE) / 과소표집=다수 줄이기" 
  },
  { 
    subj: 2, 
    q: "범주형 변수 변환(Categorical Variable Transformation) 기법 중, 고유 값에 해당하는 컬럼만 1로 표시하고 나머지는 0으로 표시하는 방법은?", 
    choices: ["레이블 인코딩(Label Encoding)", "원-핫 인코딩(One-Hot Encoding)", "타깃 인코딩(Target Encoding)", "이진 인코딩(Binary Encoding)"], 
    ans: 1, 
    exp: "원-핫 인코딩은 범주마다 별도 열을 만들어 해당 범주만 1, 나머지 0으로 표현합니다. 레이블 인코딩은 범주에 정수 번호 부여(순서 정보 생성), 타깃 인코딩은 범주별 타깃 변수 평균값으로 변환, 이진 인코딩은 레이블→이진수 변환입니다. ☞ 암기 팁: 원-핫=범주당 열 생성(해당만 1) / 레이블=정수 번호 부여(순서 정보 발생 위험)" 
  },
  { 
    subj: 2, 
    q: "탐색적 자료 분석(EDA, Exploratory Data Analysis)의 4가지 주요 주제에 해당하지 않는 것은?", 
    choices: ["저항성의 강조(Resistance)", "잔차 계산(Residuals)", "자료변수의 재표현(Re-expression)", "교호작용의 반영(Interaction)"], 
    ans: 3, 
    exp: "EDA의 4가지 주제: ①저항성 강조(Resistance), ②잔차 계산(Residuals), ③자료 재표현(Re-expression), ④현시성(시각화, Revelation)입니다. 교호작용(Interaction)은 파생변수 생성 방법의 하나로 EDA 4주제가 아닙니다. ☞ 암기 팁: EDA 4주제=저(Resistance)·잔(Residuals)·재(Re-expression)·현(Revelation) — 교호작용은 파생변수!" 
  },
  { 
    subj: 2, 
    q: "상관관계 분석(Correlation Analysis)에서 양적 척도이며 연속형 변수일 때 선형 관계의 크기를 측정하기 위해 주로 사용하는 상관계수는?", 
    choices: ["피어슨 상관계수(Pearson Correlation Coefficient)", "스피어만 상관계수(Spearman Correlation Coefficient)", "켄달 타우(Kendall Tau)", "점이연 상관계수(Point-Biserial Correlation)"], 
    ans: 0, 
    exp: "피어슨 상관계수는 연속형 변수 간 선형 관계 측정에 사용합니다. 스피어만은 서열 척도 또는 비선형 관계, 켄달 타우는 순위 기반 비모수 상관, 점이연은 연속형과 이분형 변수 간 상관 측정에 사용됩니다. ☞ 암기 팁: 피어슨=연속형+선형 / 스피어만=서열형·비선형 / 켄달타우=순위기반" 
  },
  { 
    subj: 2, 
    q: "기초 통계량 중 데이터의 분산 정도 측면을 나타내는 지표로, 측정 단위가 다르거나 평균 차이가 큰 두 변수 간의 산포도를 상대적으로 비교할 때 유용한 지표는?", 
    choices: ["분산(Variance)", "범위(Range)", "표준편차(Standard Deviation)", "변동계수(Coefficient of Variation)"], 
    ans: 3, 
    exp: "변동계수(CV) = 표준편차/평균 × 100(%)로 단위에 무관한 상대적 산포 비교에 유용합니다. 분산·표준편차는 단위에 영향 받아 단위가 다른 변수 간 비교 불가, 범위는 최대-최소로 이상값에 취약합니다. ☞ 암기 팁: 변동계수(CV)=표준편차/평균×100 → 단위 무관, 상대적 산포 비교" 
  },
  { 
    subj: 2, 
    q: "두 변수 간에 상관관계가 전혀 없는 상태를 의미하는 공분산(Covariance)의 값은?", 
    choices: ["-1", "0", "1", "무한대"], 
    ans: 1, 
    exp: "공분산(Covariance)이 0이라는 것은 두 변수 간에 상관관계가 없음을 의미합니다. 단, 공분산이 0이라고 해서 두 변수가 무조건 독립인 것은 아닙니다." 
  },
  { 
    subj: 2, 
    q: "확률변수의 비대칭 정도를 나타내는 통계량으로, 값이 0보다 크면 오른쪽으로 꼬리가 길어지고 최빈값보다 평균값이 더 크게 나타나는 지표는?", 
    choices: ["첨도(Kurtosis)", "왜도(Skewness)", "분산(Variance)", "사분위수 범위(IQR)"], 
    ans: 1, 
    exp: "왜도(Skewness): 양수=오른쪽 꼬리(최빈값<중앙값<평균), 음수=왼쪽 꼬리(평균<중앙값<최빈값). 첨도(Kurtosis)는 분포의 뾰족함 정도(정규분포 기준=3), 분산은 평균으로부터의 편차 제곱합, IQR은 Q3-Q1 범위입니다. ☞ 암기 팁: 왜도 양수=오른쪽꼬리(평균>최빈값), 왜도 음수=왼쪽꼬리(평균<최빈값)" 
  },
  { 
    subj: 2, 
    q: "비정형 데이터 분석을 위한 자연어 전처리(Natural Language Preprocessing) 단계 중, 의미가 있는 최소 단위의 말뭉치로 문자를 나누는 작업은?", 
    choices: ["토큰화(Tokenization)", "어간 추출(Stemming)", "불용어 처리(Stop Words Removal)", "표제어 추출(Lemmatization)"], 
    ans: 0, 
    exp: "토큰화는 텍스트를 의미 단위(단어, 형태소, 문장 등)로 분리하는 첫 전처리 단계입니다. 어간 추출은 접사 제거→어근, 표제어 추출은 사전 기반 원형 복원, 불용어 처리는 의미 없는 단어(은·는·이·가 등) 제거입니다. ☞ 암기 팁: 토큰화→불용어제거→어간추출/표제어추출 (전처리 순서)" 
  },
  { 
    subj: 2, 
    q: "확률적 표본 추출 방법 중, 모집단을 서로 동질적인 여러 개의 군집으로 나눈 뒤 특정 군집을 무작위로 선택하여 그 안의 요소를 추출하는 방법은?", 
    choices: ["단순 랜덤 추출법(Simple Random Sampling)", "계통 추출법(Systematic Sampling)", "층화 추출법(Stratified Sampling)", "집락 추출법(Cluster Sampling)"], 
    ans: 3, 
    exp: "집락 추출법(Cluster Sampling)은 모집단을 군집(Cluster) 단위로 나눈 뒤 무작위로 군집을 통째로 추출하는 방식입니다. 반면 층화 추출법(Stratified Sampling)은 각 계층에서 고르게 표본을 뽑는 방식입니다." 
  },
  { 
    subj: 2, 
    q: "N번의 베르누이 시행(Bernoulli Trial) 중 K번 성공할 확률의 분포를 나타내는 이산 확률분포는?", 
    choices: ["베르누이 분포(Bernoulli Distribution)", "이항 분포(Binomial Distribution)", "포아송 분포(Poisson Distribution)", "기하 분포(Geometric Distribution)"], 
    ans: 1, 
    exp: "이항 분포(Binomial Distribution)는 결과가 성공 혹은 실패 두 가지로만 나오는 베르누이 시행을 N번 반복했을 때의 성공 횟수에 대한 확률분포입니다." 
  },
  { 
    subj: 2, 
    q: "점추정(Point Estimation)에서 추정량(Estimator)이 갖추어야 할 4가지 조건에 해당하지 않는 것은?", 
    choices: ["불편성(Unbiasedness)", "효율성(Efficiency)", "일치성(Consistency)", "다양성(Diversity)"], 
    ans: 3, 
    exp: "좋은 추정량의 4가지 조건은 편향이 없는 불편성, 분산이 작은 효율성, 표본 크기가 증가할수록 모수에 가까워지는 일치성, 그리고 모집단의 정보를 최대한 반영하는 충족성(Sufficiency)입니다." 
  },
  { 
    subj: 2, 
    q: "가설검정(Hypothesis Testing)에서 귀무가설(Null Hypothesis)이 실제로 참임에도 불구하고, 이를 잘못 기각하고 대립가설을 채택해버리는 오류는?", 
    choices: ["제1종 오류(Type 1 Error)", "검정력(Power)", "제2종 오류(Type 2 Error)", "유의수준(Significance Level)"], 
    ans: 0, 
    exp: "제1종 오류(α): 귀무가설이 참인데 기각하는 오류. 제2종 오류(β): 귀무가설이 거짓인데 채택하는 오류. 검정력(1-β)은 귀무가설이 거짓일 때 올바르게 기각하는 확률. 유의수준(α)은 제1종 오류의 최대 허용 확률입니다. ☞ 암기 팁: 1종 오류=참인데 기각(없는데 있다고), 2종 오류=거짓인데 채택(있는데 없다고)" 
  },
  { 
    subj: 2, 
    q: "결측값(Missing Value) 처리 방법 중, 결측값을 여러 번 대치하여 분산 과소 추정 문제를 해결할 수 있는 기법은?", 
    choices: ["완전 분석법(Complete Analysis)", "평균 대치법(Mean Imputation)", "단순 확률 대치법(Single Stochastic Imputation)", "다중 대치법(Multiple Imputation)"], 
    ans: 3, 
    exp: "다중 대치법은 결측값을 여러 번 대치하여 종합하는 방식으로, 단순 대치법에서 발생할 수 있는 분산 과소 추정 문제를 해결할 수 있습니다[cite: 599, 600, 601]." 
  },
  { 
    subj: 2, 
    q: "사분위수(Quartile)를 활용하여 이상값(Outlier)을 판별할 때, 정상 범주로 인정되는 하한선과 상한선을 올바르게 나타낸 것은?", 
    choices: ["하한: Q1 - 1.0IQR, 상한: Q3 + 1.0IQR", "하한: Q1 - 1.5IQR, 상한: Q3 + 1.5IQR", "하한: Q2 - 1.5IQR, 상한: Q2 + 1.5IQR", "하한: Q1 - 2.0IQR, 상한: Q3 + 2.0IQR"], 
    ans: 1, 
    exp: "사분위수를 이용한 이상값 판별 시, Q1 - 1.5IQR 보다 작거나 Q3 + 1.5IQR 보다 큰 값을 이상값으로 판단합니다[cite: 617]." 
  },
  { 
    subj: 2, 
    q: "변수 선택(Feature Selection) 방법 중, 모델 학습 과정 자체에 변수 선택 기능이 포함되어 있는 임베디드 방법(Embedded Method)에 해당하는 기법은?", 
    choices: ["카이제곱 검정(Chi-square Test)", "전진 선택법(Forward Selection)", "라쏘 규제(Lasso Regularization)", "주성분 분석(PCA)"], 
    ans: 2, 
    exp: "임베디드 방법은 모델 학습 과정에서 변수를 선택하며, 대표적인 기법으로 라쏘(Lasso) 규제와 릿지(Ridge) 규제가 있습니다[cite: 647, 648]." 
  },
  { 
    subj: 2, 
    q: "선형 차원 축소 기법 중, mXn 크기의 비정방행렬을 3개의 행렬(직교행렬, 대각행렬, 직교행렬)로 분해하여 차원을 축소하는 기법은?", 
    choices: ["주성분 분석(PCA)", "선형 판별 분석(LDA)", "독립 성분 분석(ICA)", "특이값 분해(SVD)"], 
    ans: 3, 
    exp: "특이값 분해(Singular Value Decomposition, SVD)는 mXn 크기의 비정방행렬을 U, Sigma, V^T 행렬로 분해하는 선형 차원 축소 기법입니다[cite: 663, 664, 665]." 
  },
  { 
    subj: 2, 
    q: "데이터 분석 과정에서 변수의 수가 지나치게 많아질 때, 모델 학습에 필요한 데이터의 양이 기하급수적으로 늘어나고 알고리즘의 성능이 저하되는 현상을 일컫는 용어는?", 
    choices: ["과적합(Overfitting)", "차원의 저주(Curse of Dimensionality)", "다중공선성(Multicollinearity)", "희소성 문제(Sparsity Problem)"], 
    ans: 1, 
    exp: "차원의 저주(Curse of Dimensionality)는 데이터 학습 시 차원(변수의 수)이 높아질수록 모델의 성능이 저하되고 공간이 희소해지는 현상을 의미합니다[cite: 654]." 
  },
  { 
    subj: 2, 
    q: "기존의 데이터를 바탕으로 분석가의 논리적 타당성에 의해 의미를 부여하여 새롭게 생성한 변수(예: 고객구매등급)를 무엇이라 하는가?", 
    choices: ["요약변수(Summary Variable)", "파생변수(Derived Variable)", "종속변수(Dependent Variable)", "통제변수(Control Variable)"], 
    ans: 1, 
    exp: "파생변수(Derived Variable)는 기존 데이터를 결합하거나 수학적 변환 등을 통해 분석 목적에 맞게 새로운 의미를 부여한 변수이며, 논리적 타당성이 필요합니다[cite: 685, 686]." 
  },
  { 
    subj: 2, 
    q: "수치형 변수 변환 기법 중, 데이터가 한쪽(좌측)으로 심하게 치우쳐 있는 비대칭 분포를 정규분포에 가깝게 만들고 분산을 안정화하기 위해 주로 사용하는 기법은?", 
    choices: ["정규화(Min-Max Scaling)", "표준화(Standardization)", "로그 변환(Log Transformation)", "레이블 인코딩(Label Encoding)"], 
    ans: 2, 
    exp: "로그 변환(Log Transformation)은 데이터가 한쪽으로 치우쳐 있을 때 값의 편차를 줄이고 정규성을 높이기 위해 활용되는 변환 기법입니다[cite: 694]." 
  },
  { 
    subj: 2, 
    q: "데이터 정제(Data Cleansing) 과정 중, 데이터에 포함된 노이즈(잡음)를 제거하여 데이터의 추세를 부드럽게 만드는 작업을 무엇이라 하는가?", 
    choices: ["일반화(Generalization)", "정규화(Normalization)", "집계(Aggregation)", "스무딩(Smoothing)"], 
    ans: 3, 
    exp: "스무딩(Smoothing, 평활화)은 데이터의 불규칙한 노이즈나 잡음을 제거하여 전반적인 추세나 패턴을 부드럽게 파악할 수 있도록 돕는 작업입니다[cite: 575]." 
  },
  { 
    subj: 2, 
    q: "두 변수가 서열 척도(순서형 변수)일 때 사용하며, 선형 관계뿐만 아니라 비선형적 관계의 크기까지 측정할 수 있는 상관계수는?", 
    choices: ["스피어만 상관계수(Spearman)", "피어슨 상관계수(Pearson)", "켄달 타우(Kendall)", "공분산(Covariance)"], 
    ans: 0, 
    exp: "스피어만 상관계수는 서열 척도로 측정된 변수 간의 순위(Rank)를 바탕으로 선형 및 비선형적 상관관계를 모두 나타낼 수 있는 지표입니다[cite: 745]." 
  },
  { 
    subj: 2, 
    q: "기초 통계량 중에서 여러 값들의 비율적 증가율이나 연평균 성장률 등을 계산할 때 가장 적합한 대푯값은?", 
    choices: ["산술평균(Arithmetic Mean)", "최빈값(Mode)", "조화평균(Harmonic Mean)", "기하평균(Geometric Mean)"], 
    ans: 3, 
    exp: "기하평균(Geometric Mean)은 모든 값들을 곱한 후 n 제곱근을 구하는 방식으로, 물가 상승률이나 인구 증가율 등 비율적 증가율을 평균 낼 때 주로 사용합니다[cite: 763]." 
  },
  { 
    subj: 2, 
    q: "두 확률변수의 상관 정도를 나타내는 공분산(Covariance)의 한계를 보완하기 위해, 측정 단위를 제거하여 -1부터 1 사이의 값으로 표준화한 지표는?", 
    choices: ["상관계수(Correlation Coefficient)", "변동계수(Coefficient of Variation)", "결정계수(R-Square)", "표준오차(Standard Error)"], 
    ans: 0, 
    exp: "상관계수(Correlation Coefficient)는 공분산을 각 변수의 표준편차로 나누어 단위의 영향을 제거한 값으로, -1에서 1 사이의 값을 가지며 관계의 방향과 강도를 모두 파악할 수 있습니다[cite: 779]." 
  },
  { 
    subj: 2, 
    q: "데이터 분포의 비대칭 정도를 나타내는 왜도(Skewness)의 값이 0보다 작을 때(음수일 때), 대푯값들의 크기를 올바르게 나열한 것은?", 
    choices: ["평균값 < 중앙값 < 최빈값", "최빈값 < 중앙값 < 평균값", "중앙값 < 평균값 < 최빈값", "평균값 = 중앙값 = 최빈값"], 
    ans: 0, 
    exp: "왜도가 0보다 작으면 분포의 꼬리가 왼쪽으로 길어지며, 이때 대푯값은 평균값 < 중앙값 < 최빈값 순서로 위치하게 됩니다[cite: 805]." 
  },
  { 
    subj: 2, 
    q: "자료의 분포가 얼마나 뾰족한지를 나타내는 척도인 첨도(Kurtosis)에 대한 설명으로 올바른 것은?", 
    choices: ["첨도가 0에 가까울수록 한쪽으로 심하게 치우친 분포이다.", "값이 클수록 분포가 평평해진다.", "정규 분포 형태일 때의 첨도 기준값은 일반적으로 3이다.", "첨도가 양수이면 꼬리가 짧고 평평한 분포를 의미한다."], 
    ans: 2, 
    exp: "첨도는 분포의 뾰족한 정도를 나타내며, 완벽한 정규 분포의 첨도 값은 3입니다. 계산에 따라 3을 빼서 0을 기준으로 정규분포를 판단하기도 합니다[cite: 797, 798, 799]." 
  },
  { 
    subj: 2, 
    q: "비정형 텍스트 데이터 전처리 과정 중, 단어의 접사를 제거하여 품사에 상관없이 문법적인 기본 형태를 찾아내는 작업은?", 
    choices: ["토큰화(Tokenization)", "불용어 처리(Stop Words)", "표제어 추출(Lemmatization)", "어간 추출(Stemming)"], 
    ans: 3, 
    exp: "어간 추출(Stemming)은 어형이 변형된 단어에서 접사를 제거하여 그 단어의 핵심 의미를 담고 있는 기본 형태(어간)를 찾아내는 작업입니다[cite: 844]." 
  },
  { 
    subj: 2, 
    q: "확률적 표본 추출 방법 중, 모집단의 전체 리스트에 번호를 부여한 후 사전에 정해진 일정한 간격마다 표본을 추출하는 방법은?", 
    choices: ["랜덤 추출법(Random Sampling)", "집락 추출법(Cluster Sampling)", "계통 추출법(Systematic Sampling)", "층화 추출법(Stratified Sampling)"], 
    ans: 2, 
    exp: "계통 추출법(Systematic Sampling)은 첫 번째 표본을 무작위로 선택한 후, k번째 일정한 간격(Systematic)으로 떨어져 있는 요소를 표본으로 추출하는 방식입니다[cite: 860]." 
  },
  { 
    subj: 2, 
    q: "성공 확률이 p인 베르누이 시행을 독립적으로 반복할 때, '처음으로 성공할 때까지' 시도한 시행 횟수에 대한 확률 분포는?", 
    choices: ["이항 분포(Binomial Distribution)", "음이항 분포(Negative Binomial Distribution)", "포아송 분포(Poisson Distribution)", "기하 분포(Geometric Distribution)"], 
    ans: 3, 
    exp: "기하 분포(Geometric Distribution)는 성공 확률이 고정된 베르누이 시행을 반복할 때, 첫 번째 성공이 나타날 때까지 필요한 시행 횟수를 나타내는 이산 확률분포입니다[cite: 894]." 
  },
  { 
    subj: 2, 
    q: "유한한 N개의 모집단에서 비복원 추출로 n번을 추출했을 때, 원하는 결과가 k번 나올 확률을 나타내는 이산 확률분포는?", 
    choices: ["다항 분포(Multinomial Distribution)", "베르누이 분포(Bernoulli Distribution)", "기하 분포(Geometric Distribution)", "초기하 분포(Hypergeometric Distribution)"], 
    ans: 3, 
    exp: "초기하 분포(Hypergeometric Distribution)는 복원 추출을 가정한 이항 분포와 달리, 비복원 추출 환경에서 특정 특성을 가진 표본이 몇 개 뽑힐지 예측하는 확률분포입니다[cite: 896]." 
  },
  { 
    subj: 2, 
    q: "연속 확률분포 중에서 표본의 크기가 30개 미만인 소표본이거나 모표준편차를 모를 때, 모집단의 평균을 검정하기 위해 정규분포 대신 주로 사용하는 분포는?", 
    choices: ["카이제곱 분포(Chi-square Distribution)", "F 분포(F Distribution)", "t 분포(t Distribution)", "지수 분포(Exponential Distribution)"], 
    ans: 2, 
    exp: "t 분포(t Distribution)는 정규분포와 형태가 유사하지만 꼬리 부분이 더 두껍고 긴 특징을 가지며, 주로 데이터 수가 적은 소표본 집단의 평균 검정에 사용됩니다[cite: 910, 911]." 
  },
  { 
    subj: 2, 
    q: "결측값 대치법 중 현재 데이터 셋에서 결측값이 있는 관측치와 가장 비슷한 성향을 가진 다른 관측치의 값으로 대체하는 방법은?", 
    choices: ["Hot-Deck 대치법", "Cold-Deck 대치법", "평균 대치법", "다중 대치법"], 
    ans: 0, 
    exp: "Hot-Deck은 현재 데이터 셋에서 비슷한 성향으로 대체하는 방법입니다. [cite: 23] 외부 출처를 이용하면 Cold-Deck입니다." 
  },
  { 
    subj: 2, 
    q: "차원 축소 기법 중 데이터 간 거리 정보의 근접성을 보존하며 Stress 함수 값이 최소가 되도록 차원을 축소하는 비선형 기법은?", 
    choices: ["주성분 분석(PCA)", "선형 판별 분석(LDA)", "다차원 척도법(MDS)", "t-SNE"], 
    ans: 2, 
    exp: "MDS(다차원 척도법)는 데이터 간 거리정보의 근접성을 보존하는 차원 축소로, Stress 함수 값이 최소가 되도록 구성합니다. [cite: 25]" 
  },
  { 
    subj: 2, 
    q: "변수 선택(Feature Selection) 방법 중 통계적 측정치인 상관계수, 카이제곱 검정, F-검정 등을 활용하여 모델 학습 전에 개별 변수의 유용성을 평가하고 선택하는 방법은?", 
    choices: ["필터 방법(Filter Method)", "래퍼 방법(Wrapper Method)", "임베디드 방법(Embedded Method)", "차원 축소(Dimensionality Reduction)"], 
    ans: 0, 
    exp: "필터(Filter) 방법은 상관계수, 카이제곱 검정, F-검정 등 통계적 측정치를 활용하여 변수를 선택합니다. [cite: 24]" 
  },
  { 
    subj: 2, 
    q: "데이터 이상값(Outlier) 처리 기법 중, 데이터의 밀도를 계산하여 밀도가 적은 부분에 위치한 데이터를 이상값으로 판단하는 기법은?", 
    choices: ["ESD", "Z-Score", "사분위수(IQR)", "DBScan"], 
    ans: 3, 
    exp: "DBScan은 밀도를 이용하여 밀도가 적은 부분의 데이터를 이상값으로 판단합니다. [cite: 23]" 
  },
  { 
    subj: 2, 
    q: "범주형 변수 변환 기법 중, 각 범주를 해당 범주에 속한 관측치들의 타깃 변수(종속 변수) 평균값으로 변환하는 기법은?", 
    choices: ["레이블 인코딩(Label Encoding)", "원-핫 인코딩(One-Hot Encoding)", "스무딩(Smoothing)", "타깃 인코딩(Target Encoding)"], 
    ans: 3, 
    exp: "타깃 인코딩은 타깃 변수를 평균값으로 변환하는 범주형 변수 변환 방식입니다. [cite: 26]" 
  },
  { 
    subj: 2, 
    q: "선형 차원 축소 기법 중 다변량 데이터에서 서로 통계적으로 독립적인 성분을 찾아내어 차원을 축소하는 기법은?", 
    choices: ["주성분 분석(PCA)", "독립 성분 분석(ICA)", "선형 판별 분석(LDA)", "특이값 분해(SVD)"], 
    ans: 1, 
    exp: "ICA(독립 성분 분석)는 서로 독립적인 성분을 찾아 차원을 축소하는 선형 기법입니다. [cite: 24]" 
  },
  { 
    subj: 2, 
    q: "데이터 정제 과정 중, 수치형 데이터를 정해진 구간(예: 0에서 1 사이)으로 조정하여 변수 간의 상대적 크기 차이를 제거하는 작업은?", 
    choices: ["일반화(Generalization)", "정규화(Normalization)", "평활화(Smoothing)", "집계(Aggregation)"], 
    ans: 1, 
    exp: "정규화는 데이터를 정해진 구간으로 조정하여 상대적 차이를 제거하는 작업입니다. [cite: 22]" 
  },
  { 
    subj: 2, 
    q: "데이터의 분산 정도를 나타내는 기초 통계량 중, 데이터를 크기순으로 나열했을 때 하위 25% 지점과 상위 75% 지점 사이의 거리를 의미하는 지표는?", 
    choices: ["범위(Range)", "분산(Variance)", "표준편차(Standard Deviation)", "사분위수 범위(IQR)"], 
    ans: 3, 
    exp: "사분위수(IQR)는 데이터의 25% 지점과 75% 지점 사이의 범위를 의미합니다. [cite: 28]" 
  },
  { 
    subj: 2, 
    q: "확률변수 X와 Y가 서로 독립이고 V(X)=4, V(Y)=1일 때, 새로운 확률변수 Z = 5X - 7Y + 15의 분산 V(Z)의 값은?", 
    choices: ["13", "27", "149", "164"], 
    ans: 2, 
    exp: "V(5X - 7Y + 15) = 25*V(X) + 49*V(Y) = 25*4 + 49*1 = 149로 계산됩니다. 상수의 분산은 0으로 취급합니다. [cite: 28]" 
  },
  { 
    subj: 2, 
    q: "특정 사건 B가 이미 발생했다는 조건 하에서 또 다른 사건 A가 발생할 확률을 의미하며, P(A|B)로 표기하는 통계적 용어는?", 
    choices: ["결합 확률(Joint Probability)", "조건부 확률(Conditional Probability)", "주변 확률(Marginal Probability)", "사전 확률(Prior Probability)"], 
    ans: 1, 
    exp: "조건부 확률은 특정 사건 B가 발생했을 때 A가 발생할 확률을 뜻합니다. [cite: 31]" 
  },
  { 
    subj: 2, 
    q: "두 사건 A와 B가 서로 동시에 일어날 수 없는 경우, 즉 A와 B의 교집합이 공집합인 사건을 일컫는 용어는?", 
    choices: ["독립 사건(Independent Events)", "종속 사건(Dependent Events)", "배반 사건(Mutually Exclusive Events)", "여사건(Complementary Events)"], 
    ans: 2, 
    exp: "배반사건은 A, B가 서로 동시에 일어나지 않는 사건을 의미합니다. [cite: 31]" 
  },
  { 
    subj: 2, 
    q: "연속 확률분포 중 독립적인 표준정규분포를 따르는 확률변수들의 제곱합으로 구성되며, 두 집단의 동질성 검정이나 단일 집단 모분산 검정에 널리 사용되는 분포는?", 
    choices: ["t 분포", "지수 분포", "F 분포", "카이제곱 분포"], 
    ans: 3, 
    exp: "카이제곱분포는 독립적인 정규분포를 따르는 변수들의 제곱합으로 구성되며 두 집단의 동질성 검정, 단일 집단 모분산 검정에 활용됩니다. [cite: 32]" 
  },
  { 
    subj: 2, 
    q: "두 개의 서로 다른 카이제곱 분포의 비율로 정의되며, 세 개 이상 집단의 평균 차이를 비교하는 분산분석(ANOVA)이나 두 집단의 분산 동질성 검정에 사용되는 분포는?", 
    choices: ["정규 분포(Normal Distribution)", "t 분포(t Distribution)", "카이제곱 분포(Chi-square Distribution)", "F 분포(F Distribution)"], 
    ans: 3, 
    exp: "F분포는 두 개의 서로 다른 카이제곱 분포의 비율이며, 분산 동질성 검정이나 ANOVA 검정에 활용됩니다. [cite: 32]" 
  },
  { 
    subj: 2, 
    q: "연속 확률분포 중에서 사건이 발생할 때까지의 대기 시간이나 부품의 수명 등 사건 간의 시간 간격을 모델링할 때 주로 사용되는 분포는?", 
    choices: ["지수 분포(Exponential Distribution)", "감마 분포(Gamma Distribution)", "베타 분포(Beta Distribution)", "균일 분포(Uniform Distribution)"], 
    ans: 0, 
    exp: "지수분포는 사건 간 시간 간격 분포를 모델링할 때 사용하는 연속 확률분포입니다. [cite: 32]" 
  },
  { 
    subj: 2, 
    q: "가설검정 시 귀무가설(Null Hypothesis)이 실제로 거짓임에도 불구하고, 이를 올바르게 기각하지 못하고 귀무가설을 채택해버리는 오류를 무엇이라 하는가?", 
    choices: ["제1종 오류(Type 1 Error)", "제2종 오류(Type 2 Error)", "유의수준(Significance Level)", "신뢰수준(Confidence Level)"], 
    ans: 1, 
    exp: "2종 오류는 귀무가설이 거짓임에도 불구하고 귀무가설이 사실이라고 잘못 판정하는 오류입니다. [cite: 35]" 
  },
  { 
    subj: 2, 
    q: "가설검정의 검증 방향을 결정할 때, 대립가설(Alternative Hypothesis)이 '크다' 혹은 '작다'와 같이 특정 방향성을 가지고 있을 때 수행하는 검정 방식은?", 
    choices: ["단측검정(One-tailed Test)", "양측검정(Two-tailed Test)", "비모수 검정(Non-parametric Test)", "모수 검정(Parametric Test)"], 
    ans: 0, 
    exp: "단측검정은 대립가설이 방향성(>또는<)을 가질 때 사용하며 기각역이 한쪽에만 위치합니다. 양측검정은 대립가설이 '다르다(≠)'일 때 기각역이 양쪽에 나뉩니다. 비모수 검정은 분포 가정 없을 때, 모수 검정은 정규분포 등 분포 가정 있을 때 사용합니다. ☞ 암기 팁: 단측검정=방향 있음(>또는<) / 양측검정=방향 없음(≠)" 
  },
  { 
    subj: 2, 
    q: "온도, 지수 등과 같이 구간 사이의 간격이 의미를 가지며 덧셈과 뺄셈 연산만 가능한 데이터의 척도는?", 
    choices: ["명목척도(Nominal Scale)", "순서척도(Ordinal Scale)", "등간척도(Interval Scale)", "비율척도(Ratio Scale)"], 
    ans: 2, 
    exp: "등간척도(Interval Scale)는 구간 사이의 간격이 일정하여 덧셈과 뺄셈이 가능하지만, 절대적인 0이 존재하지 않아 곱셈이나 나눗셈은 불가능한 척도입니다." 
  },
  { 
    subj: 2, 
    q: "여러 시점에 걸쳐 측정된 시계열 데이터의 특성과 한 시점에 측정된 횡단면적 데이터의 특성을 모두 포함하고 있는 데이터 유형은?", 
    choices: ["패널 데이터(Panel Data)", "다변량 데이터(Multivariate Data)", "단변량 데이터(Univariate Data)", "정성적 데이터(Qualitative Data)"], 
    ans: 0, 
    exp: "패널 데이터(Panel Data)는 동일한 개체들을 여러 시점에 걸쳐 반복적으로 추적 조사하여 얻은 데이터로, 종단면적 특성과 횡단면적 특성을 모두 가집니다." 
  },
  { 
    subj: 2, 
    q: "결측값(Missing Value)의 종류 중, 소득이 낮은 응답자들의 설문 응답률이 낮게 나타나는 현상처럼 결측치가 변수의 결과에 직접적인 상관이 있는 경우는?", 
    choices: ["완전 무작위 결측(MCAR)", "무작위 결측(MAR)", "단순 결측(Simple Missing)", "비 무작위 결측(MNAR)"], 
    ans: 3, 
    exp: "비 무작위 결측(Missing Not At Random, MNAR)은 결측값의 발생이 해당 변수의 값 자체나 결과와 직접적인 관련이 있는 경우를 의미합니다." 
  },
  { 
    subj: 2, 
    q: "결측값 처리 방법 중, 회귀분석(Regression Analysis)의 결과를 활용하여 결측값을 예측하고 대치하는 기법은?", 
    choices: ["비조건부 평균 대치법", "조건부 평균 대치법", "단순 확률 대치법", "다중 대치법"], 
    ans: 1, 
    exp: "조건부 평균 대치법(Conditional Mean Imputation)은 다른 변수들과의 관계를 이용한 회귀 모형 등을 통해 결측값을 예측하여 대치하는 방법입니다." 
  },
  { 
    subj: 2, 
    q: "변수 선택(Feature Selection)의 래퍼 방법(Wrapper Method) 중에서, 모델에 변수를 하나씩 추가해 가면서 최적의 회귀방정식을 찾아내는 기법은?", 
    choices: ["전진 선택법(Forward Selection)", "후진 제거법(Backward Elimination)", "단계적 선택법(Stepwise Selection)", "필터 방법(Filter Method)"], 
    ans: 0, 
    exp: "전진 선택법(Forward Selection)은 변수가 없는 상태에서 출발하여 모델의 성능을 가장 많이 향상시키는 변수를 하나씩 순차적으로 추가하는 방법입니다." 
  },
  { 
    subj: 2, 
    q: "선형 차원 축소 기법 중, 관측된 여러 변수들 사이의 상관관계를 분석하여 이들을 설명할 수 있는 소수의 잠재 요인으로 차원을 축소하는 방법은?", 
    choices: ["요인 분석(Factor Analysis)", "선형 판별 분석(LDA)", "주성분 분석(PCA)", "특이값 분해(SVD)"], 
    ans: 0, 
    exp: "요인 분석(Factor Analysis)은 데이터 내의 숨겨진 잠재 변수(Latent Variable)나 요인을 추출하여 데이터의 차원을 축소하고 구조를 해석하는 데 유용한 기법입니다." 
  },
  { 
    subj: 2, 
    q: "인공신경망을 활용한 비선형 차원 축소 기법으로, 입력 데이터를 압축한 후 다시 본래의 형태로 복원하는 학습 과정을 거치는 모델은?", 
    choices: ["t-SNE", "MDS", "UMAP", "오토인코더(AutoEncoder)"], 
    ans: 3, 
    exp: "오토인코더(AutoEncoder)는 인코더를 통해 데이터를 저차원으로 압축하고 디코더를 통해 원본 데이터를 복원하도록 신경망을 학습시켜 차원을 축소하는 기법입니다." 
  },
  { 
    subj: 2, 
    q: "수치형 변수 변환(Variable Transformation) 중 양수 데이터가 비대칭 분포를 띨 때 이를 정규분포에 가까운 형태로 변환하기 위해 활용하는 기법은?", 
    choices: ["정규화(Min-Max Scaling)", "표준화(Z-Score)", "Box-Cox 변환(Box-Cox Transformation)", "지수 변환(Exponential Transformation)"], 
    ans: 2, 
    exp: "Box-Cox 변환(Box-Cox Transformation)은 한쪽으로 치우친 양수 데이터를 정규분포 형태에 가깝게 만들기 위해 파라미터 람다 값을 조절하며 적용하는 변환 기법입니다." 
  },
  { 
    subj: 2, 
    q: "불균형 데이터 처리(Imbalanced Data Handling)에서 다수 클래스의 일부 데이터만 선택하여 비율을 맞추는 데이터 샘플링 기법은?", 
    choices: ["과대표집(OverSampling)", "과소표집(UnderSampling)", "가중치 균형(Weighted Balance)", "SMOTE"], 
    ans: 1, 
    exp: "과소표집(UnderSampling)은 클래스 불균형 문제를 해결하기 위해 데이터가 많은 다수 클래스에서 일부 샘플만 무작위로 추출하여 데이터 수를 줄이는 기법입니다." 
  },
  { 
    subj: 2, 
    q: "상관관계 분석(Correlation Analysis) 중 제3의 변수가 미치는 영향을 통제한 상태에서 두 변수 간의 순수한 상관관계를 분석하는 기법은?", 
    choices: ["단순상관분석(Simple Correlation Analysis)", "다중상관분석(Multiple Correlation Analysis)", "교차분석(Cross Tabulation Analysis)", "편상관관계분석(Partial Correlation Analysis)"], 
    ans: 3, 
    exp: "편상관관계분석(Partial Correlation Analysis)은 다른 변수들의 영향을 통제하거나 제거한 후 두 변수 사이의 상관관계만을 측정하는 방법입니다." 
  },
  { 
    subj: 2, 
    q: "기초 통계량 중에서 역수의 산술평균을 구한 후 다시 역수를 취하는 방식으로, 주로 속도나 비율의 평균을 계산할 때 사용하는 대푯값은?", 
    choices: ["조화평균(Harmonic Mean)", "기하평균(Geometric Mean)", "산술평균(Arithmetic Mean)", "중앙값(Median)"], 
    ans: 0, 
    exp: "조화평균(Harmonic Mean)은 변수들의 역수에 대한 산술평균을 구한 뒤 그 값의 역수를 취하는 평균으로 특정 비율이나 속도를 평균 낼 때 적합합니다." 
  },
  { 
    subj: 2, 
    q: "확률변수 X의 분산 V(X)가 5일 때, 새로운 확률변수 Z = 3X + 2의 분산 V(Z)의 값으로 올바른 것은?", 
    choices: ["15", "17", "45", "47"], 
    ans: 2, 
    exp: "분산의 성질에 따라 V(aX + b) = a^2 * V(X) 가 성립합니다. 따라서 V(3X + 2) = 3^2 * V(X) = 9 * 5 = 45가 됩니다. 상수의 분산은 0으로 취급됩니다." 
  },
  { 
    subj: 2, 
    q: "비정형 데이터 분석의 자연어 전처리 과정 중, 품사에 상관없이 사전적 의미에 기반하여 단어를 원형으로 변환하는 작업은?", 
    choices: ["토큰화(Tokenization)", "불용어 처리(Stop Words Removal)", "어간 추출(Stemming)", "표제어 추출(Lemmatization)"], 
    ans: 3, 
    exp: "표제어 추출(Lemmatization)은 사전을 기반으로 단어의 품사를 고려하여 문맥에 맞는 기본 원형 단어를 찾아내는 전처리 작업입니다." 
  },
  { 
    subj: 2, 
    q: "N번의 시행에서 각 시행이 여러 개의 결과를 가질 수 있을 때, 각 결과가 나타나는 횟수에 대한 확률 분포를 나타내는 이산 확률분포는?", 
    choices: ["다항 분포(Multinomial Distribution)", "초기하 분포(Hypergeometric Distribution)", "이항 분포(Binomial Distribution)", "포아송 분포(Poisson Distribution)"], 
    ans: 0, 
    exp: "다항 분포(Multinomial Distribution)는 베르누이 시행을 확장하여, 주사위를 여러 번 던지는 것처럼 각 시행에서 나올 수 있는 결과가 세 개 이상인 경우의 확률분포입니다." 
  },
  { 
    subj: 2, 
    q: "A 공장에서 9개의 샘플을 추출하여 표본평균을 구하고, 귀무가설을 기각할지 결정하기 위해 산출한 값을 무엇이라 하는가?", 
    choices: ["표준오차(Standard Error)", "모수(Parameter)", "검정통계량(Test Statistic)", "유의확률(p-value)"], 
    ans: 2, 
    exp: "검정통계량(Test Statistic)은 귀무가설의 기각 여부를 결정하기 위해 표본 데이터로부터 계산하여 산출한 통계적인 수치를 뜻합니다." 
  },
  { 
    subj: 2, 
    q: "이상값(Outlier) 처리 방법 중, 데이터를 평균이 0이고 표준편차가 1인 정규분포 형태로 변환한 후 일정한 임계값을 초과하는 경우를 이상값으로 판단하는 기법은?", 
    choices: ["DBScan", "사분위수(IQR)", "Z-Score", "ESD"], 
    ans: 2, 
    exp: "Z-Score 기법은 데이터를 표준화(평균 0, 표준편차 1)한 뒤 통상적으로 절댓값이 3을 초과하는 데이터를 이상값으로 판별하는 방식입니다." 
  },
  { 
    subj: 2, 
    q: "파생변수(Derived Variable) 생성 시 고려할 수 있는 요소 중, 두 개 이상의 변수가 상호작용을 하여 특정 변수에 영향을 미치는 현상을 반영하는 것은?", 
    choices: ["특징 추출(Feature Extraction)", "수학적 변환(Mathematical Transformation)", "교호작용(Interaction)", "결합(Combination)"], 
    ans: 2, 
    exp: "교호작용(Interaction)은 독립변수들이 단독으로 작용할 때와 달리, 두 개 이상의 변수가 결합하여 종속변수에 추가적인 영향을 미치는 현상을 의미합니다." 
  },
  { 
    subj: 2, 
    q: "서로 독립인 확률변수 X, Y의 기댓값이 각각 E(X)=20, E(Y)=27일 때, 새로운 확률변수 Z = 5X - 7Y + 15의 기댓값 E(Z)는 얼마인가?", 
    choices: ["-89", "-74", "15", "149"], 
    ans: 1, 
    exp: "기댓값의 선형성에 따라 E(5X - 7Y + 15) = 5*E(X) - 7*E(Y) + 15가 성립합니다. 따라서 5*20 - 7*27 + 15 = 100 - 189 + 15 = -74가 됩니다." 
  },
  { 
    subj: 2, 
    q: "데이터 분포의 비대칭 정도를 나타내는 왜도(Skewness)의 값이 0보다 클 때(양수일 때), 대푯값들의 크기 순서를 올바르게 나열한 것은?", 
    choices: ["평균값 < 중앙값 < 최빈값", "최빈값 < 중앙값 < 평균값", "중앙값 < 평균값 < 최빈값", "평균값 = 중앙값 = 최빈값"], 
    ans: 1, 
    exp: "왜도가 0보다 크면 꼬리가 오른쪽으로 길어지며, 극단적으로 큰 값들에 의해 평균이 끌려가게 되므로 최빈값 < 중앙값 < 평균값 순서로 위치하게 됩니다." 
  },
  { 
    subj: 2, 
    q: "시각적 데이터 탐색 도구 중에서 데이터의 최솟값, 1사분위수, 중앙값, 3사분위수, 최댓값뿐만 아니라 이상치(Outlier)의 존재 여부를 직관적으로 확인하기 가장 용이한 그래프는?", 
    choices: ["히스토그램(Histogram)", "산점도(Scatter Plot)", "모자이크 차트(Mosaic Chart)", "박스플롯(Box Plot)"], 
    ans: 3, 
    exp: "박스플롯(Box Plot)은 사분위수를 기반으로 상자와 수염을 그려 데이터의 산포도와 중앙값, 그리고 정상 범위를 벗어난 이상치를 시각적으로 쉽게 파악할 수 있는 그래프입니다." 
  },
  { 
    subj: 2, 
    q: "비정형 텍스트 데이터의 자연어 전처리 과정에서 조사, 접속사 등 문법적인 역할만 할 뿐 분석에 큰 의미가 없는 단어들을 제거하는 작업은?", 
    choices: ["토큰화(Tokenization)", "어간 추출(Stemming)", "정규화(Normalization)", "불용어 처리(Stop Words Removal)"], 
    ans: 3, 
    exp: "불용어(Stop Words) 처리는 은, 는, 이, 가, 그리고 등과 같이 자주 등장하지만 실제 문장의 핵심 의미를 파악하는 데는 기여하지 않는 단어들을 필터링하는 작업입니다." 
  },
  { 
    subj: 2, 
    q: "자연어 전처리 과정 중, 같은 의미를 지니고 있으면서도 텍스트 내에서 다르게 표현된 단어들(예: ㅋㅋㅋ와 ㅋㅋ)을 하나의 통일된 형태로 만들어주는 작업은?", 
    choices: ["정규화(Normalization)", "표제어 추출(Lemmatization)", "토큰화(Tokenization)", "품사 태깅(POS Tagging)"], 
    ans: 0, 
    exp: "정규화(Normalization)는 오탈자, 축약어, 이모티콘 등 같은 의미이지만 다르게 쓰인 표현들을 표준화된 하나의 형태로 통합하는 전처리 과정입니다." 
  },
  { 
    subj: 2, 
    q: "확률적 표본 추출 방법 중, 모집단을 여러 계층으로 나눈 뒤 각 계층 내에서는 동질적인 특성을 보이고 계층 간에는 이질적인 특성을 보일 때 적용하기 가장 적합한 방법은?", 
    choices: ["집락 추출법(Cluster Sampling)", "계통 추출법(Systematic Sampling)", "층화 추출법(Stratified Sampling)", "단순 랜덤 추출법(Simple Random Sampling)"], 
    ans: 2, 
    exp: "층화 추출법(Stratified Sampling)은 모집단을 동질적인 여러 계층(층)으로 나누고, 각 계층마다 적절한 비율로 표본을 무작위 추출하여 표본의 대표성을 높이는 방법입니다." 
  },
  { 
    subj: 2, 
    q: "표본 추출 과정에서 한 번 추출되었던 데이터를 모집단에서 제외시켜 다음 번 추출 시 표본으로 다시 뽑힐 수 없도록 하는 추출 방식은?", 
    choices: ["복원 추출(Sampling with Replacement)", "비복원 추출(Sampling without Replacement)", "가중치 추출(Weighted Sampling)", "층화 추출(Stratified Sampling)"], 
    ans: 1, 
    exp: "비복원 추출(Sampling without Replacement)은 한 번 선택된 요소를 다시 모집단에 돌려놓지 않고 다음 요소를 뽑는 방식으로, 동일한 요소가 중복해서 추출되지 않습니다." 
  },
  { 
    subj: 2, 
    q: "성공 확률이 p인 베르누이 시행을 독립적으로 반복할 때, 목표로 하는 성공 횟수 r번을 달성할 때까지 필요한 전체 시행 횟수의 확률 분포는?", 
    choices: ["음이항 분포(Negative Binomial Distribution)", "포아송 분포(Poisson Distribution)", "이항 분포(Binomial Distribution)", "초기하 분포(Hypergeometric Distribution)"], 
    ans: 0, 
    exp: "음이항 분포(Negative Binomial Distribution)는 지정된 횟수(r)의 성공을 얻을 때까지 베르누이 시행을 반복해야 하는 횟수에 대한 이산 확률분포입니다." 
  },
  { 
    subj: 2, 
    q: "연속 확률분포 중에서 두 모수 a, b에 의해 모양이 결정되며 주로 0부터 1 사이의 값을 가지는 비율이나 확률에 대한 분포를 모델링할 때 사용하는 분포는?", 
    choices: ["지수 분포(Exponential Distribution)", "감마 분포(Gamma Distribution)", "베타 분포(Beta Distribution)", "t 분포(t Distribution)"], 
    ans: 2, 
    exp: "베타 분포(Beta Distribution)는 0과 1 사이의 구간에서 정의되는 연속 확률분포로, 확률 변수 자체가 어떤 사건이 일어날 확률이나 비율을 나타낼 때 유용하게 쓰입니다." 
  },
  { 
    subj: 2, 
    q: "모집단의 평균이 μ, 분산이 σ^2일 때, 크기가 n인 표본을 무작위로 추출하여 구한 표본평균분포의 분산 V(X_bar)를 구하는 식은?", 
    choices: ["σ^2", "σ / √n", "σ^2 / n", "n * σ^2"], 
    ans: 2, 
    exp: "중심극한정리 등에 의해 표본평균분포의 분산은 모분산을 표본의 크기 n으로 나눈 값(σ^2 / n)이 됩니다. 이를 제곱근한 σ / √n은 표본평균의 표준오차입니다." 
  },
  { 
    subj: 2, 
    q: "점추정에서 추정량과 실제 모수 간의 평균적인 오차 크기를 나타내는 평균제곱오차(MSE)를 구하는 식은 분산(Variance)과 무엇의 제곱의 합으로 이루어지는가?", 
    choices: ["편향(Bias)", "표준오차(Standard Error)", "자유도(Degree of Freedom)", "기댓값(Expected Value)"], 
    ans: 0, 
    exp: "평균제곱오차(MSE)는 추정량의 분산(Variance)과 편향(Bias)의 제곱을 더한 값으로 정의되며, 모수 추정의 정확도를 평가하는 지표로 활용됩니다." 
  },
  { 
    subj: 2, 
    q: "구간추정에서 모집단의 분산을 알지 못하고 표본의 크기가 충분히 크지 않을 때, 모평균의 신뢰구간을 추정하기 위해 정규분포를 대신하여 사용하는 확률분포의 이름과 그 때 적용되는 자유도는?", 
    choices: ["t 분포, 자유도 n", "F 분포, 자유도 n-1", "t 분포, 자유도 n-1", "카이제곱 분포, 자유도 n"], 
    ans: 2, 
    exp: "모분산을 모르는 경우에는 표본표준편차를 대신 사용하며, 이때 신뢰구간은 자유도가 n-1인 t 분포를 따르게 됩니다." 
  },
  { 
    subj: 2, 
    q: "가설검정의 표본 유형 중, 같은 대상에게 특정 약물을 투여하기 전과 투여한 후의 혈압 변화를 비교하는 것처럼 동일 모집단에 대한 평균 비교 검정을 수행할 때 적용하는 표본 유형은?", 
    choices: ["단일표본(One-Sample)", "독립표본(Independent-Sample)", "계통표본(Systematic-Sample)", "대응표본(Paired-Sample)"], 
    ans: 3, 
    exp: "대응표본(Paired-Sample)은 동일한 개체나 밀접하게 연관된 두 집단(예: 다이어트 전후 체중)을 대상으로 쌍을 지어 차이를 검정할 때 사용하는 표본 유형입니다." 
  },
  { 
    subj: 2, 
    q: "표본의 크기가 충분히 클 때, 모비율 p에 대한 점추정량인 표본비율(P)의 표준오차를 구하는 식은? (단, q = 1 - p, n은 표본의 크기)", 
    choices: ["pq / n", "√(pq / n)", "σ / √n", "σ^2 / n"], 
    ans: 1, 
    exp: "표본비율의 표준오차는 모비율과 실패확률을 곱한 값을 표본의 크기로 나눈 뒤 제곱근을 취한 √(pq / n) 입니다." 
  },
  { 
    subj: 2, 
    q: "구간추정에서 모집단의 분산을 알고 있는 경우, 신뢰수준 95%와 99%에 해당하는 Z 통계량의 임계값을 올바르게 짝지은 것은?", 
    choices: ["95%: 1.645, 99%: 1.960", "95%: 1.960, 99%: 2.306", "95%: 1.960, 99%: 2.576", "95%: 2.576, 99%: 1.960"], 
    ans: 2, 
    exp: "표준정규분포에서 신뢰수준 95%에 해당하는 Z값은 1.960이며, 99%에 해당하는 Z값은 2.576입니다." 
  },
  { 
    subj: 2, 
    q: "가설검정 시 유의수준(Significance Level)을 0.05로 설정했다는 것의 통계적 의미는 무엇인가?", 
    choices: ["귀무가설이 참일 때 이를 기각하는 제1종 오류를 범할 확률의 최대 허용 한계가 5%이다.", "귀무가설이 거짓일 때 이를 채택하는 제2종 오류를 범할 확률이 5%이다.", "대립가설이 참일 확률이 95%임을 보장한다.", "검정통계량이 채택역에 속할 확률이 5%이다."], 
    ans: 0, 
    exp: "유의수준(알파)은 귀무가설이 사실임에도 불구하고 실수로 기각해버리는 제1종 오류를 범할 최대 허용 확률을 의미합니다." 
  },
  { 
    subj: 2, 
    q: "모수 유의성 검정을 수행하기 위해 표본 데이터가 기본적으로 만족해야 하는 3가지 전제 조건에 해당하지 않는 것은?", 
    choices: ["정규성(Normality)", "등분산성(Homoscedasticity)", "독립성(Independence)", "다중공선성(Multicollinearity)"], 
    ans: 3, 
    exp: "모수 검정의 3대 전제 조건은 데이터의 정규성, 집단 간 분산이 같아야 하는 등분산성, 그리고 표본 간의 독립성입니다. 다중공선성은 다중회귀분석 시 변수 간의 문제를 의미합니다." 
  },
  { 
    subj: 2, 
    q: "모집단에 대한 아무런 정보가 없어 관측 자료가 특정 확률분포를 따른다고 가정할 수 없을 때, 데이터의 순위나 부호 등을 이용하여 수행하는 통계적 검정 방법은?", 
    choices: ["비모수 검정(Non-parametric Test)", "모수 검정(Parametric Test)", "t-검정(t-Test)", "Z-검정(Z-Test)"], 
    ans: 0, 
    exp: "비모수 검정은 데이터가 정규분포를 따른다는 등의 모수적 가정을 할 수 없거나 표본 수가 매우 적을 때 데이터의 순위나 차이 부호를 기반으로 수행하는 검정 방법입니다." 
  },
  { 
    subj: 2, 
    q: "가설검정 결과 도출된 p-value(유의확률)가 사전에 설정한 유의수준(예: 0.05)보다 작게 나타났을 때 내리는 올바른 통계적 결론은?", 
    choices: ["귀무가설을 채택한다.", "대립가설을 기각한다.", "귀무가설을 기각하고 대립가설을 채택한다.", "결론을 보류하고 표본을 다시 추출한다."], 
    ans: 2, 
    exp: "계산된 p-value가 유의수준보다 작다는 것은 귀무가설 하에서 현재의 표본 데이터가 관측될 확률이 매우 낮다는 뜻이므로 귀무가설을 기각하고 대립가설을 채택합니다." 
  },
  { 
    subj: 2, 
    q: "연속형 수치 데이터가 왼쪽으로 크게 치우친 양의 비대칭 분포를 가질 때, 데이터의 분산을 안정화하고 정규분포에 가깝게 만들기 위해 사용하는 데이터 변환 기법은?", 
    choices: ["역수 변환(Reciprocal Transformation)", "로그 변환(Log Transformation)", "지수 변환(Exponential Transformation)", "절대값 변환(Absolute Transformation)"], 
    ans: 1, 
    exp: "데이터가 한쪽으로 쏠려 있거나 값의 편차가 클 때 로그 변환(Log Transformation)을 취하면 큰 값들은 작아지고 작은 값들의 차이는 벌어져 정규성에 가까워집니다." 
  },
  { 
    subj: 2, 
    q: "피어슨 상관계수(Pearson Correlation Coefficient)가 -0.9로 산출되었을 때 이에 대한 가장 적절한 해석은?", 
    choices: ["두 변수 간에는 강한 양의 선형 관계가 있다.", "두 변수 간에는 아무런 선형 관계가 없다.", "두 변수 간에는 강한 비선형 관계가 있다.", "두 변수 간에는 강한 음의 선형 관계가 있다."], 
    ans: 3, 
    exp: "상관계수는 -1에서 1 사이의 값을 가지며, -1에 가까울수록 한 변수가 증가할 때 다른 변수가 감소하는 강한 음의 선형 관계를 의미합니다." 
  },
  { 
    subj: 2, 
    q: "서로 독립인 두 확률변수 X, Y의 분산이 각각 V(X)=3, V(Y)=4일 때, 새로운 확률변수 Z = 2X - 3Y + 5 의 분산 V(Z)는 얼마인가?", 
    choices: ["48", "24", "19", "0"], 
    ans: 0, 
    exp: "분산의 성질에 따라 V(aX + bY + c) = a^2*V(X) + b^2*V(Y) 가 성립합니다. 따라서 V(2X - 3Y + 5) = 4*3 + 9*4 = 12 + 36 = 48 입니다." 
  },
  { 
    subj: 2, 
    q: "서로 독립인 두 확률변수 X, Y의 기댓값이 각각 E(X)=10, E(Y)=5일 때, Z = 4X - 2Y + 7 의 기댓값 E(Z)는 얼마인가?", 
    choices: ["23", "37", "47", "50"], 
    ans: 1, 
    exp: "기댓값의 선형성에 따라 E(4X - 2Y + 7) = 4*E(X) - 2*E(Y) + 7 = 40 - 10 + 7 = 37 이 됩니다." 
  },
  { 
    subj: 2, 
    q: "두 확률변수의 사전 확률과 사후 확률 사이의 관계를 나타내며, 조건부 확률을 계산할 때 새로운 증거를 통해 기존의 확률을 갱신하는 정리는?", 
    choices: ["중심극한정리(Central Limit Theorem)", "체비쇼프 정리(Chebyshev's Theorem)", "베이즈 정리(Bayes' Theorem)", "마코프 부등식(Markov's Inequality)"], 
    ans: 2, 
    exp: "베이즈 정리는 결과가 발생했다는 조건하에서 그 원인이 무엇이었을지 역으로 사후 확률을 추정하는 데 사용되는 중요한 확률 이론입니다." 
  },
  { 
    subj: 2, 
    q: "불균형 데이터 처리 기법 중 소수 클래스 데이터들의 공간적 거리를 계산하여 그 사이에 새로운 가상의 데이터 포인트를 생성해 내는 오버샘플링(OverSampling) 기법은?", 
    choices: ["랜덤 언더샘플링(Random Under-Sampling)", "SMOTE(Synthetic Minority Over-sampling Technique)", "가중치 균형 적용(Weighted Balance)", "계통 추출법(Systematic Sampling)"], 
    ans: 1, 
    exp: "SMOTE는 단순히 소수 데이터를 복제하는 것이 아니라, K-최근접 이웃 알고리즘을 활용하여 기존 소수 데이터들 사이의 특징을 보간해 새로운 합성 데이터를 생성하는 기법입니다." 
  },
  { 
    subj: 2, 
    q: "임의의 모집단에서 크기가 n인 표본을 무작위로 추출할 때, n이 충분히 크면(보통 30 이상) 모집단의 분포 형태와 상관없이 표본평균의 분포가 정규분포에 근사하게 된다는 통계학의 핵심 정리는?", 
    choices: ["대수의 법칙(Law of Large Numbers)", "중심극한정리(Central Limit Theorem)", "베이즈 정리(Bayes' Theorem)", "가우스-마코프 정리(Gauss-Markov Theorem)"], 
    ans: 1, 
    exp: "중심극한정리(Central Limit Theorem)는 모집단이 어떤 분포를 띠든 상관없이 표본의 크기가 충분히 크면 표본평균들의 분포가 정규분포를 따른다는 중요한 원리입니다." 
  },
  { 
    subj: 2, 
    q: "두 집단의 평균 차이를 비교하기 위해 수행하는 가설검정 방법 중, 두 집단의 데이터가 서로 다른 개체들로부터 추출되어 아무런 연관성이 없을 때 사용하는 검정 방법은?", 
    choices: ["단일표본 t-검정(One-Sample t-test)", "독립표본 t-검정(Independent-Sample t-test)", "대응표본 t-검정(Paired-Sample t-test)", "분산분석(ANOVA)"], 
    ans: 1, 
    exp: "서로 관련이 없는 완전히 분리된 두 집단(예: A반 학생과 B반 학생의 성적)의 평균을 비교할 때는 독립표본 t-검정을 사용합니다." 
  },
  { 
    subj: 2, 
    q: "두 집단의 분산이 서로 동일한지(등분산성)를 확인하기 위해 두 분산의 비율을 검정통계량으로 사용하는 확률분포는?", 
    choices: ["Z 분포", "t 분포", "카이제곱 분포", "F 분포"], 
    ans: 3, 
    exp: "F 분포는 서로 다른 두 카이제곱 분포의 비율로 정의되며, 두 집단의 분산 동질성을 검정하거나 세 집단 이상의 평균을 비교하는 ANOVA에 주로 사용됩니다." 
  },
  { 
    subj: 2, 
    q: "세 개 이상의 여러 집단 간의 평균 차이가 통계적으로 유의미한지 검정할 때 사용하는 분석 기법은?", 
    choices: ["독립표본 t-검정", "카이제곱 검정", "분산분석(ANOVA)", "회귀분석(Regression Analysis)"], 
    ans: 2, 
    exp: "분산분석(ANOVA)은 집단 간의 분산과 집단 내의 분산 비율(F비)을 이용하여 3개 이상 다수 집단의 평균에 통계적인 차이가 있는지 검정하는 기법입니다." 
  },
  { 
    subj: 2, 
    q: "탐색적 자료 분석(EDA) 과정에서 변수 간의 다중공선성(Multicollinearity)을 진단할 때 기준으로 삼는 지표인 VIF(분산팽창인수)의 임계값으로 일반적으로 사용되는 수치는?", 
    choices: ["0", "1", "5", "10"], 
    ans: 3, 
    exp: "일반적으로 VIF(분산팽창인수) 값이 10 이상이면 독립변수들 간에 강한 상관관계가 존재하여 다중공선성 문제가 있다고 판단합니다." 
  },
  { 
    subj: 3, 
    q: "분석모형 정의 시 모델이 훈련 데이터의 특징과 노이즈까지 지나치게 세밀하게 학습하여, 새로운 테스트 데이터에 대한 예측 성능이 오히려 떨어지는 현상을 무엇이라 하는가?", 
    choices: ["과대적합(Overfitting)", "과소적합(Underfitting)", "편향(Bias)", "분산(Variance)"], 
    ans: 1, 
    exp: "과대적합(Overfitting)은 모델이 훈련 데이터의 노이즈까지 학습하여 새 데이터에 성능이 낮아지는 현상입니다. 과소적합(Underfitting)은 모델이 너무 단순하여 훈련 데이터조차 제대로 학습하지 못하는 상태입니다. 편향(Bias)은 예측이 실제값에서 얼마나 벗어나는지, 분산(Variance)은 예측값의 변동성입니다. 과적합=높은 분산+낮은 편향. ☞ 암기 팁: 과적합=훈련정확도↑·테스트정확도↓(노이즈까지 암기) / 과소적합=훈련·테스트 모두 낮음" 
  },
  { 
    subj: 3, 
    q: "일반적인 분석모형 구축 절차를 순서대로 올바르게 나열한 것은?", 
    choices: ["요건정의 - 검증 및 테스트 - 모델링 - 적용", "모델링 - 요건정의 - 검증 및 테스트 - 적용", "요건정의 - 모델링 - 검증 및 테스트 - 적용", "검증 및 테스트 - 요건정의 - 모델링 - 적용"], 
    ans: 2, 
    exp: "분석모형 구축은 분석 요건을 먼저 정의한 후, 모델링을 수행하고, 이를 검증 및 테스트한 다음 최종적으로 운영 시스템에 적용하는 4단계 절차를 거칩니다." 
  },
  { 
    subj: 3, 
    q: "데이터 분할(Data Split) 과정에서 모델의 하이퍼파라미터를 미세하게 조정하고 과대적합을 방지하기 위한 중간 평가 목적으로 사용하는 데이터 세트는?", 
    choices: ["훈련용 데이터(Training Set)", "검증용 데이터(Validation Set)", "평가용 데이터(Test Set)", "원시 데이터(Raw Data)"], 
    ans: 1, 
    exp: "검증용 데이터(Validation Set)는 훈련된 모델의 성능을 중간 점검하고 매개변수를 튜닝하여 최적의 모델 구조를 결정하는 데 사용됩니다." 
  },
  { 
    subj: 3, 
    q: "회귀분석에서 추정된 회귀모형이 실제 관측된 데이터의 변동을 얼마나 잘 설명하는지를 나타내는 지표인 결정계수(R-Square)의 계산 공식은?", 
    choices: ["SSE / SST", "SSR / SST", "MSE / MSR", "SST / SSR"], 
    ans: 1, 
    exp: "결정계수(R-Square)는 총 변동(SST) 중에서 회귀모형에 의해 설명되는 변동(SSR)이 차지하는 비율을 의미하며, SSR/SST 또는 1-(SSE/SST)로 계산합니다." 
  },
  { 
    subj: 3, 
    q: "규제항이 포함된 선형 회귀모델 중, 회귀계수의 크기를 제어하기 위해 L2 규제항(회귀계수 제곱의 합)을 추가하여 다중공선성 문제를 완화하는 모델은?", 
    choices: ["릿지 회귀(Ridge Regression)", "라쏘 회귀(Lasso Regression)", "엘라스틱 넷(Elastic Net)", "주성분 회귀(PCR)"], 
    ans: 0, 
    exp: "릿지(Ridge)=L2 규제(계수 제곱합 최소화→0에 수렴하지만 0이 되지 않음), 라쏘(Lasso)=L1 규제(계수 절댓값합 최소화→일부 계수를 정확히 0으로 만들어 변수 선택), 엘라스틱 넷=L1+L2 혼합. ☞ 암기 팁: Ridge=L2(계수 제곱, 다중공선성 완화), Lasso=L1(계수 절댓값, 변수 선택), ElasticNet=L1+L2" 
  },
  { 
    subj: 3, 
    q: "올바른 선형회귀분석을 수행하기 위해 만족해야 하는 잔차(오차)의 기본 가정에 포함되지 않는 것은?", 
    choices: ["선형성(Linearity)", "등분산성(Homoscedasticity)", "독립성(Independence)", "이산성(Discreteness)"], 
    ans: 3, 
    exp: "선형회귀분석의 4가지 주요 가정은 독립변수와 종속변수 간의 선형성, 오차의 등분산성, 오차의 정규성, 오차의 독립성입니다." 
  },
  { 
    subj: 3, 
    q: "다중 선형 회귀분석에서 독립변수들 간에 강한 상관관계가 존재하여 회귀계수 추정의 신뢰도를 떨어뜨리는 현상을 무엇이라 하는가?", 
    choices: ["다중공선성(Multicollinearity)", "이분산성(Heteroscedasticity)", "자기상관(Autocorrelation)", "내생성(Endogeneity)"], 
    ans: 2, 
    exp: "다중공선성은 독립변수 간 강한 상관관계로 회귀계수 추정 불안정·분산팽창(VIF 증가)을 초래합니다. 이분산성은 오차분산이 일정하지 않은 상태, 자기상관은 오차항 간에 상관이 있는 상태, 내생성은 독립변수와 오차항이 상관된 상태입니다. ☞ 암기 팁: 다중공선성=독립변수 간 상관↑(VIF>10이면 문제) / Ridge로 완화 가능" 
  },
  { 
    subj: 3, 
    q: "로지스틱 회귀분석에서 특정 사건이 발생할 확률(P)과 발생하지 않을 확률(1-P)의 비율을 나타내는 용어는?", 
    choices: ["오즈(Odds)", "로짓(Logit)", "오즈비(Odds Ratio)", "상대 위험도(Relative Risk)"], 
    ans: 0, 
    exp: "오즈(Odds) = P/(1-P)로 사건 발생/비발생 확률의 비율입니다. 로짓(Logit) = log(오즈) = log(P/(1-P))로 -∞~+∞ 범위. 오즈비(Odds Ratio)는 두 집단 간 오즈의 비율, 상대위험도(RR)는 두 집단 간 발생률의 비율입니다. ☞ 암기 팁: 오즈=P/(1-P) / 로짓=log(오즈) / 오즈비=집단A오즈÷집단B오즈" 
  },
  { 
    subj: 3, 
    q: "의사결정나무(Decision Tree) 알고리즘 중 CART 알고리즘이 분류 나무에서 노드를 분할할 때 불순도를 측정하기 위해 사용하는 기준 지표는?", 
    choices: ["지니 지수(Gini Index)", "엔트로피(Entropy)", "정보이득비율(Gain Ratio)", "카이제곱 통계량(Chi-square)"], 
    ans: 2, 
    exp: "CART 분류=지니 지수(Gini Index), CART 회귀=분산 감소. ID3=엔트로피 기반 정보이득, C4.5=정보이득비율(Gain Ratio), CHAID=카이제곱 통계량. 지니 지수=1-Σpᵢ²로 0일 때 완전 순수 노드. ☞ 암기 팁: CART분류=지니지수 / ID3=엔트로피 / C4.5=이득비율 / CHAID=카이제곱" 
  },
  { 
    subj: 3, 
    q: "인공신경망의 은닉층에서 입력 신호의 총합을 출력 신호로 변환하는 활성함수(Activation Function) 중, 입력값이 0보다 작으면 0을 반환하고 0보다 크면 그 값을 그대로 반환하여 기울기 소실 문제를 효과적으로 극복한 함수는?", 
    choices: ["ReLU(Rectified Linear Unit)", "시그모이드(Sigmoid)", "하이퍼볼릭 탄젠트(tanh)", "Leaky ReLU"], 
    ans: 3, 
    exp: "ReLU(f(x)=max(0,x))는 양수 기울기=1로 기울기 소실 완화, 계산 단순합니다. 시그모이드는 출력 0~1(이진분류 출력층), tanh는 출력 -1~1, Leaky ReLU는 음수 구간도 작은 기울기(αx, α≈0.01)를 허용하여 dead neuron 문제를 보완합니다. ☞ 암기 팁: ReLU=max(0,x)(양수 그대로, 음수 0) / Leaky ReLU=음수 구간도 작은 기울기 허용" 
  },
  { 
    subj: 3, 
    q: "딥러닝 모델 학습 과정에서 과대적합(Overfitting)을 방지하기 위해 신경망의 은닉층에 있는 일부 노드(퍼셉트론)를 무작위로 비활성화한 상태로 학습을 진행하는 기법은?", 
    choices: ["드롭아웃(Dropout)", "배치 정규화(Batch Normalization)", "조기 종료(Early Stopping)", "가중치 감쇠(Weight Decay)"], 
    ans: 2, 
    exp: "드롭아웃(Dropout)은 매 학습 배치마다 일부 노드를 무작위로 비활성화하여 앙상블 효과·과적합 방지에 사용됩니다. 배치 정규화는 레이어 입력 분포 정규화(학습 안정), 조기 종료는 검증 오차 증가 시 학습 중단, 가중치 감쇠는 L2 정규화로 가중치 크기 제한입니다. ☞ 암기 팁: 드롭아웃=노드 무작위 비활성화 / 배치 정규화=입력 분포 정규화 / 조기 종료=검증오차 기준 학습 중단" 
  },
  { 
    subj: 3, 
    q: "서포트벡터머신(SVM)에서 원래 2차원 등 저차원 공간에서 선형으로 완벽하게 분리할 수 없는 데이터를 고차원 공간으로 매핑하여 비선형 분류를 가능하게 해주는 수학적 함수는?", 
    choices: ["커널 함수(Kernel Function)", "활성화 함수(Activation Function)", "링크 함수(Link Function)", "손실 함수(Loss Function)"], 
    ans: 3, 
    exp: "커널 함수는 내적 계산만으로 고차원 매핑 효과를 얻는 커널 트릭에 사용됩니다. 대표 커널: RBF(Gaussian), 다항식, 선형 커널. 활성화 함수는 신경망, 손실 함수는 예측오차 측정, 링크 함수는 GLM(일반화선형모델)에서 선형 결합→반응변수 연결에 사용됩니다. ☞ 암기 팁: SVM 비선형 분류=커널 함수(RBF·다항식 등)로 고차원 매핑" 
  },
  { 
    subj: 3, 
    q: "연관성 분석(Association Analysis)에서 항목 A가 포함된 거래 중에서 항목 B도 함께 포함된 거래의 비율을 나타내는 지표로, 조건부 확률 P(B|A)에 해당하는 것은?", 
    choices: ["신뢰도(Confidence)", "기대 신뢰도(Expected Confidence)", "향상도(Lift)", "지지도(Support)"], 
    ans: 3, 
    exp: "신뢰도(Confidence) = P(A∩B)/P(A) = P(B|A). 지지도(Support) = P(A∩B) = 전체 거래 중 A∩B 비율. 향상도(Lift) = 신뢰도/P(B) = P(A∩B)/(P(A)·P(B)). 기대 신뢰도는 향상도 계산을 위한 기준값 P(B)입니다. ☞ 암기 팁: 지지도=P(A∩B), 신뢰도=P(B|A)=P(A∩B)/P(A), 향상도=신뢰도/P(B)" 
  },
  { 
    subj: 3, 
    q: "장바구니 분석(연관규칙 도출)에서 연산량을 획기적으로 줄이기 위해, 사용자가 사전에 설정한 최소 지지도(Minimum Support)를 만족하는 빈발 항목 집합만을 대상으로 규칙을 탐색하는 알고리즘은?", 
    choices: ["Apriori 알고리즘", "FP-Growth 알고리즘", "ECLAT 알고리즘", "PageRank 알고리즘"], 
    ans: 0, 
    exp: "Apriori 알고리즘은 '최소 지지도를 만족하는 항목 집합의 부분집합도 모두 빈발'이라는 성질(Apriori Property)을 이용해 탐색 공간을 축소합니다. FP-Growth는 트리 구조로 더 빠르게 빈발 항목 탐색, ECLAT는 수직 데이터 포맷 기반입니다. ☞ 암기 팁: Apriori=최소지지도로 가지치기(하위집합도 빈발) / FP-Growth=Apriori보다 빠른 트리기반" 
  },
  { 
    subj: 3, 
    q: "거리 기반의 군집 분석에서 두 관측치 간의 각 변수별 차이의 절댓값을 모두 합산한 거리 측정 방식은?", 
    choices: ["유클리디안 거리(Euclidean Distance)", "맨하튼 거리(Manhattan Distance)", "마할라노비스 거리(Mahalanobis Distance)", "코사인 유사도(Cosine Similarity)"], 
    ans: 1, 
    exp: "맨하튼 거리(Manhattan Distance 또는 City Block Distance)는 격자 모양의 도로망을 걷는 것처럼 각 좌표 축을 따라 이동한 차이의 절댓값을 단순 합산한 거리입니다." 
  },
  { 
    subj: 3, 
    q: "K-평균 군집화(K-means Clustering) 알고리즘의 특징으로 가장 올바르지 않은 것은?", 
    choices: ["군집의 수(K)를 사전에 결정해야 한다.", "초기 중심점 선정에 따라 결과가 달라질 수 있다.", "군집의 형태가 항상 타원형 혹은 볼록 형태일 필요가 없다.", "범주형 변수보다 연속형 수치 변수에 더 적합하다."], 
    ans: 3, 
    exp: "K-means는 구형(원형) 군집을 가정하며 타원형·오목형 군집에는 잘 작동하지 않습니다. K 사전 결정 필요, 초기 중심점 의존성, 연속형 수치 변수에 적합(범주형에는 K-modes)은 올바른 특징입니다. ☞ 암기 팁: K-means 단점=K 사전지정·초기값 의존·구형 군집만·이상값 민감·범주형 불가" 
  },
  { 
    subj: 3, 
    q: "비계층적 군집분석 기법 중 데이터가 모여 있는 밀도(Density)를 계산하여, 일정 반경(Eps) 내에 지정된 최소 데이터 수(MinPts)가 존재하는 핵심 노드를 중심으로 군집을 확장해 나가는 알고리즘은?", 
    choices: ["DBSCAN", "K-평균(K-means)", "계층적 군집분석(Hierarchical Clustering)", "자기조직화지도(SOM)"], 
    ans: 3, 
    exp: "DBSCAN은 Eps(반경)와 MinPts(최소 데이터 수)로 핵심점·경계점·잡음점을 구분하며, 군집 수를 사전에 지정하지 않아도 되고 비구형·임의 형태 군집 및 이상값 탐지에 유리합니다. K-means는 K 사전 지정+구형 군집, 계층적 군집은 덴드로그램 사용, SOM은 자기조직화 신경망 기반입니다. ☞ 암기 팁: DBSCAN=밀도기반·K 불필요·이상값 탐지 가능·비구형 군집" 
  },
  { 
    subj: 3, 
    q: "어떤 질병 검사에서 양성 판정을 받은 그룹의 질병 보유 오즈(Odds)가 4.0이고, 음성 판정을 받은 그룹의 질병 보유 오즈가 0.5일 때, 이 검사 결과에 따른 오즈비(Odds Ratio)는 얼마인가?", 
    choices: ["2.0", "3.5", "4.5", "8.0"], 
    ans: 3, 
    exp: "오즈비(Odds Ratio)는 두 집단의 오즈 비율을 의미합니다. 양성 그룹의 오즈(4.0)를 음성 그룹의 오즈(0.5)로 나누면 8.0이 됩니다." 
  },
  { 
    subj: 3, 
    q: "시계열 데이터가 가지고 있는 시간에 따른 일정한 패턴을 분석하기 위해 시계열이 갖추어야 할 조건인 정상성(Stationarity)을 확보하는 방법 중 하나로, 현 시점의 관측치에서 바로 이전 시점의 관측치를 빼는 작업을 무엇이라 하는가?", 
    choices: ["계절 조정(Seasonal Adjustment)", "차분(Differencing)", "로그 변환(Log Transformation)", "이동평균(Moving Average)"], 
    ans: 0, 
    exp: "차분(Differencing)은 Δyₜ = yₜ - yₜ₋₁으로 추세를 제거하여 정상 시계열로 변환합니다. ARIMA(p,d,q)에서 d가 차분 횟수입니다. 계절 조정은 계절성 제거, 로그 변환은 분산 안정화, 이동평균은 단기 변동 평활화에 사용됩니다. ☞ 암기 팁: 차분=현재값-이전값→추세 제거(ARIMA의 d) / 로그변환=분산 안정화" 
  },
  { 
    subj: 3, 
    q: "딥러닝의 합성곱 신경망(CNN) 구조에서 컨볼루션 레이어를 거친 후, 데이터의 중요한 공간적 특성은 유지하면서 행렬의 크기를 줄여 연산량을 대폭 감소시키는 역할을 하는 계층은?", 
    choices: ["풀링 레이어(Pooling Layer)", "완전연결 레이어(Fully Connected Layer)", "드롭아웃(Dropout)", "배치 정규화(Batch Normalization)"], 
    ans: 2, 
    exp: "풀링 레이어는 최대 풀링(Max Pooling)이나 평균 풀링(Average Pooling)으로 특징 맵 크기를 축소합니다. 완전연결 레이어는 최종 분류 단계, 드롭아웃은 과적합 방지, 배치 정규화는 입력 분포 정규화입니다. ☞ 암기 팁: CNN 구조=Conv(특징추출)→Pooling(크기축소)→FC(분류) / Max/Average Pooling" 
  },
  { 
    subj: 3, 
    q: "범주형 자료 분석에서 두 범주형 변수 간의 연관성이 있는지 확인하기 위해, 관측된 빈도와 기대 빈도의 차이를 활용하는 통계적 검정 방법은?", 
    choices: ["카이제곱 검정(Chi-square Test)", "t-검정(t-test)", "F-검정(F-test)", "맥니마 검정(McNemar Test)"], 
    ans: 2, 
    exp: "카이제곱 검정은 교차표에서 관측빈도와 기대빈도의 차이(χ²)로 두 범주형 변수 간의 독립성·연관성을 검정합니다. t-검정은 연속형 변수의 평균 비교, F-검정은 분산 비교·ANOVA, 맥니마 검정은 대응 이진 변수의 변화 검정에 사용됩니다. ☞ 암기 팁: 범주형 두 변수 관계=카이제곱 검정 / 연속형 평균 비교=t-검정" 
  },
  { 
    subj: 3, 
    q: "질병 여부와 알콜 중독 여부에 대한 교차표에서, 알콜 중독 True 그룹 20명 중 질병 True가 14명(비율 0.7), 알콜 중독 False 그룹 50명 중 질병 True가 10명(비율 0.2)일 때, 알콜 중독에 따른 질병의 상대 위험도(RR)는 얼마인가?", 
    choices: ["1.5", "2.0", "3.5", "9.33"], 
    ans: 2, 
    exp: "상대 위험도(RR)는 두 집단의 비율을 나눈 값입니다. 알콜 중독 True 집단의 발병률 0.7을 알콜 중독 False 집단의 발병률 0.2로 나누면 3.5가 산출됩니다." 
  },
  { 
    subj: 3, 
    q: "다변량 분석 기법 중, 세 개 이상의 여러 집단 간의 평균을 비교하여 그 차이가 통계적으로 유의미한지 확인하는 분석 방법은?", 
    choices: ["다중회귀분석(Multiple Regression)", "독립표본 t-검정(Independent t-test)", "분산분석(ANOVA: Analysis of Variance)", "주성분분석(PCA)"], 
    ans: 0, 
    exp: "ANOVA는 3개 이상 집단의 평균 비교 시 사용합니다. 독립표본 t-검정은 2개 집단 평균 비교, 다중회귀는 여러 독립변수로 종속변수 예측, PCA는 차원 축소입니다. ANOVA 후 사후검정(Tukey, Bonferroni 등)으로 어느 집단 간 차이가 유의한지 확인합니다. ☞ 암기 팁: ANOVA=3개↑집단 평균 비교 / t-검정=2개 집단 평균 비교" 
  },
  { 
    subj: 3, 
    q: "요인 분석(Factor Analysis)의 요인 추출 방법 중, 데이터의 전체 분산을 토대로 상관성이 높은 변수들을 선형 결합하여 분산이 가장 큰 축부터 순차적으로 주성분을 추출하는 방법은?", 
    choices: ["주성분 분석(PCA: Principal Component Analysis)", "공통 요인 분석(Common Factor Analysis)", "최대 우도법(Maximum Likelihood Method)", "알파 요인 추출(Alpha Factoring)"], 
    ans: 3, 
    exp: "PCA는 전체 분산을 최대화하는 방향으로 주성분을 추출하는 방법입니다. 공통 요인 분석은 공통 분산(공통인자)만을 기반으로 잠재 요인 추출, 최대 우도법은 정규분포 가정 하에 MLE로 요인 추출, 알파 요인 추출은 척도의 신뢰도 최적화 방법입니다. ☞ 암기 팁: PCA=전체분산 최대화→주성분 추출(비지도, 방향성 있음)" 
  },
  { 
    subj: 3, 
    q: "다변량 데이터 분석 중, 두 개 이상의 변수 집단(예: 심리 검사 항목 그룹과 직무 성과 항목 그룹) 간의 상관관계를 가장 잘 설명하는 선형 결합을 찾아 분석하는 기법은?", 
    choices: ["정준상관분석(Canonical Correlation Analysis)", "판별분석(Discriminant Analysis)", "다차원 척도법(MDS)", "군집분석(Clustering)"], 
    ans: 0, 
    exp: "정준상관분석은 단순한 변수 대 변수의 관계가 아니라, 변수 집단과 변수 집단 사이의 상관관계를 파악할 때 사용하는 다변량 분석 기법입니다." 
  },
  { 
    subj: 3, 
    q: "시계열 분석을 수행하기 위해 데이터의 정상성(Stationarity)을 확보하는 방법 중, 현 시점의 자료 값에서 바로 이전 시점의 자료 값을 빼서 평균을 일정하게 만드는 방법은?", 
    choices: ["로그 변환(Log Transformation)", "차분(Differencing)", "이동 평균(Moving Average)", "지수 평활(Exponential Smoothing)"], 
    ans: 1, 
    exp: "차분(Differencing)은 시계열 데이터가 갖는 추세나 계절성 등을 제거하여 평균이 일정한 정상 시계열로 변환하는 핵심 기법입니다." 
  },
  { 
    subj: 3, 
    q: "시계열 모형의 오차항을 의미하며, 평균과 분산이 시간의 흐름에 따라 일정하고 관측치 간에 자기상관이 전혀 없는 상태를 지칭하는 용어는?", 
    choices: ["계절 요인(Seasonal Factor)", "순환 요인(Cyclical Factor)", "이동 평균(Moving Average)", "백색 잡음(White Noise)"], 
    ans: 3, 
    exp: "백색 잡음(White Noise)은 시계열 데이터에서 의미 있는 패턴이 모두 추출되고 남은 무작위 오차항으로 정상성을 완벽히 만족합니다." 
  },
  { 
    subj: 3, 
    q: "시계열 예측 모형 중 자기 자신의 과거 값이 현재와 미래의 값에 영향을 미친다고 가정하며, 부분자기상관함수(PACF) 그래프를 통해 적절한 차수(p)를 결정하는 모형은?", 
    choices: ["이동평균(MA) 모형", "자기회귀(AR) 모형", "자기회귀누적이동평균(ARIMA) 모형", "지수평활 모형"], 
    ans: 1, 
    exp: "자기회귀(Auto-Regressive, AR) 모형은 과거의 관측값들의 선형 결합으로 현재 값을 예측하며 차수 p를 갖는 AR(p) 모델로 표현됩니다." 
  },
  { 
    subj: 3, 
    q: "분해 시계열 분석에서 시계열 데이터를 4가지 요인으로 분해할 때, 알려지지 않은 주기를 갖고 거시 경제 전반이나 특정 산업의 장기적인 변동 추이를 나타내는 요인은?", 
    choices: ["추세 요인(Trend Factor)", "계절 요인(Seasonal Factor)", "불규칙 요인(Irregular Factor)", "순환 요인(Cyclical Factor)"], 
    ans: 3, 
    exp: "순환 요인(Cyclical Factor)은 고정된 주기를 갖는 계절 요인과 달리, 수년에 걸쳐 경기 변동처럼 주기와 진폭이 불규칙하게 나타나는 변동 요인입니다." 
  },
  { 
    subj: 3, 
    q: "베이즈 정리(Bayes Theorem)를 활용한 확률 계산에서, 어떤 사건의 결과가 관측되었다는 조건 하에 그 결과를 초래한 원인이 무엇이었을지 역으로 추정하여 갱신된 확률을 무엇이라 하는가?", 
    choices: ["사전 확률(Prior Probability)", "우도(Likelihood)", "주변 확률(Marginal Probability)", "사후 확률(Posterior Probability)"], 
    ans: 3, 
    exp: "사후 확률(Posterior Probability)은 새로운 데이터나 증거(우도)가 주어진 상태에서 기존의 믿음(사전 확률)을 업데이트하여 산출한 최종 확률입니다." 
  },
  { 
    subj: 3, 
    q: "딥러닝의 합성곱 신경망(CNN) 구조에서 이미지의 공간적 특성을 유지한 채 필터를 적용하여 시각적 특징(Feature)을 추출하는 연산 계층은?", 
    choices: ["합성곱 계층(Convolution Layer)", "풀링 계층(Pooling Layer)", "완전 연결 계층(Fully Connected Layer)", "출력 계층(Output Layer)"], 
    ans: 0, 
    exp: "합성곱 계층(Convolution Layer)은 입력 이미지 위로 가중치를 가진 필터(커널)를 슬라이딩시키며 특징 맵을 생성하여 이미지의 핵심 패턴을 추출합니다." 
  },
  { 
    subj: 3, 
    q: "시계열이나 텍스트와 같은 순차적 데이터를 처리하는 순환 신경망(RNN)에서, 입력 데이터의 시퀀스가 길어질수록 과거의 은닉층 정보가 마지막 층까지 제대로 전달되지 못하고 소실되는 현상은?", 
    choices: ["기울기 폭발(Exploding Gradient)", "장기의존성 문제(Long-Term Dependency Problem)", "과대적합(Overfitting)", "차원의 저주(Curse of Dimensionality)"], 
    ans: 1, 
    exp: "장기의존성 문제(Long-Term Dependency)는 과거 정보와 현재 정보 사이의 거리가 멀어질수록 문맥을 기억하지 못하는 현상이며 이를 극복하기 위해 LSTM이나 GRU 구조가 고안되었습니다." 
  },
  { 
    subj: 3, 
    q: "입력 데이터를 인코더(Encoder)를 통해 저차원 잠재 공간으로 압축한 후, 디코더(Decoder)를 통해 다시 본래의 차원과 형태로 재구성하도록 학습하는 비지도 학습 신경망 모델은?", 
    choices: ["합성곱 신경망(CNN)", "순환 신경망(RNN)", "오토인코더(AutoEncoder)", "트랜스포머(Transformer)"], 
    ans: 2, 
    exp: "오토인코더(AutoEncoder)는 데이터의 핵심 특징만 남기고 차원을 축소하는 과정에서 학습되며 데이터 생성 모델(VAE 등)이나 이상 탐지에 폭넓게 활용됩니다." 
  },
  { 
    subj: 3, 
    q: "자연어 처리를 위한 트랜스포머(Transformer) 아키텍처에서, 입력 시퀀스 내의 각 단어들이 서로 어떤 연관성을 가지는지 가중치를 부여하여 중요한 정보에 집중할 수 있게 하는 핵심 메커니즘은?", 
    choices: ["합성곱(Convolution)", "서브샘플링(Subsampling)", "어텐션(Attention)", "드롭아웃(Dropout)"], 
    ans: 2, 
    exp: "어텐션(Attention) 메커니즘은 문맥을 파악할 때 시퀀스의 모든 정보에 동일한 비중을 두지 않고 현재 예측해야 할 부분과 관련성이 높은 단어에 집중(Attention)하도록 가중치를 조절합니다." 
  },
  { 
    subj: 3, 
    q: "구글이 발표한 언어 모델로, 트랜스포머의 인코더 구조만을 사용하여 양방향 문맥을 모두 파악하며 문장 중간의 빈칸을 채우는 방식으로 학습된 모델은?", 
    choices: ["GPT(Generative Pre-trained Transformer)", "BERT(Bidirectional Encoder Representations from Transformers)", "YOLO(You Only Look Once)", "LSTM(Long Short-Term Memory)"], 
    ans: 1, 
    exp: "BERT는 문장의 전후 양방향 문맥을 동시에 고려하는 트랜스포머 인코더 기반 모델로 자연어 이해(NLU) 작업에 탁월한 성능을 보입니다. 반면 GPT는 디코더 구조를 기반으로 일방향 문장 생성을 수행합니다." 
  },
  { 
    subj: 3, 
    q: "텍스트 마이닝에서 특정 문서 내에서의 단어 출현 빈도(TF)에 해당 단어가 등장한 전체 문서 수의 역수(IDF)를 곱하여 단어의 중요도 가중치를 산출하는 척도는?", 
    choices: ["BOW(Bag of Words)", "TDM(Term-Document Matrix)", "TF-IDF(Term Frequency-Inverse Document Frequency)", "Word2Vec"], 
    ans: 2, 
    exp: "TF-IDF는 단순히 문서 내에 많이 등장했다고 중요한 단어로 보지 않고 다른 문서들에서는 잘 등장하지 않는 희소성까지 동시에 고려하여 문서의 핵심어를 추출하는 기법입니다." 
  },
  { 
    subj: 3, 
    q: "단어의 문맥적 의미를 보존하면서 벡터 공간에 표현하는 워드 임베딩(Word Embedding) 기법인 Word2Vec에서, 주변 단어들을 입력하여 중간에 위치한 중심 단어를 예측하도록 신경망을 학습시키는 구조는?", 
    choices: ["CBOW(Continuous Bag-of-Words)", "Skip-Gram", "GloVe", "FastText"], 
    ans: 0, 
    exp: "Word2Vec의 두 가지 구조 중 CBOW는 주변 단어들로 중심 단어를 맞추는 구조이며 Skip-Gram은 중심 단어 하나로 주변 단어들을 예측하는 구조입니다." 
  },
  { 
    subj: 3, 
    q: "소셜 네트워크 분석(SNA)에서 네트워크 내 특정 노드가 다른 노드들과 얼마나 많은 직접적인 연결 관계를 맺고 있는지를 측정하여 영향력을 평가하는 중심성 지표는?", 
    choices: ["연결 중심성(Degree Centrality)", "근접 중심성(Closeness Centrality)", "매개 중심성(Betweenness Centrality)", "위세 중심성(Eigenvector Centrality)"], 
    ans: 0, 
    exp: "연결 중심성(Degree Centrality)은 자신과 직접 연결된 이웃 노드의 수가 많을수록 핵심적인 역할을 한다고 평가하는 가장 기본적이고 직관적인 지표입니다." 
  },
  { 
    subj: 3, 
    q: "앙상블 학습(Ensemble Learning) 기법 중, 복원 추출을 통해 기존 데이터와 크기가 같은 여러 개의 붓스트랩(Bootstrap) 샘플을 생성하고 각각 독립적인 모델을 학습시킨 후 결과를 투표로 결합하는 방식은?", 
    choices: ["배깅(Bagging)", "부스팅(Boosting)", "스태킹(Stacking)", "랜덤 포레스트(Random Forest)"], 
    ans: 0, 
    exp: "배깅(Bootstrap Aggregating의 약자)은 여러 개의 표본 집합을 독립적으로 훈련시켜 분산을 줄이고 과적합을 방지하는 병렬적인 앙상블 기법입니다." 
  },
  { 
    subj: 3, 
    q: "배깅(Bagging) 방식을 발전시킨 알고리즘으로, 다수의 의사결정나무 모델을 생성할 때 데이터뿐만 아니라 변수(Feature)도 무작위로 일부만 선택하여 개별 트리의 다양성을 확보하는 모델은?", 
    choices: ["에이다부스트(AdaBoost)", "랜덤 포레스트(Random Forest)", "경사 부스팅(Gradient Boosting Machine)", "선형 회귀(Linear Regression)"], 
    ans: 1, 
    exp: "랜덤 포레스트(Random Forest)는 수많은 의사결정나무들이 서로 독립적이고 다양한 기준을 가지도록 학습시켜 편향은 유지한 채 분산을 효과적으로 감소시킵니다." 
  },
  { 
    subj: 3, 
    q: "앙상블 분석 기법 중에서, 이전 모델이 예측에 실패하여 오답을 낸 데이터에 더 큰 가중치를 부여하고 다음 모델이 이를 집중적으로 학습하도록 순차적으로 진행하는 방식은?", 
    choices: ["배깅(Bagging)", "스태킹(Stacking)", "보팅(Voting)", "부스팅(Boosting)"], 
    ans: 3, 
    exp: "부스팅(Boosting)은 오분류된 데이터에 집중하여 약한 학습기들을 순차적으로 결합해 강력한 예측 모델을 만드는 기법으로 정확도가 높지만 이상치에 민감합니다." 
  },
  { 
    subj: 3, 
    q: "다양한 개별 기본 모델(Base Model)들이 예측한 결과값들을 다시 새로운 입력 데이터로 삼아, 최종적인 예측을 수행하는 메타 학습기(Meta Learner) 모델을 도입하는 앙상블 기법은?", 
    choices: ["소프트 보팅(Soft Voting)", "하드 보팅(Hard Voting)", "스태킹(Stacking)", "부스팅(Boosting)"], 
    ans: 2, 
    exp: "스태킹(Stacking)은 개별 모델들의 예측 결과를 모아 하나의 데이터 셋을 구성하고 이를 다른 메타 모델에 통과시켜 최종 정답을 도출하는 2단계 예측 방식입니다." 
  },
  { 
    subj: 3, 
    q: "모집단의 분포가 정규분포를 따른다는 확신이 없거나 표본의 크기가 매우 작을 때, 관측값의 구체적인 수치 대신 데이터의 대소 순위나 부호의 차이 등을 이용하여 수행하는 통계적 검정 방법은?", 
    choices: ["모수 검정(Parametric Test)", "비모수 검정(Non-parametric Test)", "Z-검정(Z-Test)", "F-검정(F-Test)"], 
    ans: 1, 
    exp: "비모수 검정은 모집단 분포에 대한 특정한 가정 없이 데이터의 서열 순위 등을 기반으로 검정하며 만-휘트니 U검정이나 부호 검정 등이 대표적입니다." 
  },
  { 
    subj: 3, 
    q: "다중 선형 회귀 모형에서 최적의 방정식을 도출하기 위해, 처음에는 모든 독립변수를 포함시킨 후 모델의 성능에 기여하지 못하는 변수를 하나씩 순차적으로 제거해 나가는 변수 선택 기법은?", 
    choices: ["전진 선택법(Forward Selection)", "단계별 선택법(Stepwise Selection)", "후진 제거법(Backward Elimination)", "필터링 방식(Filtering Method)"], 
    ans: 2, 
    exp: "후진 제거법(Backward Elimination)은 풀 모델(Full Model)에서 시작하여 가장 유의하지 않은 변수부터 하나씩 탈락시키며 최적의 조합을 탐색하는 방법입니다." 
  },
  { 
    subj: 3, 
    q: "선형 회귀 모델을 평가할 때 모델의 편향과 분산이 최적화되는 지점을 찾기 위해 고안된 정보 기준으로, 모델에 포함된 변수가 많아질수록 패널티(벌점)를 부여하며 값이 작을수록 좋은 모델로 평가받는 지표는?", 
    choices: ["결정계수(R-Square)", "다중공선성(VIF)", "오차합(SSE)", "AIC(Akaike Information Criterion)"], 
    ans: 3, 
    exp: "AIC(아카이케 정보 기준)와 BIC(베이즈 정보 기준)는 변수의 수에 따른 페널티를 주어 과적합을 방지하고 최적의 모델 복잡도를 결정하는 데 활용되며 값이 작을수록 우수합니다." 
  },
  { 
    subj: 3, 
    q: "의사결정나무(Decision Tree)의 분할 알고리즘 중, 목표 변수가 범주형일 때는 카이제곱 통계량을 사용하고 연속형일 때는 분산분석(ANOVA)의 F-통계량을 사용하여 다지 분리(Multi-way split)를 수행하는 알고리즘은?", 
    choices: ["CART 알고리즘", "C4.5 알고리즘", "C5.0 알고리즘", "CHAID 알고리즘"], 
    ans: 3, 
    exp: "CHAID(Chi-squared Automatic Interaction Detection) 알고리즘은 통계적 유의성 검정을 바탕으로 노드 분기 여부를 결정하는 대표적인 의사결정나무 알고리즘입니다." 
  },
  { 
    subj: 3, 
    q: "인공신경망 학습에서 모델의 예측값과 실제값의 차이(손실함수)를 최소화하기 위해, 매개변수(가중치)에 대해 함수의 편미분을 수행하여 기울기가 작아지는 아래 방향으로 가중치를 지속적으로 업데이트하는 최적화 기법은?", 
    choices: ["경사하강법(Gradient Descent)", "역전파(Backpropagation)", "교차검증(Cross Validation)", "주성분분석(PCA)"], 
    ans: 0, 
    exp: "경사하강법(Gradient Descent)은 손실 공간에서 산을 내려가듯 기울기가 0에 수렴하는 극솟점을 향해 매 스텝마다 가중치를 이동시켜 최적의 해를 찾는 방법입니다." 
  },
  { 
    subj: 3, 
    q: "인공신경망의 다중 분류 모델에서 출력층에 배치되어, 모델의 결과물인 각 클래스별 스코어를 0에서 1 사이의 확률값으로 변환하고 모든 클래스의 확률 총합이 1이 되도록 만들어주는 활성함수는?", 
    choices: ["시그모이드 함수(Sigmoid Function)", "소프트맥스 함수(Softmax Function)", "ReLU 함수", "탄젠트 함수(Tanh)"], 
    ans: 1, 
    exp: "소프트맥스 함수(Softmax Function)는 여러 개의 범주 중 하나를 예측해야 하는 다중 분류 문제의 마지막 단계에서 각 범주에 속할 확률 분포를 도출하는 역할을 합니다." 
  },
  { 
    subj: 3, 
    q: "서포트벡터머신(SVM)에서 데이터를 두 개의 집단으로 분류하는 결정 경계면인 초평면(Hyperplane)을 설정할 때, 이 경계면과 가장 가까운 거리에 위치하여 마진(Margin)을 결정짓는 핵심 데이터 샘플들을 무엇이라 하는가?", 
    choices: ["서포트 벡터(Support Vector)", "중심점(Centroid)", "핵심 노드(Core Node)", "은닉 노드(Hidden Node)"], 
    ans: 0, 
    exp: "서포트 벡터(Support Vector)는 초평면의 위치와 방향을 결정하는 데 직접적인 영향을 미치는 경계 근처의 데이터들로 다른 일반 데이터들은 경계 설정에 영향을 주지 않습니다." 
  },
  { 
    subj: 3, 
    q: "거리 기반 군집 분석에서 두 관측치 사이의 거리를 계산할 때 사용되는 수학적 척도로, 매개변수 p값의 크기에 따라 유클리드 거리(p=2)와 맨하튼 거리(p=1) 등으로 변환되는 일반화된 거리 공식은?", 
    choices: ["마할라노비스 거리(Mahalanobis Distance)", "민코프스키 거리(Minkowski Distance)", "체비쇼프 거리(Chebyshev Distance)", "표준화 거리(Standardized Distance)"], 
    ans: 1, 
    exp: "민코프스키 거리(Minkowski Distance)는 거리 공간 구조를 일반화한 공식으로 차원 공간 내 두 점 사이의 다양한 거리를 포괄적으로 표현하는 방식입니다." 
  },
  { 
    subj: 3, 
    q: "계층적 군집 분석 과정에서 여러 개의 데이터가 속한 두 군집 간의 거리를 새롭게 정의할 때, 두 군집을 하나로 합쳤을 때 발생하는 오차 제곱합의 증가량이 가장 작아지는 위치를 찾아 병합하는 거리 측정 방식은?", 
    choices: ["최단 연결법(Single Linkage)", "중심 연결법(Centroid Linkage)", "평균 연결법(Average Linkage)", "와드 연결법(Ward's Linkage)"], 
    ans: 3, 
    exp: "와드 연결법(Ward's Linkage)은 각 군집 내 데이터들의 편차 제곱합에 기반하여 군집 간의 거리를 측정하며 비슷한 크기의 둥근 군집을 형성하는 데 유리합니다." 
  },
  { 
    subj: 3, 
    q: "K-평균 군집화(K-means) 알고리즘은 평균값을 계산하므로 이상치(Outlier)에 영향을 크게 받는 단점이 있습니다. 이러한 단점을 보완하기 위해 가상의 평균 위치 대신 실제 존재하는 데이터 포인트 중 하나를 군집의 중심(대표값)으로 지정하는 변형 알고리즘은?", 
    choices: ["K-modes", "K-medoids", "DBSCAN", "계층적 군집화"], 
    ans: 1, 
    exp: "K-medoids 알고리즘은 군집의 무게 중심 대신 군집 내의 실제 데이터(Medoid)를 대표로 선정하므로 극단적인 이상치가 포함된 환경에서도 비교적 안정적인 군집을 형성합니다." 
  },
  { 
    subj: 3, 
    q: "인공신경망을 활용한 비지도 학습 군집 기법으로, 고차원의 복잡한 데이터를 2차원의 그리드 형태 지도로 매핑하여 데이터의 위상학적 구조를 시각적으로 이해하기 쉽게 표현하는 모델은?", 
    choices: ["자기조직화지도(SOM)", "합성곱 신경망(CNN)", "오토인코더(Autoencoder)", "퍼지 군집화(Fuzzy Clustering)"], 
    ans: 0, 
    exp: "자기조직화지도(Self-Organizing Map, SOM)는 출력층의 뉴런들이 승자 독식 방식으로 경쟁 학습을 수행하며 입력 데이터의 다차원적 패턴을 군집화하여 지도로 형상화합니다." 
  },
  { 
    subj: 3, 
    q: "시계열 데이터의 평활화(Smoothing) 기법 중 하나로, 과거의 모든 데이터를 활용하여 평균을 내되 가장 최근의 관측 데이터에 더 큰 가중치를 부여하고 과거로 갈수록 가중치가 기하급수적으로 감소하게 만드는 방법은?", 
    choices: ["단순 이동 평균법(Simple Moving Average)", "가중 이동 평균법(Weighted Moving Average)", "지수 평활법(Exponential Smoothing)", "자기회귀 모델(AR)"], 
    ans: 2, 
    exp: "지수 평활법(Exponential Smoothing)은 시간이 지남에 따라 정보의 가치가 줄어든다는 원리를 적용하여 최근 데이터의 트렌드를 더 민감하게 반영하는 예측 방법입니다." 
  },
  { 
    subj: 3, 
    q: "딥러닝 생성 모델 중에서, 실제 데이터와 유사한 가짜 데이터를 만들어내는 생성기(Generator) 네트워크와 이것이 진짜인지 가짜인지 판별하는 판별기(Discriminator) 네트워크가 서로 속이고 적발하는 적대적 경쟁 과정을 통해 학습하는 모델은?", 
    choices: ["순환 신경망(RNN)", "오토인코더(Autoencoder)", "GAN(Generative Adversarial Network)", "트랜스포머(Transformer)"], 
    ans: 2, 
    exp: "GAN 모델은 '경찰과 위조지폐범'의 비유로 자주 설명되며 두 네트워크가 상호 발전하는 적대적 훈련을 통해 매우 정교한 이미지나 음성 데이터를 생성해 냅니다." 
  },
  { 
    subj: 3, 
    q: "자연어 처리의 단어 표현 방식 중 원-핫 인코딩(One-hot Encoding)이나 문서단어행렬(TDM) 방식은 수만 개의 단어 사전을 사용하면서도 한 번에 극소수의 값만 1로 채워지고 나머지는 모두 0으로 구성됩니다. 이러한 구조로 인해 메모리 공간이 크게 낭비되는 특성을 일컫는 용어는?", 
    choices: ["밀집 표현(Dense Representation)", "희소 표현(Sparse Representation)", "분산 표현(Distributed Representation)", "정규 표현식(Regular Expression)"], 
    ans: 1, 
    exp: "희소 표현(Sparse Representation)은 대부분의 값이 0으로 채워진 형태를 의미하며 데이터의 차원이 방대해지고 단어 간의 유사성을 계산할 수 없는 근본적인 한계가 있습니다." 
  },
  { 
    subj: 3, 
    q: "로지스틱 회귀분석 모델이 구축되었을 때, 이 모델에 포함된 독립변수들이 종속변수를 설명하는 데 통계적으로 유의미한 역할을 하는지 모형 전체의 적합성을 검정하기 위해 사용하는 방법은?", 
    choices: ["우도비 검정(Likelihood Ratio Test)", "Z-검정(Z-Test)", "분산분석(ANOVA)", "T-검정(T-Test)"], 
    ans: 0, 
    exp: "우도비 검정(Likelihood Ratio Test)은 독립변수가 전혀 없는 기본 모형과 독립변수들이 모두 포함된 확장 모형 간의 최대 우도(Log Likelihood) 차이를 카이제곱 분포로 검정하는 기법입니다." 
  },
  { 
    subj: 3, 
    q: "연관성 분석(Association Analysis) 지표 중 품목 A를 구매한 사람이 품목 B를 구매할 확률과 전체 고객 중 B를 구매할 확률의 비율을 나타냅니다. 이 값이 1보다 크면 양의 상관관계, 1보다 작으면 음의 상관관계가 있음을 나타내는 지표는?", 
    choices: ["지지도(Support)", "신뢰도(Confidence)", "향상도(Lift)", "오즈비(Odds Ratio)"], 
    ans: 2, 
    exp: "향상도(Lift)는 단순 조건부 확률을 넘어 두 품목이 서로 독립일 때와 비교하여 얼마나 더 자주 함께 구매되는지 연관성의 강도와 방향성을 보여주는 지표입니다." 
  },
  { 
    subj: 3, 
    q: "다수의 은닉층을 가진 인공신경망 구조에서 시그모이드(Sigmoid) 활성 함수를 사용할 경우, 역전파 과정에서 연쇄 법칙(Chain Rule)에 의해 미분값이 거듭 곱해지면서 입력층에 가까워질수록 기울기가 0으로 사라져 가중치 업데이트가 멈추는 현상은?", 
    choices: ["과대적합(Overfitting)", "기울기 폭발(Exploding Gradient)", "기울기 소실 문제(Vanishing Gradient Problem)", "다중공선성(Multicollinearity)"], 
    ans: 2, 
    exp: "기울기 소실(Vanishing Gradient) 현상 때문에 깊은 신경망(Deep Learning) 학습이 어려웠으나 ReLU 함수의 도입과 가중치 초기화 기법 등을 통해 이를 해결하였습니다." 
  },
  { 
    subj: 3, 
    q: "회귀 모델의 예측 성능을 평가하는 손실 함수 지표들 중에서, 모든 관측치에 대하여 예측값과 실제값 차이의 절댓값을 합산한 후 관측치의 전체 개수로 나누어 도출한 평균 절대 오차를 의미하는 약어는?", 
    choices: ["MSE(Mean Squared Error)", "RMSE(Root Mean Squared Error)", "MAPE(Mean Absolute Percentage Error)", "MAE(Mean Absolute Error)"], 
    ans: 3, 
    exp: "MAE(Mean Absolute Error)는 각 오차의 절댓값 평균이므로 계산 방식이 직관적이며 제곱을 취하는 MSE에 비해 큰 이상치에 덜 민감하다는 특성을 가집니다." 
  },
  { 
    subj: 3, 
    q: "순환 신경망(RNN)에서 입력 데이터의 시퀀스가 길어질수록 과거의 은닉층 정보가 마지막 층까지 제대로 전달되지 못하는 현상을 무엇이라 하는가?", 
    choices: ["기울기 폭발(Exploding Gradient)", "장기의존성 문제(Long-Term Dependency Problem)", "과대적합(Overfitting)", "차원의 저주(Curse of Dimensionality)"], 
    ans: 1, 
    exp: "장기의존성 문제(Long-Term Dependency Problem)는 과거 정보가 전달되지 못하는 현상으로, 이를 극복하기 위해 망각 게이트 등을 활용하는 LSTM이나 GRU 모델이 등장했습니다." 
  },
  { 
    subj: 3, 
    q: "입력 데이터를 인코더(Encoder)로 압축한 후에 디코더(Decoder)로 형태를 재구성하여 원래의 형태로 복원하는 비지도 학습 신경망 모델은?", 
    choices: ["오토인코더(AutoEncoder)", "순환 신경망(RNN)", "합성곱 신경망(CNN)", "트랜스포머(Transformer)"], 
    ans: 0, 
    exp: "오토인코더(AutoEncoder)는 차원 축소와 데이터 복원을 학습하는 과정에서 유의미한 특징을 추출하며, VAE나 GAN과 같은 생성형 AI의 기반 모델로 활용됩니다." 
  },
  { 
    subj: 3, 
    q: "자연어 처리 모델인 트랜스포머(Transformer)에서 시퀀스의 각 요소에 가중치를 부여하여 중요한 정보에 집중하게 함으로써 장기 의존성 문제를 해결하는 핵심 메커니즘은?", 
    choices: ["합성곱(Convolution)", "서브샘플링(Subsampling)", "어텐션(Attention)", "드롭아웃(Dropout)"], 
    ans: 2, 
    exp: "어텐션(Attention) 메커니즘은 문맥을 파악할 때 예측해야 할 부분과 관련성이 높은 단어에 집중하도록 가중치를 조절하여 정보의 손실을 방지합니다." 
  },
  { 
    subj: 3, 
    q: "비정형 텍스트 데이터 분석 시, 문서 내 해당 단어의 출현 빈도(TF)와 해당 단어가 등장한 전체 문서 수의 희소성(IDF)을 함께 고려하여 단어의 중요도를 산출하는 기법은?", 
    choices: ["BOW(Bag of Words)", "TDM(Term-Document Matrix)", "Word2Vec", "TF-IDF"], 
    ans: 3, 
    exp: "TF-IDF는 단순히 문서 내에 많이 등장했다고 중요한 단어로 보지 않고, 다른 문서에서는 잘 등장하지 않는 희소성까지 동시에 고려하는 기법입니다." 
  },
  { 
    subj: 3, 
    q: "앙상블 학습 기법 중, 복원추출에 기반을 둔 붓스트랩(Bootstrap) 샘플을 여러 개 생성하고 각각 모델을 학습시킨 후 투표(Voting) 방식으로 결과를 결합하는 기법은?", 
    choices: ["배깅(Bagging)", "부스팅(Boosting)", "스태킹(Stacking)", "랜덤 포레스트(Random Forest)"], 
    ans: 0, 
    exp: "배깅(Bagging)은 여러 개의 표본 집합을 독립적으로 훈련시켜 분산을 줄이고 과대적합을 방지하는 병렬적 앙상블 기법입니다." 
  },
  { 
    subj: 3, 
    q: "배깅(Bagging) 기법을 기반으로 하되, 다수의 의사결정나무 모델을 생성하여 편향은 높게 유지하면서 분산을 감소시켜 과적합에 강한 특징을 지니는 앙상블 모델은?", 
    choices: ["에이다부스트(AdaBoost)", "랜덤 포레스트(Random Forest)", "경사 부스팅(Gradient Boosting)", "스태킹(Stacking)"], 
    ans: 1, 
    exp: "랜덤 포레스트(Random Forest)는 붓스트랩 샘플링과 변수의 무작위 선택을 통해 서로 다른 다양한 의사결정나무를 생성하여 결합하는 기법입니다." 
  },
  { 
    subj: 3, 
    q: "앙상블 분석에서 이전 모델이 잘못 분류한 데이터에 큰 가중치를 부여하여 다음 모델이 이를 집중적으로 학습하도록 순차적으로 진행하는 기법은?", 
    choices: ["보팅(Voting)", "배깅(Bagging)", "스태킹(Stacking)", "부스팅(Boosting)"], 
    ans: 3, 
    exp: "부스팅(Boosting)은 오분류된 데이터에 집중하여 약한 학습기들을 결합해 강력한 모델을 만들지만, 이상치(Outlier)에 민감하다는 단점이 있습니다." 
  },
  { 
    subj: 3, 
    q: "모집단에 대한 아무런 정보가 없어서 관측 자료가 특정 분포를 따른다고 가정할 수 없을 때, 관측값의 구체적인 수치 대신 순위나 차이의 부호 등을 이용하여 수행하는 검정 방법은?", 
    choices: ["모수 검정(Parametric Test)", "비모수 검정(Non-parametric Test)", "Z-검정(Z-Test)", "F-검정(F-Test)"], 
    ans: 1, 
    exp: "비모수 검정은 정규성 가정을 만족하지 못하거나 데이터 수가 적을 때 사용하며, 부호 검정이나 만-휘트니 U검정 등이 이에 해당합니다." 
  },
  { 
    subj: 3, 
    q: "앙상블 분석에서 여러 개의 예측 모형이 도출한 결과들을 다수결 방식으로 취합하여 최종 모델을 선택하는 결합 기법은?", 
    choices: ["스태킹(Stacking)", "배깅(Bagging)", "부스팅(Boosting)", "보팅(Voting)"], 
    ans: 3, 
    exp: "보팅(Voting)은 각기 다른 알고리즘을 가진 모델들의 예측값을 단순히 다수결로 정하는 하드 보팅과, 확률값의 평균을 사용하는 소프트 보팅으로 나뉩니다." 
  },
  { 
    subj: 3, 
    q: "단어를 벡터 공간에 표현하는 Word2Vec 임베딩 기법 중, 중심 단어를 바탕으로 주변 단어들을 예측하도록 신경망을 학습시키는 구조는?", 
    choices: ["CBOW", "Skip-Gram", "GloVe", "FastText"], 
    ans: 1, 
    exp: "Skip-Gram은 중심 단어 하나로 주변 단어들을 예측하는 구조이며, 반대로 주변 단어들로 중심 단어를 유추하는 구조는 CBOW입니다." 
  },
  { 
    subj: 3, 
    q: "인공신경망의 과대적합(Overfitting)을 방지하기 위한 기법 중 하나로, 학습 과정에서 은닉층의 퍼셉트론(노드) 일부를 무작위로 비활성화하여 학습하는 기법은?", 
    choices: ["배치 정규화(Batch Normalization)", "조기 종료(Early Stopping)", "규제(Regularization)", "드롭아웃(Dropout)"], 
    ans: 3, 
    exp: "드롭아웃(Dropout)은 특정 퍼셉트론에 대한 의존도를 낮추어 신경망이 데이터의 부분적인 특성에 과도하게 맞춰지는 현상을 방지합니다." 
  },
  { 
    subj: 3, 
    q: "연관성 분석(Association Analysis) 지표 중에서, 전체 거래 내역 중 항목 A와 항목 B가 동시에 포함된 거래의 비율을 의미하는 지표는?", 
    choices: ["지지도(Support)", "신뢰도(Confidence)", "향상도(Lift)", "이익도(Profit)"], 
    ans: 0, 
    exp: "지지도(Support)는 전체 거래에서 두 품목 A와 B가 함께 구매된 확률인 P(A∩B)로 계산되며, 연관규칙의 발생 빈도를 나타냅니다." 
  },
  { 
    subj: 3, 
    q: "로지스틱 회귀분석 모델에서 성공 확률과 실패 확률의 비를 나타내는 오즈(Odds)에 자연로그를 취한 선형 함수(로짓 함수)의 역함수로, 결과값을 0에서 1 사이의 확률로 도출하는 활성함수는?", 
    choices: ["선형 함수(Linear Function)", "시그모이드 함수(Sigmoid Function)", "ReLU 함수", "소프트맥스 함수(Softmax Function)"], 
    ans: 1, 
    exp: "시그모이드 함수(Sigmoid Function)는 로짓 함수의 역함수로, 이진 분류 모델의 출력층에서 0부터 1 사이의 연속적인 확률 값을 반환합니다." 
  },
  { 
    subj: 3, 
    q: "인공신경망에서 출력층에 적용되는 활성함수 중, 세 개 이상의 범주를 분류하는 다중 분류 모델에 사용되어 모든 클래스의 확률 총합이 1이 되도록 변환해 주는 함수는?", 
    choices: ["하이퍼볼릭 탄젠트 함수(Tanh)", "시그모이드 함수(Sigmoid Function)", "ReLU 함수", "소프트맥스 함수(Softmax Function)"], 
    ans: 3, 
    exp: "소프트맥스 함수(Softmax Function)는 각 클래스에 대한 예측 점수를 정규화하여, 모든 클래스의 예측 확률을 더했을 때 1이 되도록 만들어주는 함수입니다." 
  },
  { 
    subj: 3, 
    q: "서포트벡터머신(SVM) 알고리즘에서 선형으로 분리할 수 없는 저차원 데이터를 비선형 분류가 가능한 고차원 공간의 데이터로 변환해 주는 수학적 도구는?", 
    choices: ["활성 함수(Activation Function)", "손실 함수(Loss Function)", "목적 함수(Objective Function)", "커널 함수(Kernel Function)"], 
    ans: 3, 
    exp: "커널 함수(Kernel Function)는 데이터 벡터들을 실제로 고차원으로 변환하는 복잡한 연산 없이도 고차원 공간에서의 내적 값을 쉽게 계산해 주는 역할을 합니다." 
  },
  { 
    subj: 3, 
    q: "군집 분석에서 두 관측치 사이의 거리를 측정할 때, 변수들의 단위 차이(스케일)를 맞추는 표준화 거리에서 한 걸음 더 나아가 변수들 간의 상관관계까지 고려하여 계산하는 거리 측정 방식은?", 
    choices: ["유클리디안 거리(Euclidean Distance)", "맨하튼 거리(Manhattan Distance)", "체비셰프 거리(Chebyshev Distance)", "마할라노비스 거리(Mahalanobis Distance)"], 
    ans: 3, 
    exp: "마할라노비스 거리(Mahalanobis Distance)는 데이터의 분산-공분산 행렬을 활용하여 변수 간의 상관성을 거리 계산에 반영하는 고도화된 척도입니다." 
  },
  { 
    subj: 3, 
    q: "비계층적 군집분석 기법 중, 사전에 설정한 임의의 중심점 K개를 기준으로 데이터를 할당하고 데이터들의 평균 위치로 중심점을 계속 재설정하며 군집을 최적화하는 알고리즘은?", 
    choices: ["DBSCAN", "K-평균 군집화(K-means Clustering)", "자기조직화지도(SOM)", "퍼지 군집화(Fuzzy Clustering)"], 
    ans: 1, 
    exp: "K-평균 군집화 알고리즘은 중심점의 위치가 더 이상 변하지 않을 때까지 데이터 할당과 평균 중심점 재설정 과정을 반복합니다." 
  },
  { 
    subj: 3, 
    q: "시계열 분석 모형 중, 특정 시점의 데이터가 그 이전의 자기 자신의 과거 값들에 의해 결정된다고 가정하며, 모형의 차수를 결정할 때 부분자기상관함수(PACF) 그래프를 활용하는 모형은?", 
    choices: ["이동평균(MA) 모형", "자기회귀(AR) 모형", "자기회귀누적이동평균(ARIMA) 모형", "지수평활 모델"], 
    ans: 1, 
    exp: "자기회귀(Auto-Regressive, AR) 모형은 과거 관측값들의 선형 결합으로 현재 값을 설명하는 모형입니다." 
  },
  { 
    subj: 3, 
    q: "교차표(분할표)를 활용하는 통계적 검정 방법 중, 두 개의 범주형 변수가 서로 관계가 있는지, 아니면 서로 아무런 영향을 미치지 않는지를 카이제곱 통계량을 통해 확인하는 검정은?", 
    choices: ["독립성 검정(Test of Independence)", "동질성 검정(Test of Homogeneity)", "적합도 검정(Goodness of fit test)", "T-검정(T-Test)"], 
    ans: 0, 
    exp: "독립성 검정(Test of Independence)은 변수 간의 독립 여부를 판단하며, 동질성 검정은 여러 집단이 동일한 분포를 따르는지 비교하는 검정입니다." 
  },
  { 
    subj: 3, 
    q: "시계열 데이터를 4가지 구성 요인으로 분해할 때, 장기적인 관점에서 데이터가 일정한 방향으로 꾸준히 증가하거나 감소하는 패턴을 나타내는 요인은?", 
    choices: ["계절 요인(Seasonal Factor)", "순환 요인(Cyclical Factor)", "추세 요인(Trend Factor)", "불규칙 요인(Irregular Factor)"], 
    ans: 2, 
    exp: "추세 요인(Trend Factor)은 단기적인 변동을 넘어 시계열 자료가 장기적으로 나타내는 상승, 하락, 또는 평형 상태의 일관된 방향성을 의미합니다." 
  },
  {
    subj: 3,
    q: "빅데이터 분석 도구인 R과 Python을 비교한 설명으로 가장 옳은 것은?",
    choices: ["R은 범용 프로그래밍 언어로 웹 개발과 시스템 프로그래밍에 적합하다.", "Python은 통계 분석 전용 언어로 데이터 구조가 데이터프레임 중심이다.", "R은 통계 및 데이터 분석에 특화되었으며, CRAN을 통해 다양한 패키지를 제공한다.", "Python보다 R이 딥러닝 프레임워크 지원이 더 풍부하다."],
    ans: 2,
    exp: "R은 통계학자들이 개발한 통계 분석 전용 언어로, CRAN(Comprehensive R Archive Network)을 통해 방대한 통계/시각화 패키지를 제공합니다. Python은 범용 언어로 TensorFlow, PyTorch 등 딥러닝 프레임워크 지원이 더 풍부합니다. ☞ 암기 팁: R=통계(CRAN), Python=범용(딥러닝)"
  },
  {
    subj: 3,
    q: "다항 회귀(Polynomial Regression)에 대한 설명으로 옳은 것은?",
    choices: ["독립변수 간의 상호작용항을 제거하여 선형성을 확보하는 기법이다.", "독립변수의 거듭제곱 항을 추가하여 비선형 관계를 선형 모형으로 표현하는 기법이다.", "종속변수가 범주형일 때 사용하는 비선형 회귀 기법이다.", "두 개 이상의 종속변수를 동시에 예측하는 다변량 회귀 기법이다."],
    ans: 1,
    exp: "다항 회귀는 x², x³ 등 독립변수의 거듭제곱 항을 새로운 변수로 추가하여 비선형 패턴을 선형 모형의 형태로 적합시키는 방법입니다. 계수 추정은 여전히 최소제곱법(OLS)을 사용하므로 '선형 모형'의 범주에 포함됩니다. ☞ 암기 팁: 다항회귀 = x의 거듭제곱 추가 → 비선형 관계를 선형으로 표현"
  },
  {
    subj: 3,
    q: "Ridge와 Lasso의 장점을 결합한 정규화 회귀 기법으로, L1과 L2 페널티를 모두 사용하는 방법은?",
    choices: ["스텝와이즈 회귀(Stepwise Regression)", "편최소자승 회귀(PLS)", "주성분 회귀(PCR)", "엘라스틱 넷(Elastic Net)"],
    ans: 3,
    exp: "엘라스틱 넷(Elastic Net)은 L1 페널티(Lasso의 변수 선택 특성)와 L2 페널티(Ridge의 다중공선성 처리 특성)를 혼합(α 비율로 조합)하여 두 방법의 장점을 모두 취합니다. ☞ 암기 팁: Elastic Net = L1(Lasso) + L2(Ridge) 혼합"
  },
  {
    subj: 3,
    q: "다중 회귀분석에서 다중공선성(Multicollinearity) 진단에 사용되는 VIF(Variance Inflation Factor)의 일반적인 기준값으로 옳은 것은?",
    choices: ["VIF > 1이면 다중공선성 문제가 있다.", "VIF > 5 또는 10이면 다중공선성 문제가 있다고 판단한다.", "VIF > 100이면 다중공선성 문제가 있다.", "VIF 값이 음수이면 다중공선성 문제가 있다."],
    ans: 1,
    exp: "VIF(분산팽창인수)는 특정 독립변수가 나머지 독립변수들에 의해 얼마나 설명되는지를 나타냅니다. 일반적으로 VIF > 10(보수적으로 VIF > 5)이면 심각한 다중공선성이 있다고 판단합니다. VIF=1은 공선성이 전혀 없음을 의미합니다. ☞ 암기 팁: VIF 경고 기준 = 5 또는 10"
  },
  {
    subj: 3,
    q: "로지스틱 회귀(Logistic Regression) 모형의 계수를 추정할 때 사용하는 주된 방법은?",
    choices: ["최대우도추정법(MLE: Maximum Likelihood Estimation)", "최소자승법(OLS: Ordinary Least Squares)", "경사하강법만을 단독으로 사용한다.", "모멘트 추정법(Method of Moments)"],
    ans: 0,
    exp: "로지스틱 회귀는 종속변수가 0 또는 1의 이진형이므로 OLS가 적용되지 않습니다. 대신 관측된 데이터가 나올 우도(Likelihood)를 최대화하는 계수를 찾는 최대우도추정법(MLE)을 사용하며, 실제 계산은 반복 가중 최소자승법(IRLS)이나 경사하강법으로 수행합니다. ☞ 암기 팁: 로지스틱 회귀 계수 추정 = MLE(최대우도추정법)"
  },
  {
    subj: 3,
    q: "의사결정나무에서 과적합을 방지하기 위해 이미 성장한 나무의 불필요한 가지를 제거하는 기법은?",
    choices: ["가지치기(Pruning)", "분리(Splitting)", "부트스트래핑(Bootstrapping)", "배깅(Bagging)"],
    ans: 0,
    exp: "가지치기(Pruning)는 나무가 훈련 데이터에 과적합되지 않도록 복잡한 가지를 제거하는 기법입니다. 사전 가지치기(Pre-pruning)는 성장 중에 중단하고, 사후 가지치기(Post-pruning)는 완전히 성장한 후 가지를 제거합니다. ☞ 암기 팁: Pruning(가지치기) = 과적합 방지를 위해 나무 가지를 제거"
  },
  {
    subj: 3,
    q: "의사결정나무 알고리즘 C4.5가 분리 기준으로 사용하는 지표는?",
    choices: ["정보 이득 비율(Gain Ratio)", "지니 지수(Gini Index)", "카이제곱 통계량(Chi-square)", "F 통계량"],
    ans: 0,
    exp: "C4.5는 ID3의 정보 이득(Information Gain)이 다범주 속성에 편향되는 단점을 보완하여, 정보 이득을 분리 정보(Split Information)로 나눈 정보 이득 비율(Gain Ratio)을 분리 기준으로 사용합니다. CART는 지니 지수, CHAID는 카이제곱 통계량을 사용합니다. ☞ 암기 팁: C4.5 = Gain Ratio(정보이득비율), CART = Gini Index"
  },
  {
    subj: 3,
    q: "군집분석에서 K-평균(K-means) 알고리즘은 연속형 변수에 적합하지만, 범주형 변수가 포함된 데이터에는 어떤 알고리즘을 사용하는 것이 더 적합한가?",
    choices: ["DBSCAN", "계층적 군집분석(Hierarchical Clustering)", "자기조직화지도(SOM)", "K-최빈값(K-modes)"],
    ans: 3,
    exp: "K-modes는 K-means를 범주형 변수에 맞게 확장한 알고리즘으로, 거리 대신 불일치(Dissimilarity) 측도를 사용하고 클러스터 중심으로 평균 대신 최빈값(Mode)을 사용합니다. ☞ 암기 팁: 범주형 군집 → K-modes(최빈값 사용), 연속형 → K-means(평균 사용)"
  },
  {
    subj: 3,
    q: "퍼지 군집분석(Fuzzy Clustering)의 특징으로 옳은 것은?",
    choices: ["각 데이터 포인트가 반드시 하나의 군집에만 완전히 속한다.", "군집 간 경계가 불분명할 때 데이터 포인트가 여러 군집에 소속 확률을 가지며 속할 수 있다.", "노이즈와 이상값에 매우 강건하여 이상값 탐지에 특화되어 있다.", "군집의 수 K를 미리 지정하지 않아도 된다."],
    ans: 1,
    exp: "퍼지 군집분석(예: FCM, Fuzzy C-Means)은 각 데이터 포인트가 모든 군집에 0~1 사이의 소속도(Membership)를 가지는 방식으로, 군집 경계가 명확하지 않은 데이터에 적합합니다. 반면 K-means는 하나의 군집에만 속하는 경성(Hard) 분류입니다. ☞ 암기 팁: 퍼지 군집 = 여러 군집에 소속도(멤버십) 부여"
  },
  {
    subj: 3,
    q: "시계열 모형 중 MA(이동평균) 모형의 특징으로 옳은 것은?",
    choices: ["현재 값이 과거 자신의 값들의 선형 결합으로 표현된다.", "현재 값이 과거 오차항(백색잡음)들의 선형 결합으로 표현된다.", "비정상 시계열을 정상 시계열로 변환하는 차분 횟수를 나타낸다.", "자기상관함수(ACF)가 천천히 감소하는 특징을 갖는다."],
    ans: 1,
    exp: "MA(q) 모형은 현재 시점의 값을 과거 q개의 오차항(백색잡음, ε)의 가중 합으로 표현합니다. 반면 AR(p) 모형은 과거 자신의 관측값들의 선형 결합입니다. MA 모형은 ACF가 q 시차 이후 절단(Cut-off)되는 특징이 있습니다. ☞ 암기 팁: MA = 과거 오차항의 선형결합, AR = 과거 자신의 값의 선형결합"
  },
  {
    subj: 3,
    q: "ARIMA(p, d, q) 모형에서 d 값의 의미로 옳은 것은?",
    choices: ["자기회귀(AR) 모형의 차수로, 과거 몇 개의 값을 사용하는지를 나타낸다.", "이동평균(MA) 모형의 차수로, 과거 몇 개의 오차항을 사용하는지를 나타낸다.", "시계열을 정상 상태로 만들기 위해 필요한 차분(Differencing) 횟수를 나타낸다.", "계절성 주기를 나타내는 파라미터이다."],
    ans: 2,
    exp: "ARIMA(p, d, q)에서 p는 AR 차수, q는 MA 차수, d는 차분 횟수입니다. 비정상 시계열을 정상화하기 위해 d번 차분을 수행합니다. d=0이면 ARMA 모형과 동일합니다. 계절성 주기는 SARIMA에서 S로 표현됩니다. ☞ 암기 팁: ARIMA(p,d,q) → p=AR차수, d=차분횟수, q=MA차수"
  },
  {
    subj: 3,
    q: "계절성이 있는 시계열 데이터를 분석하기 위해 ARIMA를 확장한 모형은?",
    choices: ["VAR(Vector Autoregression)", "GARCH(Generalized ARCH)", "SARIMA(Seasonal ARIMA)", "ARCH(Autoregressive Conditional Heteroskedasticity)"],
    ans: 2,
    exp: "SARIMA(Seasonal ARIMA)는 ARIMA 모형에 계절성 성분(Seasonal AR, Seasonal MA, Seasonal Differencing)을 추가한 모형으로 ARIMA(p,d,q)(P,D,Q)s로 표기합니다. 여기서 s는 계절 주기(예: 월별 데이터면 s=12)입니다. ☞ 암기 팁: 계절성 시계열 → SARIMA = ARIMA + 계절성 성분"
  },
  {
    subj: 3,
    q: "나이브 베이즈(Naive Bayes) 분류기의 핵심 가정은?",
    choices: ["모든 독립변수가 정규분포를 따른다고 가정한다.", "각 독립변수(특성)들이 클래스가 주어졌을 때 서로 조건부 독립이라고 가정한다.", "클래스 간의 결정 경계가 항상 선형(Linear)이라고 가정한다.", "훈련 데이터가 반드시 균형 클래스 분포를 가져야 한다."],
    ans: 1,
    exp: "나이브 베이즈는 베이즈 정리를 기반으로 하며, 계산 단순화를 위해 각 특성이 클래스가 주어진 조건 하에서 서로 독립(Conditionally Independent)이라는 '순진한(Naive)' 가정을 합니다. 실제로 이 가정이 성립하지 않아도 텍스트 분류 등에서 잘 작동합니다. ☞ 암기 팁: Naive Bayes의 'Naive' = 특성 간 조건부 독립 가정"
  },
  {
    subj: 3,
    q: "잠재 의미 분석(LSA: Latent Semantic Analysis)에 대한 설명으로 옳은 것은?",
    choices: ["단어 임베딩을 위해 신경망을 사용하여 단어의 분산 표현을 학습한다.", "단어-문서 행렬에 특이값 분해(SVD)를 적용하여 잠재적 의미 구조를 추출한다.", "각 문서에서 잠재 토픽의 분포를 확률적으로 추정하는 생성 모델이다.", "문장 내 단어의 순서(문맥)를 고려하여 순차적으로 의미를 학습한다."],
    ans: 1,
    exp: "LSA(잠재 의미 분석)는 TF-IDF 등으로 구성된 단어-문서 행렬에 SVD(특이값 분해)를 적용하여 차원을 축소하고 단어와 문서 간의 잠재적 의미 관계를 추출합니다. 신경망 기반 임베딩은 Word2Vec, GloVe 등이며, 확률적 토픽 모델은 LDA입니다. ☞ 암기 팁: LSA = 단어-문서 행렬 + SVD(특이값 분해)"
  },
  {
    subj: 3,
    q: "Word2Vec과 달리 말뭉치 전체의 단어 동시 출현(Co-occurrence) 통계 정보를 활용하여 단어 벡터를 학습하는 임베딩 방법은?",
    choices: ["BERT", "FastText", "GloVe(Global Vectors for Word Representation)", "ELMo"],
    ans: 2,
    exp: "GloVe는 전체 말뭉치에서 단어 쌍의 동시 출현 빈도 행렬을 구축하고, 두 단어 벡터의 내적이 동시 출현 확률의 로그값에 근사하도록 학습합니다. FastText는 하위 단어(subword) 정보를 활용하고, BERT/ELMo는 문맥 기반 임베딩입니다. ☞ 암기 팁: GloVe = 전체 말뭉치 동시출현 통계 + 행렬 분해"
  },
  {
    subj: 3,
    q: "소셜 네트워크 분석(SNA)에서 노드의 중요도를 측정하는 중심성 지표 중, 한 노드가 다른 두 노드 간의 최단 경로 위에 위치하는 정도를 측정하는 지표는?",
    choices: ["매개 중심성(Betweenness Centrality)", "근접 중심성(Closeness Centrality)", "연결 중심성(Degree Centrality)", "고유벡터 중심성(Eigenvector Centrality)"],
    ans: 0,
    exp: "매개 중심성(Betweenness Centrality)은 노드가 네트워크에서 정보 흐름의 '교량(Bridge)' 역할을 하는 정도를 측정합니다. 연결 중심성은 직접 연결된 노드 수, 근접 중심성은 다른 모든 노드까지의 거리 합의 역수입니다. ☞ 암기 팁: 매개 중심성 = 최단 경로 위에 얼마나 자주 위치하는가"
  },
  {
    subj: 3,
    q: "생성 모델(Generative Model) 중 인코더-디코더 구조에 잠재 공간(Latent Space)에 대한 확률 분포를 도입하여 새로운 데이터를 생성할 수 있도록 한 모델은?",
    choices: ["오토인코더(Autoencoder)", "변분 오토인코더(VAE: Variational Autoencoder)", "생성적 적대 신경망(GAN)", "제한 볼츠만 머신(RBM)"],
    ans: 1,
    exp: "VAE(변분 오토인코더)는 일반 오토인코더와 달리 잠재 공간을 확률 분포(평균, 분산)로 표현하여, 분포에서 샘플링을 통해 새로운 데이터를 생성할 수 있습니다. 손실 함수는 재구성 오차와 KL 발산(KL Divergence)의 합으로 구성됩니다. ☞ 암기 팁: VAE = 오토인코더 + 잠재 공간의 확률 분포(생성 가능)"
  },
  {
    subj: 3,
    q: "앙상블 기법 중 부스팅(Boosting)에 대한 설명으로 옳은 것은?",
    choices: ["여러 모델을 병렬로 학습한 후 다수결이나 평균으로 결합하는 기법이다.", "이전 모델이 잘못 분류한 샘플에 더 높은 가중치를 부여하여 순차적으로 모델을 학습하는 기법이다.", "훈련 데이터를 여러 서브셋으로 나누어 각각 독립적인 모델을 학습하는 기법이다.", "랜덤하게 선택된 특성의 부분 집합을 사용하여 의사결정나무를 병렬로 구성하는 기법이다."],
    ans: 1,
    exp: "부스팅(Boosting)은 이전 모델의 예측 오류에 집중하여 순차적으로 약한 학습기를 결합하는 기법입니다. 대표 알고리즘으로 AdaBoost, GBM, XGBoost, LightGBM이 있습니다. 병렬로 학습하는 것은 배깅(Bagging)이며, 랜덤 특성 선택을 추가한 것이 랜덤 포레스트입니다. ☞ 암기 팁: Boosting = 순차학습 + 이전 오류에 가중치 증가"
  },
  {
    subj: 3,
    q: "딥러닝에서 기울기 소실(Vanishing Gradient) 문제를 해결하기 위해 LSTM에서 도입된 핵심 메커니즘은?",
    choices: ["드롭아웃(Dropout)을 통한 정규화", "게이트(Gate) 구조와 셀 상태(Cell State)를 이용한 정보 흐름 제어", "배치 정규화(Batch Normalization)를 통한 입력 분포 안정화", "잔차 연결(Residual Connection)을 통한 기울기 직접 전달"],
    ans: 1,
    exp: "LSTM(Long Short-Term Memory)은 입력 게이트, 망각 게이트, 출력 게이트와 셀 상태(Cell State)를 도입하여, 셀 상태를 통해 중요한 정보를 장기간 유지하고 불필요한 정보를 선택적으로 삭제함으로써 기울기 소실 문제를 완화합니다. ☞ 암기 팁: LSTM = 게이트(입력/망각/출력) + 셀 상태로 기울기 소실 해결"
  },
  {
    subj: 3,
    q: "Transformer 모델의 핵심 메커니즘으로, 입력 시퀀스의 모든 위치에서 각 위치가 다른 모든 위치와의 관계를 동시에 계산하여 문맥을 파악하는 기법은?",
    choices: ["셀프 어텐션(Self-Attention)", "순환 연결(Recurrent Connection)", "합성곱 연산(Convolution Operation)", "풀링(Pooling)"],
    ans: 0,
    exp: "셀프 어텐션(Self-Attention)은 시퀀스 내의 각 토큰이 다른 모든 토큰과의 관련성(Attention Score)을 동시에 계산하여, 문장 내 단어 간의 장거리 의존 관계를 효과적으로 포착합니다. Transformer는 이 셀프 어텐션을 병렬로 처리하므로 RNN보다 학습 속도가 빠릅니다. ☞ 암기 팁: Transformer의 핵심 = Self-Attention(모든 위치 간 관계 동시 계산)"
  },

  { 
    subj: 4, 
    q: "분류 모델의 성능을 평가하는 혼동행렬(오분류표) 지표 중, 실제 값이 True인 데이터 중에서 모델이 True라고 정확하게 맞춘 비율을 의미하는 지표는?", 
    choices: ["정밀도(Precision)", "특이도(Specificity)", "재현율(Recall)", "음성예측도(Negative Predictive Value, NPV)"], 
    ans: 2, 
    exp: "재현율(Recall) = TP/(TP+FN): 실제 양성 중 맞게 예측한 비율. 정밀도(Precision) = TP/(TP+FP): 양성 예측 중 실제 양성 비율. 특이도(Specificity) = TN/(TN+FP): 실제 음성 중 올바르게 음성 예측 비율. NPV = TN/(TN+FN): 음성 예측 중 실제 음성 비율. ☞ 암기 팁: 재현율=실제양성 잡아내는 비율(FN 최소화) / 정밀도=예측양성의 정확도(FP 최소화)" 
  },
  { 
    subj: 4, 
    q: "분류 모델의 평가지표 중 모델이 True라고 예측한 것 중에서 실제 True인 정밀도(Precision)와, 실제 True인 것 중에서 모델이 예측한 재현율(Recall) 사이의 조화평균을 구한 지표는?", 
    choices: ["F1-Score", "정확도(Accuracy)", "AUC-ROC", "Matthews Correlation Coefficient(MCC)"], 
    ans: 0, 
    exp: "F1-Score = 2×(Precision×Recall)/(Precision+Recall)로 정밀도와 재현율의 조화평균입니다. 정확도는 전체 중 올바른 예측 비율(클래스 불균형 시 부적합), AUC-ROC는 임계값 무관한 분류 성능, MCC는 불균형 이진 분류에 더 강건한 지표입니다. ☞ 암기 팁: F1=정밀도·재현율 조화평균(불균형 데이터에 정확도보다 적합)" 
  },
  { 
    subj: 4, 
    q: "분석모형 평가에서 가로축을 1-특이도(False Positive Rate)로, 세로축을 민감도(True Positive Rate)로 설정하여 모델의 분류 성능을 시각적으로 나타낸 그래프는?", 
    choices: ["ROC 커브(Receiver Operating Characteristic Curve)", "PR 커브(Precision-Recall Curve)", "학습 곡선(Learning Curve)", "이익 도표(Lift Chart)"], 
    ans: 2, 
    exp: "ROC 커브: x=FPR(1-특이도=위양성률), y=TPR(민감도=재현율). AUC=ROC 아래 면적(1=완벽, 0.5=랜덤). PR 커브는 x=재현율, y=정밀도(불균형 데이터에 더 유용). 학습 곡선은 데이터 크기 vs 성능, 이익 도표는 향상도 시각화입니다. ☞ 암기 팁: ROC=FPR vs TPR(x=위양성률, y=민감도) / PR커브=재현율 vs 정밀도" 
  },
  { 
    subj: 4, 
    q: "회귀 모델의 성능을 진단하는 손실함수(비용함수) 지표 중, 예측값과 실제값 차이의 제곱들을 모두 더한 후 데이터의 개수로 나누어 구하는 오차 지표는?", 
    choices: ["MAE(Mean Absolute Error)", "RMSE(Root Mean Squared Error)", "MAPE(Mean Absolute Percentage Error)", "MSE(Mean Squared Error)"], 
    ans: 3, 
    exp: "MSE(Mean Squared Error)는 잔차의 제곱을 평균 낸 값으로, 척도의 단위가 제곱이 되므로 오차의 크기를 직관적으로 파악하기 위해 여기에 루트를 씌운 RMSE를 자주 사용합니다." 
  },
  { 
    subj: 4, 
    q: "군집 분석의 성능을 평가하는 지표로, 자신이 속한 군집 내의 응집도는 높고 인접한 다른 군집과의 분리도는 클수록 1에 가까운 값을 반환하는 계수는?", 
    choices: ["Dunn Index", "WCSS(Within Clusters Sum of Squares)", "실루엣 계수(Silhouette Coefficient)", "F-statistic"], 
    ans: 2, 
    exp: "실루엣 계수(Silhouette Coefficient)는 데이터 포인트가 같은 군집의 데이터들과 얼마나 가깝고 다른 군집과는 얼마나 멀리 떨어져 있는지를 -1에서 1 사이의 값으로 평가합니다." 
  },
  { 
    subj: 4, 
    q: "비계층적 K-평균 군집화 등에서 최적의 군집 개수(K)를 선택하기 위해 활용하는 방법으로, 군집 수를 늘려가며 WCSS 값을 계산하여 그래프로 그렸을 때 경사가 급격히 완만해지는 지점을 찾는 기법은?", 
    choices: ["엘보우 기법(Elbow Method)", "그리드 서치(Grid Search)", "가지치기(Pruning)", "교차검증(Cross Validation)"], 
    ans: 0, 
    exp: "엘보우 기법(Elbow Method)은 비용 함수 그래프가 마치 사람의 팔꿈치처럼 꺾이며 평평해지기 시작하는 지점을 비용 대비 효율이 가장 높은 최적의 군집 수로 판단합니다." 
  },
  { 
    subj: 4, 
    q: "분석 모형의 진단 과정에서, 모델이 훈련용 데이터는 완벽에 가깝게 설명하지만 모델이 지나치게 복잡해져서 새로운 평가용 데이터에는 성능이 현저히 떨어지는 상태는?", 
    choices: ["과소적합(Underfitting)", "과대적합(Overfitting)", "편향-분산 트레이드오프(Bias-Variance Tradeoff)", "모델 드리프트(Model Drift)"], 
    ans: 0, 
    exp: "과적합: 훈련오차↓·검증오차↑. 과소적합: 훈련오차·검증오차 모두 높음. 편향-분산 트레이드오프는 과적합(분산↑·편향↓)과 과소적합(분산↓·편향↑)의 상충관계. 모델 드리프트는 배포 후 데이터 분포 변화로 인한 성능 저하입니다. ☞ 암기 팁: 과적합=훈련↑·검증↓(너무 외움) / 과소적합=훈련↓·검증↓(너무 단순)" 
  },
  { 
    subj: 4, 
    q: "모델 평가 기법 중 전체 데이터를 K개의 집단으로 나눈 뒤, K-1개 집단으로 모델을 학습시키고 나머지 1개의 집단으로 검증하는 과정을 집단을 번갈아가며 총 K번 반복하는 기법은?", 
    choices: ["K-겹 교차검증(K-Fold Cross Validation)", "홀드아웃 검증(Hold-out Validation)", "LOOCV(Leave-One-Out Cross Validation)", "층화 K-겹 교차검증(Stratified K-Fold)"], 
    ans: 3, 
    exp: "K-겹 교차검증은 K번 반복으로 모든 데이터를 검증에 활용, 과적합 방지+안정적 성능 추정. LOOCV는 K=n(데이터 적을 때), 홀드아웃은 1회 분할(빠르지만 불안정), 층화 K-겹은 클래스 비율을 유지하며 분할(불균형 데이터에 적합). ☞ 암기 팁: K-겹=K번 반복 검증 / 층화 K-겹=클래스비율 유지 / LOOCV=K=n(극단적)" 
  },
  { 
    subj: 4, 
    q: "교차 검증 방식 중 원본 데이터에서 복원 추출을 반복하여 여러 개의 새로운 데이터 세트를 생성하고 평가하는 기법으로, 데이터의 부족이나 불균형 문제를 해소하는 데 도움을 주는 방식은?", 
    choices: ["홀드아웃(Hold-out)", "K-fold 교차검증", "부트스트래핑(Bootstrapping)", "스태킹(Stacking)"], 
    ans: 2, 
    exp: "부트스트래핑(Bootstrapping)은 복원 추출을 사용하므로 한 번 추출된 데이터가 다시 추출될 수 있으며, 이 과정에서 한 번도 선택되지 않은 데이터(OOB)를 검증용으로 활용하기도 합니다." 
  },
  { 
    subj: 4, 
    q: "데이터의 적합도 검정 시, 표본 데이터의 분위수와 이론적인 정규분포의 분위수를 점으로 찍어 시각화하여 점들이 대각선(45도) 직선 위에 고르게 분포하면 정규성을 가진다고 판단하는 그래프는?", 
    choices: ["Q-Q Plot(Quantile-Quantile Plot)", "히스토그램(Histogram)", "산점도(Scatter Plot)", "박스플롯(Box Plot)"], 
    ans: 0, 
    exp: "Q-Q Plot은 데이터가 정규분포를 따르는지 시각적으로 빠르게 판단할 수 있는 도구이며, 샤피로-윌크 검정 등과 함께 모수 검정의 전제 조건을 확인할 때 자주 쓰입니다." 
  },
  { 
    subj: 4, 
    q: "모수 유의성 검정 방법 중, 두 집단의 분산이 동일한지를 검정하거나 세 개 이상 집단의 평균 차이를 확인하는 분산분석(ANOVA)에 활용되는 통계적 검정 방법은?", 
    choices: ["Z-검정(Z-Test)", "t-검정(t-Test)", "F-검정(F-Test)", "카이제곱 검정(Chi-square Test)"], 
    ans: 2, 
    exp: "F-검정(F-Test)은 주로 집단 간의 분산 비율을 비교할 때 사용되며, 회귀모형 자체가 통계적으로 유의미한지 확인할 때도 ANOVA 표의 F비를 통해 검정합니다." 
  },
  { 
    subj: 4, 
    q: "인공신경망 등의 모델 학습 시 과대적합(Overfitting)을 방지하기 위해, 훈련 오차는 계속 줄어들더라도 검증용 데이터의 오차가 오히려 증가하기 시작하는 최적의 지점에서 학습을 멈추게 하는 기법은?", 
    choices: ["조기 종료(Early Stopping)", "드롭아웃(Dropout)", "L2 정규화(Ridge Regularization)", "배치 정규화(Batch Normalization)"], 
    ans: 2, 
    exp: "조기 종료(Early Stopping)는 검증 오차가 증가하기 시작하는 시점에서 학습을 중단합니다. 드롭아웃은 노드 무작위 비활성화, L2 정규화는 가중치 크기 제한, 배치 정규화는 입력 분포 정규화입니다. ☞ 암기 팁: 조기 종료=검증오차 증가 시 학습 중단(최적 에포크 찾기) / 드롭아웃=노드 무작위 비활성화" 
  },
  { 
    subj: 4, 
    q: "경사하강법의 옵티마이저(Optimizer) 알고리즘 중, 누적된 기울기 정보를 활용하여 각 매개변수별로 학습률(Learning Rate)을 자동으로 조절하며 학습 횟수가 늘어날수록 보폭(학습률)을 점차 줄여나가는 기법은?", 
    choices: ["Adagrad", "RMSprop", "Adam", "SGD(Stochastic Gradient Descent)"], 
    ans: 1, 
    exp: "Adagrad는 파라미터별 누적 기울기 제곱합으로 학습률을 조절(많이 갱신된 파라미터 학습률↓). 단점은 학습이 진행될수록 학습률이 0에 수렴. RMSprop은 지수이동평균으로 Adagrad 단점 보완, Adam은 Momentum+RMSprop 결합, SGD는 기본 경사하강법입니다. ☞ 암기 팁: Adagrad=파라미터별 학습률 조절(누적제곱합) / RMSprop=Adagrad 단점 보완 / Adam=Momentum+RMSprop" 
  },
  { 
    subj: 4, 
    q: "모델의 하이퍼파라미터를 튜닝할 때 분석가가 지정한 모든 파라미터 후보들의 가능한 모든 조합을 하나씩 전부 대입해 보고 가장 성능이 좋은 최적의 조합을 찾아내는 방법은?", 
    choices: ["그리드 서치(Grid Search)", "랜덤 서치(Random Search)", "베이지안 최적화(Bayesian Optimization)", "하이퍼밴드(Hyperband)"], 
    ans: 3, 
    exp: "그리드 서치는 모든 조합을 전수 탐색하므로 최적값 보장되지만 시간·자원 많이 소요됩니다. 랜덤 서치는 무작위 조합 탐색(빠르지만 최적 미보장), 베이지안 최적화는 이전 결과를 확률 모델로 추정하여 효율적 탐색, 하이퍼밴드는 자원 제약 하에 빠른 탐색입니다. ☞ 암기 팁: 그리드서치=전수탐색(확실·느림) / 랜덤서치=무작위(빠름·부정확) / 베이지안=이전결과활용(효율적)" 
  },
  { 
    subj: 4, 
    q: "데이터 분포 시각화 도구인 박스플롯(Box Plot)에서, 상자 내부를 가로지르는 선으로 표시되며 데이터를 크기 순서대로 나열했을 때 정확히 정중앙에 위치하는 제2사분위수를 의미하는 대푯값은?", 
    choices: ["최빈값(Mode)", "중앙값(Median)", "평균값(Mean)", "최댓값(Maximum)"], 
    ans: 1, 
    exp: "박스플롯에서 상자 안의 선은 데이터의 중앙값(Median, Q2)을 의미하며 평균값은 표현되지 않습니다. 이를 통해 데이터의 비대칭성과 편향 정도를 시각적으로 유추할 수 있습니다." 
  },
  { 
    subj: 4, 
    q: "회귀 모델의 분산분석(ANOVA)표 항목 중, 전체 데이터의 총 변동(SST)을 구성하는 요소로서 추정된 회귀모형에 의해 설명이 가능한 변동 부분을 무엇이라 하는가?", 
    choices: ["SSR(Sum of Squares Regression)", "SSE(Sum of Squares Error)", "MSR(Mean Square Regression)", "MSE(Mean Square Error)"], 
    ans: 0, 
    exp: "SSR(Sum of Squares Regression)은 회귀식으로 설명되는 변동량이며, 모형으로 설명되지 않는 나머지 잔차의 변동량은 SSE(Sum of Squares Error)입니다." 
  },
  { 
    subj: 4, 
    q: "다중 회귀분석에서 모델에 포함되는 독립변수의 개수가 늘어날수록 실제 설명력과 무관하게 결정계수(R-Square)의 값이 무조건 커지는 문제점을 보완하기 위해 산출하는 평가지표는?", 
    choices: ["단순 결정계수(Simple R-square)", "수정된 결정계수(Adjusted R-square)", "AIC(Akaike Information Criterion)", "Mallow's Cp"], 
    ans: 1, 
    exp: "수정된 결정계수(Adjusted R-square)는 독립변수의 개수(p)와 전체 표본 수(n)에 대한 패널티를 부여하여, 여러 다중 회귀 모델의 설명력을 객관적으로 비교할 때 기본 지표로 사용됩니다." 
  },
  { 
    subj: 4, 
    q: "주성분 분석(PCA)에서 최적의 주성분 개수를 선택하기 위해 시각화하는 도구로, x축을 주성분의 개수로 하고 y축을 분산의 크기로 설정하여 그래프의 기울기가 완만해져 수평을 이루기 바로 직전 단계의 개수를 채택하는 방법은?", 
    choices: ["박스플롯(Box Plot)", "산점도(Scatter Plot)", "덴드로그램(Dendrogram)", "스크리플롯(Screeplot)"], 
    ans: 3, 
    exp: "스크리플롯(Screeplot)은 주성분이 추가될 때마다 새롭게 설명해 내는 분산의 양이 어떻게 줄어드는지를 시각적으로 보여주어 적절한 차원 축소 규모를 결정하게 해줍니다." 
  },
  { 
    subj: 4, 
    q: "공간 시각화(Spatial Visualization) 기법 중 하나로, 지도 위의 행정 구역이나 특정 영역에 데이터를 대응시킨 후 측정된 수치나 밀도에 따라 색상의 채도와 명도를 다르게 칠하여 집단화하는 그래프는?", 
    choices: ["버블 플롯 맵(Bubble Plot Map)", "등치선도(Isoline Map)", "카토그램(Cartogram)", "단계구분도(Choropleth Map)"], 
    ans: 3, 
    exp: "단계구분도(등치맵)는 각 지역별 인구수, 투표율, 범죄율 등의 지표를 직관적인 색의 농도로 나타내는 가장 대중적인 지리 데이터 시각화 방법입니다." 
  },
  { 
    subj: 4, 
    q: "다수의 변수 간의 관계 시각화 기법으로, 데이터의 상관행렬이나 교차표를 기반으로 변수 간 상관관계의 강도나 수치의 크기를 2차원 평면 격자 위에 색상의 농도로 시각화하여 밀집 상태를 파악하는 도구는?", 
    choices: ["버블 차트(Bubble Chart)", "모자이크 차트(Mosaic Chart)", "히트맵(Heatmap)", "평행 좌표 그래프(Parallel Coordinates Plot)"], 
    ans: 2, 
    exp: "히트맵(Heatmap)은 여러 변수들이 서로 어떠한 상관관계를 맺고 있는지, 그리고 다중공선성 위험이 있는 강한 상관관계의 변수 쌍이 존재하는지를 시각적으로 빠르게 스캔할 수 있게 해줍니다." 
  },
  { 
    subj: 4, 
    q: "분석모형 진단 시 모델이 과소적합(Underfitting) 상태일 때 나타나는 통계적 특성으로 올바른 것은?", 
    choices: ["낮은 분산, 높은 편향", "높은 분산, 낮은 편향", "높은 분산, 높은 편향", "낮은 분산, 낮은 편향"], 
    ans: 0, 
    exp: "과소적합(Underfitting)은 모델이 지나치게 단순하여 데이터를 충분히 설명하지 못하는 상태로, 데이터의 변동에 덜 민감하여 분산은 낮지만 실제값과의 오차인 편향은 높게 나타납니다." 
  },
  { 
    subj: 4, 
    q: "데이터 교차 검증 방법 중 단 1개의 데이터만을 검증용으로 사용하고 나머지 전체 데이터를 학습용으로 사용하는 과정을 데이터 개수만큼 반복하여, 신뢰도는 높지만 연산량이 매우 많은 기법은?", 
    choices: ["홀드아웃(Hold-out)", "K-fold 교차검증", "LOOCV(Leave-One-Out Cross Validation)", "부트스트래핑(Bootstrapping)"], 
    ans: 2, 
    exp: "LOOCV 기법은 단 하나의 관측치만 검증 데이터로 남기고 나머지를 모델 학습에 사용하는 가장 철저하고 반복적인 교차 검증 방식입니다." 
  },
  { 
    subj: 4, 
    q: "데이터의 적합도 검정 기법 중, 데이터의 표준정규점수와 선형상관관계를 측정하여 해당 데이터가 정규분포를 따르는지 여부를 통계적으로 검정하는 방법은?", 
    choices: ["샤피로 윌크 검정(Shapiro-Wilk Test)", "카이제곱 검정(Chi-square Test)", "Q-Q Plot", "콜모고로프-스미르노프 검정(K-S Test)"], 
    ans: 0, 
    exp: "샤피로 윌크 검정은 표본의 정규성을 수학적으로 평가하는 대표적인 방법이며, 카이제곱 검정은 범주형 데이터의 적합성에 쓰이고, Q-Q Plot은 시각적인 확인 도구입니다." 
  },
  { 
    subj: 4, 
    q: "모수 유의성 검정을 수행하기 위한 전제 조건 중 잔차(오차)들이 서로 독립적인지, 즉 자기상관성이 없는지를 확인하기 위해 주로 사용하는 통계적 검정 방법은?", 
    choices: ["Levene 검정", "샤피로 윌크 검정", "더빈-왓슨(Durbin-Watson) 검정", "F-검정"], 
    ans: 2, 
    exp: "더빈-왓슨 검정은 회귀 모델의 잔차들이 시간이나 순서에 따라 서로 독립적인지(자기상관성이 없는지)를 파악할 때 사용하는 통계량입니다." 
  },
  { 
    subj: 4, 
    q: "모델 최적화를 위해 사용자가 직접 수동으로 설정해 주어야 하며, 인공신경망의 은닉층 수나 노드 수, 혹은 경사하강법의 학습률 등이 이에 해당하는 변수를 무엇이라 하는가?", 
    choices: ["가중치(Weight)", "모수(Parameter)", "하이퍼파라미터(Hyperparameter)", "편향(Bias)"], 
    ans: 0, 
    exp: "하이퍼파라미터는 학습 전 사람이 설정하는 값(학습률, 층수, 노드수, 배치사이즈 등)입니다. 모수(파라미터)는 학습 중 데이터로 자동 최적화되는 값(가중치, 편향). 가중치와 편향은 신경망 파라미터의 구체적 예시입니다. ☞ 암기 팁: 하이퍼파라미터=사람이 설정(학습전) / 파라미터=모델이 학습(가중치·편향)" 
  },
  { 
    subj: 4, 
    q: "딥러닝 모델 등의 학습 단위에서, 모델이 제공된 전체 훈련 데이터 세트를 한 번 모두 사용하여 학습을 완료하는 사이클을 뜻하는 용어는?", 
    choices: ["에포크(Epoch)", "배치(Batch)", "이터레이션(Iteration)", "스텝(Step)"], 
    ans: 1, 
    exp: "에포크는 전체 훈련 데이터를 1회 완전히 학습하는 단위입니다. 배치(Batch)는 한 번에 처리하는 데이터 서브셋, 이터레이션(Iteration)=배치 수=데이터수/배치사이즈. 예: 1000개 데이터, 배치100→1에포크=10이터레이션. ☞ 암기 팁: 에포크=전체 데이터 1회 완주 / 배치=한번에 처리하는 묶음 / 이터레이션=에포크÷배치사이즈" 
  },
  { 
    subj: 4, 
    q: "하이퍼파라미터 튜닝 기법 중, 이전의 탐색 결과를 바탕으로 확률적인 추정 모델을 구축하여 다음 번에 탐색할 최적의 조합을 지능적으로 발견해 나가는 효율적인 기법은?", 
    choices: ["매뉴얼 서치(Manual Search)", "그리드 서치(Grid Search)", "랜덤 서치(Random Search)", "베이지안 최적화(Bayesian Optimization)"], 
    ans: 3, 
    exp: "베이지안 최적화는 무작위 탐색이나 전체 격자 탐색과 달리 사전 지식을 바탕으로 가장 유망한 하이퍼파라미터 구간을 예측하여 탐색 시간을 단축합니다." 
  },
  { 
    subj: 4, 
    q: "경사하강법의 옵티마이저(Optimizer) 알고리즘 중, 지수이동평균을 이용하여 최근의 기울기 정보를 더 크게 반영함으로써 Adagrad의 단점인 학습률이 급격히 0으로 감소하는 현상을 방지하는 기법은?", 
    choices: ["Momentum SGD", "Adagrad", "RMSprop", "Adam"], 
    ans: 0, 
    exp: "RMSprop은 기울기 제곱의 지수이동평균으로 학습률 조절하여 Adagrad의 학습률 급감소 문제를 보완합니다. Adagrad는 누적 제곱합(학습률 0 수렴), Momentum은 관성 활용, Adam은 Momentum+RMSprop 결합입니다. ☞ 암기 팁: RMSprop=지수이동평균으로 Adagrad 보완 / Adam=Momentum+RMSprop(가장 많이 사용)" 
  },
  { 
    subj: 4, 
    q: "경사하강법 옵티마이저 중에서 이전 기울기를 반영하여 관성으로 이동하는 모멘텀(Momentum) 기법과, 보폭을 조절하는 RMSProp 기법의 장점을 모두 결합하여 가장 널리 사용되는 알고리즘은?", 
    choices: ["Adam(Adaptive Moment Estimation)", "Adagrad", "RMSprop", "SGD with Momentum"], 
    ans: 0, 
    exp: "Adam = Momentum(1차 모멘트) + RMSprop(2차 모멘트) 결합으로 빠르고 안정적인 최적화. 편향 보정 포함. 대부분의 딥러닝 모델에서 기본 옵티마이저로 사용됩니다. Adagrad는 학습률 급감소 문제, RMSprop은 Adagrad 보완, SGD with Momentum은 모멘텀만 적용입니다. ☞ 암기 팁: Adam=Momentum+RMSprop 결합(딥러닝 기본 옵티마이저)" 
  },
  { 
    subj: 4, 
    q: "데이터의 분포와 기초 통계량을 나타내는 박스플롯(Box Plot) 그래프를 해석할 때, 시각적으로 표현된 요소를 통해 직관적으로 파악할 수 없는 지표는?", 
    choices: ["중앙값(Median)", "사분위수 범위(IQR)", "산술 평균(Arithmetic Mean)", "이상값(Outlier)"], 
    ans: 2, 
    exp: "박스플롯에서 직접 표현되는 요소: 중앙값(상자 중앙선), Q1·Q3(상자 경계), IQR(상자 높이), 이상값(점·별표), 범위(수염). 산술 평균은 박스플롯에 직접 표현되지 않습니다(왜도에 따라 중앙값과 다를 수 있음). ☞ 암기 팁: 박스플롯=중앙값·IQR·이상값 표현 / 평균은 직접 표현 안됨" 
  },
  { 
    subj: 4, 
    q: "R 통계 프로그램에서 summary() 함수를 실행하여 도출된 수치형 변수의 요약 통계량 중, 데이터 분포가 오른쪽으로 꼬리가 긴 비대칭 형태(왜도 > 0)를 띨 것으로 유추할 수 있는 조건은?", 
    choices: ["Median이 Mean보다 크다.", "Median이 Mean보다 작다.", "1st Qu.와 3rd Qu.의 간격이 매우 좁다.", "Max 값과 Min 값의 차이가 0이다."], 
    ans: 1, 
    exp: "중앙값(Median)이 산술평균(Mean)보다 작다는 것은 오른쪽의 극단적으로 큰 소수의 데이터들에 의해 평균이 끌려 올라갔다는 뜻이므로 양의 왜도를 가짐을 유추할 수 있습니다." 
  },
  { 
    subj: 4, 
    q: "변수 간 상관관계를 색상의 농도로 시각화한 히트맵(Heatmap)을 분석할 때, 두 독립변수 간의 상관계수가 1 또는 -1에 가까운 매우 짙은 색상으로 표현된 것을 발견했다면 어떤 통계적 문제를 의심해야 하는가?", 
    choices: ["다중공선성(Multicollinearity)", "이분산성(Heteroscedasticity)", "과소적합(Underfitting)", "자기상관성(Autocorrelation)"], 
    ans: 0, 
    exp: "독립변수들 간에 강한 상관관계가 존재하면 회귀 계수의 추정이 불안정해지는 다중공선성 문제가 발생하므로, PCA 등 차원 축소나 변수 제거를 고려해야 합니다." 
  },
  { 
    subj: 4, 
    q: "회귀분석의 분산분석(ANOVA)표에서 모델로 설명되지 않는 오차인 잔차 제곱합(SSE) 부분의 자유도를 구하는 올바른 공식은? (단, n은 전체 데이터 수, p는 회귀계수의 수)", 
    choices: ["n - 1", "p", "n - p - 1", "p - 1"], 
    ans: 2, 
    exp: "분산분석표에서 총 변동(SST)의 자유도는 n-1, 회귀(SSR)의 자유도는 p, 그리고 잔차(SSE)의 자유도는 총 자유도에서 회귀 자유도를 뺀 n-p-1로 계산됩니다." 
  },
  { 
    subj: 4, 
    q: "두 학교 학생들의 평균 점수 차이를 검정하기 위해 독립표본 t-검정을 수행한 결과 도출된 p-value가 0.5515이고 유의수준이 0.05일 때 내릴 수 있는 올바른 결론은?", 
    choices: ["귀무가설을 기각하여 두 학교의 평균 점수 차이는 유의하다.", "대립가설을 채택하여 두 학교의 평균 점수 차이는 유의하다.", "귀무가설을 채택하여 두 학교의 평균 점수 차이는 유의하지 않다.", "표본의 크기가 작아 어떤 가설도 채택할 수 없다."], 
    ans: 2, 
    exp: "산출된 p-value(0.5515)가 유의수준(0.05)보다 훨씬 크므로 귀무가설을 기각할 통계적 근거가 부족합니다. 따라서 평균에 차이가 없다는 귀무가설을 채택합니다." 
  },
  { 
    subj: 4, 
    q: "주성분 분석(PCA) 수행 결과를 해석할 때, 도출된 첫 번째 주성분(PC1)이 갖는 가장 핵심적인 수학적 특징은 무엇인가?", 
    choices: ["데이터의 분산이 최대가 되는 방향으로 투영된 주성분이다.", "데이터의 평균과 가장 가까운 방향으로 투영된 주성분이다.", "독립변수와 종속변수 간의 상관계수가 가장 큰 주성분이다.", "데이터의 이상값이 가장 많이 포함된 방향의 주성분이다."], 
    ans: 1, 
    exp: "PCA에서 PC1은 데이터의 분산(정보량)이 최대가 되는 방향입니다. PC2는 PC1에 직교하는 방향 중 분산이 최대, 이후 주성분도 마찬가지입니다. 주성분은 서로 직교(uncorrelated)합니다. ☞ 암기 팁: PCA PC1=분산 최대 방향 / PC2=PC1에 직교하며 분산 최대 / 주성분들은 서로 직교" 
  },
  { 
    subj: 4, 
    q: "분석 프로젝트 완료 후 비즈니스 기여도를 평가할 때 적용되는 재무적 평가 지표에 해당하지 않는 것은?", 
    choices: ["투자 대비 효과(ROI)", "순현재가치(NPV)", "총 소유 비용(TCO)", "핵심성과지표(KPI) 기반 평가"], 
    ans: 3, 
    exp: "ROI, NPV, 내부 수익률(IRR), TCO 등은 비용과 수익을 따지는 재무적 평가 요소이며, KPI 기반 평가는 업무 생산성이나 고객 만족도 등을 따지는 비즈니스 성과 평가 지표입니다." 
  },
  { 
    subj: 4, 
    q: "시간에 따른 데이터의 변화를 나타내는 시간 시각화 기법 중, 측정된 두 지점 간의 데이터 값 변화를 선으로 연결하여 변동의 방향과 추이를 직관적으로 비교하는 차트는?", 
    choices: ["막대 그래프(Bar Chart)", "경사 차트(Slope Chart)", "점 그래프(Dot Plot)", "영역 차트(Area Chart)"], 
    ans: 1, 
    exp: "경사 차트(Slope Chart)는 특정 항목이 A 시점에서 B 시점으로 변할 때 그 값이 상승했는지 하락했는지를 선의 기울기(경사)로 명확히 보여주는 시각화 도구입니다." 
  },
  { 
    subj: 4, 
    q: "시간 시각화 도구 중, 단순한 선 그래프의 형태를 유지하되 선 아래쪽 영역을 색상으로 채워 넣어 시간 흐름에 따른 누적된 변화량과 전체적인 규모감을 동시에 표현하는 차트는?", 
    choices: ["막대 그래프(Bar Chart)", "파이 차트(Pie Chart)", "영역 차트(Area Chart)", "산점도(Scatter Plot)"], 
    ans: 2, 
    exp: "영역 차트(Area Chart)는 선 아래의 면적을 시각화하여 데이터의 크기나 추세의 변화를 양적인 느낌으로 강하게 전달할 때 유용한 그래프입니다." 
  },
  { 
    subj: 4, 
    q: "공간 시각화 기법 중에서, 데이터의 값이 크거나 작은 정도를 강조하기 위해 실제 지리적 면적의 크기나 형태를 데이터 수치에 비례하도록 의도적으로 왜곡시켜 표현하는 통계 지도는?", 
    choices: ["단계구분도(Choropleth Map)", "버블 플롯 맵(Bubble Plot Map)", "등치선도(Isoline Map)", "카토그램(Cartogram)"], 
    ans: 3, 
    exp: "카토그램(왜상통계지도)은 지리적인 정확성보다는 데이터 값의 크기를 면적의 크기로 치환하여 정보의 시각적 임팩트를 극대화하는 기법입니다." 
  },
  { 
    subj: 4, 
    q: "공간 시각화 도구 중 일반적인 지도 배경 위에 각 데이터가 위치한 지점을 중심으로 원(버블)을 그리고, 해당 지역의 데이터 크기에 비례하여 원의 크기를 다르게 표시하는 기법은?", 
    choices: ["등치선도(Isoline Map)", "카토그램 히트맵(Cartogram Heatmap)", "버블 플롯 맵(Bubble Plot Map)", "단계구분도(Choropleth Map)"], 
    ans: 2, 
    exp: "버블 플롯 맵은 특정 지역의 인구 집중도나 발생 건수 등을 지도 상에 놓인 거품의 크기로 표현하여 지역별 편차를 쉽게 비교할 수 있도록 돕습니다." 
  },
  { 
    subj: 4, 
    q: "데이터의 비율과 계층 구조를 여러 사각형의 면적으로 분할하여 시각화하는 트리맵(Tree Map)이나 모자이크 차트가 공통적으로 가지는 한계점(단점)은 무엇인가?", 
    choices: ["계층 구조를 전혀 표현할 수 없다.", "전체 비율의 총합이 100%를 초과해야만 그릴 수 있다.", "데이터에 음수 값이 포함되어 있으면 면적으로 표현하기 어렵다.", "범주가 3개 이상일 때는 사용할 수 없다."], 
    ans: 2, 
    exp: "면적의 크기는 항상 0 이상의 양수를 가져야 하므로, 적자나 감소율 등 음수 값을 가지는 데이터를 시각화할 때는 트리맵이나 모자이크 차트를 적용하기 부적절합니다." 
  },
  { 
    subj: 4, 
    q: "관계 시각화 기법 중 3개의 연속형 변수를 동시에 활용하여, 첫 번째와 두 번째 변수는 x축과 y축의 좌표로 나타내고 마지막 세 번째 변수의 값은 원의 면적 크기로 표현하는 차트는?", 
    choices: ["히트맵(Heatmap)", "산점도(Scatter Plot)", "덴드로그램(Dendrogram)", "버블 차트(Bubble Chart)"], 
    ans: 3, 
    exp: "버블 차트는 산점도를 확장한 개념으로, 2차원 평면 위에서 위치와 버블의 크기라는 요소를 조합해 3차원의 데이터를 한 번에 시각화할 수 있는 도구입니다." 
  },
  { 
    subj: 4, 
    q: "비교 시각화 도구 중, 두 개의 비교 집단이 가지는 다양한 항목별 데이터를 중앙의 Y축을 기준으로 좌우 대칭이 되도록 뻗어 나가는 막대그래프 형태로 나타내어 양측을 직관적으로 비교하는 기법은?", 
    choices: ["버터플라이 차트(Butterfly Chart)", "체르노프 페이스(Chernoff Face)", "레이더 차트(Radar Chart)", "평행 좌표 그래프(Parallel Coordinates Plot)"], 
    ans: 0, 
    exp: "버터플라이 차트는 나비의 날개 모양처럼 중앙을 기준으로 두 집단의 데이터를 양옆으로 전개하여 항목별 차이를 선명하게 대조해 볼 수 있습니다." 
  },
  { 
    subj: 4, 
    q: "3개 이상의 다변량 변수에 대하여 중앙의 한 점에서부터 방사형으로 뻗어 나간 여러 개의 축에 값을 표시하고, 이 점들을 선으로 연결하여 다각형 모양으로 데이터의 전체적인 균형과 경향을 비교하는 차트는?", 
    choices: ["스타 차트/레이더 차트", "평행 좌표 그래프", "모자이크 차트", "등치선도"], 
    ans: 0, 
    exp: "스타 차트나 레이더 차트(거미줄 차트)는 캐릭터의 능력치나 기업의 부서별 성과처럼 여러 항목 간의 균형이나 강점, 약점을 시각적으로 진단하는 데 탁월합니다." 
  },
  { 
    subj: 4, 
    q: "다차원 데이터를 사람의 눈, 코, 입, 얼굴 형태 등 인간에게 친숙한 시각적 요소의 크기와 모양으로 변환하여, 작은 데이터 차이도 직관적인 표정 변화로 쉽게 인식할 수 있도록 고안된 비교 시각화 기법은?", 
    choices: ["카토그램(Cartogram)", "히트맵(Heatmap)", "평행 좌표 그래프(Parallel Coordinates)", "체르노프 페이스(Chernoff Face)"], 
    ans: 3, 
    exp: "체르노프 페이스는 인간이 미세한 얼굴 표정 차이를 매우 빠르게 인지한다는 심리학적 특징을 응용하여 복잡한 다변량 데이터를 얼굴 그림으로 형상화한 기법입니다." 
  },
  { 
    subj: 4, 
    q: "일반 대중에게 설득력 있는 메시지를 효과적으로 전달하기 위해 목적에 맞게 정보를 취합하고 시각적 형상(Graphic)을 더하여 디자인하는 가공 매체는?", 
    choices: ["인포그래픽(Infographics)", "인터랙티브 차트(Interactive Chart)", "대시보드(Dashboard)", "데이터 시각화(Data Visualization)"], 
    ans: 3, 
    exp: "인포그래픽은 정보(Info)+그래픽(Graphic)으로, 복잡한 정보를 직관적 이미지·아이콘·다이어그램으로 전달하는 매체입니다. 데이터 시각화는 데이터를 시각적으로 표현하는 총칭, 대시보드는 실시간 지표 모니터링 화면, 인터랙티브 차트는 사용자 상호작용이 가능한 차트입니다. ☞ 암기 팁: 인포그래픽=정보+그래픽(스토리+디자인 결합) / 대시보드=KPI 실시간 모니터링" 
  },
  { 
    subj: 4, 
    q: "인포그래픽을 기획하고 디자인할 때 고려해야 하는 '오컴의 면도날(Occam's Razor)' 원리가 의미하는 바로 가장 적절한 것은?", 
    choices: ["정보를 숨기기 위해 암호화 기법을 사용해야 한다.", "설득을 위해 가급적 복잡하고 다양한 그래프를 중첩해야 한다.", "어떤 현상을 설명할 때 불필요한 가정이나 복잡한 설명보다는 단순명료한 설명을 선호해야 한다.", "지도 형태의 배경을 반드시 포함하여 사실감을 높여야 한다."], 
    ans: 2, 
    exp: "오컴의 면도날은 단순성의 원칙을 대변하며, 인포그래픽 작성 시 핵심 메시지를 방해하는 복잡한 수식이나 과도한 디자인 장식을 걷어내고 명확하게 표현해야 함을 강조합니다." 
  },
  { 
    subj: 4, 
    q: "분석 결과 활용 단계에서, 테스트를 마친 새로운 분석 모형을 실제 비즈니스 운영 시스템 환경에 설치하고 작동하도록 하여 업무 프로세스에 통합하는 전체 과정을 뜻하는 용어는?", 
    choices: ["모형 배포(Model Deployment)", "모형 검증(Model Validation)", "모형 훈련(Model Training)", "모형 모니터링(Model Monitoring)"], 
    ans: 3, 
    exp: "모형 배포(Deployment)는 학습·검증된 모델을 운영 시스템에 통합하여 실제 서비스에 적용하는 전 과정입니다. 모형 검증은 성능 평가 단계, 모형 훈련은 학습 단계, 모형 모니터링은 배포 후 성능 추적 단계입니다. ☞ 암기 팁: 분석 프로세스=훈련→검증→배포→모니터링 / 배포=운영 환경 통합" 
  },
  { 
    subj: 4, 
    q: "실제 운영 중인 분석 모형의 예측 성능 저하를 방지하기 위해, 시간이 지남에 따라 새롭게 수집된 데이터 트렌드나 최신 알고리즘을 반영하여 기존 모델을 갱신하거나 재학습시키는 과정은?", 
    choices: ["데이터 수집(Data Collection)", "비즈니스 기여도 평가", "분석모형 리모델링(Remodeling)", "가설 검정(Hypothesis Testing)"], 
    ans: 2, 
    exp: "데이터 분포는 시간이 흐름에 따라 변화할 수 있으므로, 주기적인 모니터링을 거쳐 분석모형 리모델링을 수행해야만 모델의 정확도와 실효성을 지속적으로 유지할 수 있습니다." 
  },
  { 
    subj: 4, 
    q: "분류 모델의 평가지표인 F-베타(F-Beta) 스코어에서, 베타(β) 값이 1보다 클 때(예: β=2) 모델 평가 시 정밀도(Precision)보다 더 큰 비중을 두어 중요하게 고려하는 지표는?", 
    choices: ["재현율(Recall)", "정밀도(Precision)", "특이도(Specificity)", "정확도(Accuracy)"], 
    ans: 3, 
    exp: "F-β = (1+β²)×(Precision×Recall) / (β²×Precision+Recall). β>1이면 재현율(Recall) 가중치↑, β<1이면 정밀도(Precision) 가중치↑, β=1이면 F1(동일 비중). 암 진단처럼 위음성을 줄여야 할 때 β>1(재현율 중시)를 사용합니다. ☞ 암기 팁: β>1=재현율 중시(놓치면 안됨), β<1=정밀도 중시(오탐 방지)" 
  },
  { 
    subj: 4, 
    q: "분류 예측 모델의 성능을 평가하기 위해, 임의로 나눈 각 예측 확률 등급별로 모델의 반응검출율, 반응률, 향상도(Lift) 등의 정보를 산출하여 표 형태로 나타낸 것은?", 
    choices: ["분산분석표(ANOVA Table)", "이익도표(Lift Chart)", "오분류표(Confusion Matrix)", "요약 통계표(Summary Table)"], 
    ans: 1, 
    exp: "이익도표는 예측 확률이 높은 상위 등급의 고객군을 타겟팅했을 때 랜덤 추출 방식 대비 얼마나 더 많은 반응(예: 구매)을 이끌어낼 수 있는지를 보여주는 실무적인 평가 지표입니다." 
  },
  { 
    subj: 4, 
    q: "회귀 분석의 여러 예측 오차 평가지표 중, 실제값과 예측값의 차이(오차)를 실제값으로 나눈 비율의 평균을 백분율(%)로 나타내는 지표로 수식 형태가 (1/n) * Σ((y - y_hat)/y) * 100 인 것은?", 
    choices: ["MSE(Mean Squared Error)", "MPE(Mean Percentage Error)", "RMSE(Root Mean Squared Error)", "MAE(Mean Absolute Error)"], 
    ans: 1, 
    exp: "MPE는 오차의 부호가 그대로 유지되는 백분율 지표이므로, 모델이 실제값보다 전반적으로 과대 예측(양수)하는지 과소 예측(음수)하는지의 편향성 추이를 파악하는 데 용이합니다." 
  },
  { 
    subj: 4, 
    q: "군집 분석 모델의 성능을 평가하는 척도 중 하나로, 군집 간 거리의 최솟값을 군집 내 거리의 최댓값으로 나눈 비율을 사용하여 이 값이 클수록 군집이 잘 형성되었다고 판단하는 지표는?", 
    choices: ["실루엣 계수(Silhouette Coefficient)", "결정 계수(R-Square)", "Dunn Index", "WCSS"], 
    ans: 2, 
    exp: "Dunn Index는 군집 간의 거리는 멀수록 좋고(분자), 군집 내 데이터 간의 거리는 좁을수록 좋다(분모)는 군집화의 기본 원리를 충실히 반영한 상대적 평가 지표입니다." 
  },
  { 
    subj: 4, 
    q: "두 모집단에서 추출한 두 표본의 평균을 비교하기 위해 독립표본 t-검정을 수행하고자 할 때, 두 집단의 분산이 서로 같아야 한다는 등분산성(Homoscedasticity) 가정을 만족하지 못할 경우 대안으로 사용해야 하는 검정 방법은?", 
    choices: ["Z-검정(Z-Test)", "단일표본 t-검정", "F-검정(F-Test)", "Welch의 t-검정"], 
    ans: 3, 
    exp: "일반적인 독립표본 t-검정은 두 집단의 분산이 동일하다는 전제하에 수행되며, 등분산 검정(Levene 등)에서 이를 기각할 경우 등분산 가정이 필요 없는 Welch의 t-검정으로 평균 차이를 확인합니다." 
  },
  { 
    subj: 4, 
    q: "딥러닝 가중치 갱신 알고리즘(옵티마이저) 중, 매 스텝마다 이전 기울기를 일정 비율로 누적 반영하여 이동하던 방향의 관성을 유지함으로써 지역 최소값(Local Minima)을 더 쉽게 빠져나오게 돕는 기법은?", 
    choices: ["Momentum", "Adagrad", "RMSProp", "SGD"], 
    ans: 0, 
    exp: "Momentum(관성) 기법은 언덕을 내려오는 공이 가속도를 얻어 작은 웅덩이를 쉽게 넘어가듯, 기울기 진동을 완화하고 학습의 수렴 속도를 크게 향상시켜 줍니다." 
  },
  { 
    subj: 4, 
    q: "인공신경망의 과대적합(Overfitting)을 방지하기 위한 학습 및 검증 프로세스 관점의 기법으로, 에포크 진행에 따라 훈련 오차는 계속 줄어들지만 검증용 데이터의 오차가 오히려 증가하기 시작하는 시점을 파악하여 학습을 강제로 중단시키는 방법은?", 
    choices: ["조기 종료(Early Stopping)", "드롭아웃(Dropout)", "배치 정규화(Batch Normalization)", "L2 규제(Ridge Penalty)"], 
    ans: 0, 
    exp: "조기 종료는 학습 곡선 상에서 모델이 훈련 데이터의 노이즈까지 외우기 시작하여 새로운 데이터에 대한 일반화 성능이 무너지는 그 분기점을 탐지하여 학습을 멈추는 가장 효과적인 방법 중 하나입니다." 
  },
  { 
    subj: 4, 
    q: "데이터 분석 모형의 성능을 시각적으로 평가하는 도표로, 이익도표(Lift Chart)에 포함되어 있는 향상도(Lift) 지표를 Y축으로 삼아 모델의 예측력이 무작위(Random) 예측 대비 얼마나 뛰어난지를 곡선 형태로 보여주는 것은?", 
    choices: ["ROC 커브(ROC Curve)", "스크리플롯(Screeplot)", "학습 곡선(Learning Curve)", "향상도 곡선(Lift Curve)"], 
    ans: 3, 
    exp: "향상도 곡선은 이익도표의 결과를 차트로 시각화한 것으로, X축의 특정 고객 비율(%)에 도달할 때까지 예측 모델이 무작위 선정 대비 몇 배 더 많은 반응을 찾아내는지를 보여줍니다." 
  },
  { 
    subj: 4, 
    q: "기계학습 모델의 성능을 높이기 위해 수행하는 하이퍼파라미터 튜닝 기법 중, 분석가가 지정한 여러 파라미터 값들의 범위 내에서 무작위로 임의의 조합만을 추출하여 테스트함으로써 그리드 서치(Grid Search)보다 탐색 시간을 크게 절약하는 기법은?", 
    choices: ["매뉴얼 서치(Manual Search)", "베이지안 최적화(Bayesian Optimization)", "랜덤 서치(Random Search)", "전진 선택법(Forward Selection)"], 
    ans: 2, 
    exp: "랜덤 서치(Random Search)는 모든 경우의 수를 확인하지 않지만, 불필요한 파라미터 조합 탐색을 줄이고 비교적 적은 횟수의 시도만으로도 준수한 최적해를 찾는 데 효과적인 튜닝 기법입니다." 
  },
  { 
    subj: 4, 
    q: "딥러닝 등 기계학습의 학습 단위를 나타내는 용어 중에서, 전체 1000개의 데이터 세트를 메모리 한계로 인해 배치 사이즈 100개씩 나누어 학습할 때, 이 1번의 에포크(Epoch)를 완료하기 위해 모델이 파라미터를 업데이트하는 총 10번의 학습 횟수를 무엇이라 하는가?", 
    choices: ["스텝 사이즈(Step Size)", "배치(Batch)", "가중치(Weight)", "이터레이션(Iteration)"], 
    ans: 3, 
    exp: "이터레이션(Iteration)은 모델이 주어진 하나의 배치 데이터를 통과시켜 오차를 계산하고 가중치를 한 번 업데이트하는 행위를 의미하며, 전체 데이터를 배치 크기로 나눈 값과 같습니다." 
  },
  { 
    subj: 4, 
    q: "분석결과 시각화 중 시공간 데이터 탐색을 위한 방법으로, 지리적 공간을 규칙적인 사각형 격자 모양으로 분할하고 특정 시간대별로 해당 격자 내에 발생하는 데이터 수치나 밀도의 패턴을 색상으로 나타내어 지리적·시간적 변화를 동시에 분석하는 기법은?", 
    choices: ["격자 차트 결합 시각화", "버터플라이 차트", "카토그램 히트맵", "스타 차트"], 
    ans: 0, 
    exp: "시공간 데이터는 공간적 정보(지도)와 시간의 흐름이 결합된 형태이므로 지리공간을 격자 차트로 결합하여 시계열적인 변화 패턴을 추적하는 예측 분석에 매우 유용하게 쓰입니다." 
  },
  { 
    subj: 4, 
    q: "분류 모델의 예측 성능을 평가할 때, 모델이 양성으로 예측한 데이터 중에서 실제로 양성인 데이터의 비율을 의미하는 평가지표는?", 
    choices: ["정확도(Accuracy)", "정밀도(Precision)", "재현율(Recall)", "특이도(Specificity)"], 
    ans: 1, 
    exp: "정밀도(Precision)는 모델이 양성(Positive)이라고 판정한 것 중 실제 양성인 것의 비율입니다. 반면 재현율(Recall)은 실제 양성 중에서 모델이 양성으로 맞춘 비율을 뜻합니다." 
  },
  { 
    subj: 4, 
    q: "이진 분류 모델에서 실제 거짓(Negative)인 데이터를 모델이 거짓으로 올바르게 예측한 비율을 의미하는 지표는?", 
    choices: ["특이도(Specificity)", "민감도(Sensitivity)", "거짓 긍정률(False Positive Rate)", "재현율(Recall)"], 
    ans: 0, 
    exp: "특이도(Specificity)는 실제 거짓(Negative)인 전체 데이터 중에서 모델이 거짓으로 정확하게 분류해 낸 비율을 의미합니다." 
  },
  { 
    subj: 4, 
    q: "데이터 클래스 불균형이 심할 때, 정밀도(Precision)와 재현율(Recall) 중 어느 한쪽으로 치우치지 않도록 두 지표의 조화평균을 구하여 모델을 평가하는 지표는?", 
    choices: ["F1-스코어(F1-Score)", "ROC 곡선(ROC Curve)", "카파 통계량(Kappa Statistic)", "향상도(Lift)"], 
    ans: 0, 
    exp: "F1-스코어(F1-Score)는 정밀도와 재현율의 조화평균으로, 한 지표가 비정상적으로 높고 다른 지표가 낮을 때 이를 보정하여 성능을 균형 있게 평가합니다." 
  },
  { 
    subj: 4, 
    q: "ROC 곡선(Receiver Operating Characteristic Curve)에 대한 설명으로 올바르지 않은 것은?", 
    choices: ["x축은 위양성률(FPR, 1-특이도)이고 y축은 민감도(TPR)이다.", "AUC값이 1에 가까울수록 분류 성능이 우수하다.", "AUC가 0.5이면 완벽한 분류 성능을 의미한다.", "임계값을 변경하더라도 ROC 곡선의 형태는 변하지 않는다."], 
    ans: 2, 
    exp: "AUC=0.5는 대각선(랜덤 분류기, 무작위 예측)을 의미하며 완벽한 성능이 아닙니다. AUC=1이 완벽한 분류기입니다. ROC 곡선은 다양한 임계값에서의 FPR·TPR을 그린 것이며, 임계값이 바뀌어도 곡선 형태는 동일합니다(AUC는 임계값 무관). ☞ 암기 팁: AUC=1(완벽), AUC=0.5(랜덤·무쓸모), AUC<0.5(랜덤보다 나쁨→예측 반전하면 좋음)" 
  },
  { 
    subj: 4, 
    q: "회귀 모델의 성능 평가지표 중, 실제값과 예측값의 오차를 절댓값으로 변환하여 평균을 낸 것으로 이상치(Outlier)에 상대적으로 덜 민감한 지표는?", 
    choices: ["MSE(Mean Squared Error)", "RMSE(Root Mean Squared Error)", "MAE(Mean Absolute Error)", "MAPE(Mean Absolute Percentage Error)"], 
    ans: 2, 
    exp: "MAE(Mean Absolute Error)는 오차의 절댓값 평균이므로, 오차를 제곱하여 계산하는 MSE나 RMSE에 비해 극단적인 이상치의 영향을 적게 받습니다." 
  },
  { 
    subj: 4, 
    q: "회귀 모델 평가지표 중 실제값 대비 오차의 비율을 백분율로 나타내어 서로 다른 단위의 데이터 모델 간 성능을 비교할 때 유용한 지표는?", 
    choices: ["MSE(Mean Squared Error)", "RMSE(Root Mean Squared Error)", "MAE(Mean Absolute Error)", "MAPE(Mean Absolute Percentage Error)"], 
    ans: 3, 
    exp: "MAPE(Mean Absolute Percentage Error)는 오차를 실제값으로 나눈 비율의 평균이므로 척도에 의존하지 않고 백분율로 모델 성능을 직관적으로 파악할 수 있습니다." 
  },
  { 
    subj: 4, 
    q: "군집 분석의 결과를 평가할 때, 각 데이터가 자신이 속한 군집 내에서는 얼마나 밀집되어 있고 다른 군집과는 얼마나 떨어져 있는지를 계산하여 -1에서 1 사이의 값으로 나타내는 지표는?", 
    choices: ["실루엣 계수(Silhouette Coefficient)", "Dunn Index", "엘보우 기법(Elbow Method)", "지니 지수(Gini Index)"], 
    ans: 0, 
    exp: "실루엣 계수(Silhouette Coefficient)가 1에 가까울수록 데이터가 올바른 군집에 잘 할당되었음을 의미하며, 0에 가까우면 군집 간 경계에 위치함을 뜻합니다." 
  },
  { 
    subj: 4, 
    q: "연관규칙 분석(Association Rule)의 평가지표 중, 품목 A를 구매한 거래 중에서 품목 B를 함께 구매한 거래의 비율을 의미하는 조건부 확률은?", 
    choices: ["신뢰도(Confidence)", "지지도(Support)", "향상도(Lift)", "이익도(Profit)"], 
    ans: 0, 
    exp: "신뢰도(Confidence)는 품목 A를 구매했을 때 품목 B를 구매할 확률(P(B|A))로, 연관규칙의 강도와 신뢰성을 나타냅니다." 
  },
  { 
    subj: 4, 
    q: "연관규칙 분석에서 두 품목이 서로 독립일 때와 비교하여, 두 품목이 함께 구매되는 빈도가 얼마나 증가하는지를 나타내며 1보다 클 경우 양의 상관관계를 의미하는 지표는?", 
    choices: ["지지도(Support)", "신뢰도(Confidence)", "향상도(Lift)", "유의수준(Significance Level)"], 
    ans: 2, 
    exp: "향상도(Lift)가 1이면 두 품목은 독립적이며, 1보다 크면 함께 구매될 확률이 높은 양의 상관관계, 1보다 작으면 대체재와 같은 음의 상관관계를 갖습니다." 
  },
  { 
    subj: 4, 
    q: "비즈니스 기여도 평가 관점에서, 예측 모델을 도입하여 특정 마케팅 대상을 선정했을 때 모델을 사용하지 않은 무작위 추출 방식에 비해 얼마나 더 높은 반응률(예: 구매율)을 얻을 수 있는지 시각적으로 보여주는 표는?", 
    choices: ["이익 도표(Lift Chart)", "혼동 행렬(Confusion Matrix)", "분산분석표(ANOVA Table)", "의사결정나무(Decision Tree)"], 
    ans: 0, 
    exp: "이익 도표(Lift Chart)는 모델의 예측 점수 순으로 고객을 등급화한 후, 각 등급별로 향상도가 어떻게 변화하는지 측정하여 모델의 실무적 유용성을 평가합니다." 
  },
  { 
    subj: 4, 
    q: "데이터의 변동폭을 확인하거나 이상치를 식별할 때 유용한 시각화 도구로, 사분위수(Quartile)를 기반으로 데이터의 산포도와 중앙값을 상자와 선으로 표현하는 그래프는?", 
    choices: ["히스토그램(Histogram)", "산점도(Scatter Plot)", "박스 플롯(Box Plot)", "히트맵(Heatmap)"], 
    ans: 2, 
    exp: "박스 플롯(Box Plot)은 제1사분위수, 중앙값, 제3사분위수를 기반으로 상자를 그리고 정상 범위를 벗어난 이상치(Outlier)를 점으로 명확히 표현합니다." 
  },
  { 
    subj: 4, 
    q: "두 연속형 변수 사이의 상관관계와 데이터의 분포 패턴을 확인하기 위해, 2차원 평면의 가로축과 세로축에 각 데이터를 점으로 찍어 시각화하는 도구는?", 
    choices: ["산점도(Scatter Plot)", "모자이크 차트(Mosaic Chart)", "방사형 차트(Radar Chart)", "선 그래프(Line Graph)"], 
    ans: 0, 
    exp: "산점도(Scatter Plot)는 두 수치형 변수 간의 선형 관계, 비선형 관계, 군집 형성 여부, 그리고 이상치 존재 등을 직관적으로 파악할 수 있는 시각화 기법입니다." 
  },
  { 
    subj: 4, 
    q: "다변량 데이터의 관계를 파악하기 위해 여러 변수를 나란히 세로축으로 배치하고, 각 관측치를 선으로 연결하여 변수들 사이의 군집성이나 상관성을 파악하는 시각화 기법은?", 
    choices: ["평행 좌표 그래프(Parallel Coordinates Plot)", "산점도 행렬(Scatter Plot Matrix)", "히트맵(Heatmap)", "버블 차트(Bubble Chart)"], 
    ans: 0, 
    exp: "평행 좌표 그래프(Parallel Coordinates Plot)는 3차원 이상의 고차원 데이터를 다차원 공간의 수평축에 매핑하여 선의 흐름을 통해 데이터 패턴을 분석하는 시각화 기법입니다." 
  },
  { 
    subj: 4, 
    q: "지도 시각화 기법 중 특정 지리적 영역 내에서 데이터의 값이 크고 작은 정도를 색상의 농도나 명도로 구분하여 각 지역 간의 차이를 비교하는 기법은?", 
    choices: ["등치선도(Isoline Map)", "단계구분도(Choropleth Map)", "카토그램(Cartogram)", "버블 플롯 맵(Bubble Plot Map)"], 
    ans: 1, 
    exp: "단계구분도(Choropleth Map)는 인구 밀도나 투표율 같은 지표를 행정 구역 등 단위 지역별로 색칠하여 지리적 차이를 직관적으로 파악하는 공간 시각화 기법입니다." 
  },
  { 
    subj: 4, 
    q: "시간의 흐름에 따른 데이터의 증감을 표현하는 선 그래프의 한계를 보완하기 위해, 선 아래의 공간에 색상을 채워 넣어 전체적인 규모와 누적된 양을 시각적으로 강조하는 차트는?", 
    choices: ["막대 그래프(Bar Chart)", "영역 차트(Area Chart)", "폭포수 차트(Waterfall Chart)", "파이 차트(Pie Chart)"], 
    ans: 1, 
    exp: "영역 차트(Area Chart)는 시간에 따른 추세뿐만 아니라 값의 절대적인 크기(면적)를 눈에 띄게 보여주어 추세와 규모를 동시에 파악할 때 유용합니다." 
  },
  { 
    subj: 4, 
    q: "전체 데이터가 여러 세부 항목으로 구성되어 있을 때, 사각형 화면을 각 항목이 차지하는 비율만큼 면적으로 쪼개어 계층 구조와 크기를 한눈에 비교할 수 있게 만든 차트는?", 
    choices: ["트리맵(Treemap)", "레이더 차트(Radar Chart)", "스파크라인(Sparkline)", "산점도(Scatter Plot)"], 
    ans: 0, 
    exp: "트리맵(Treemap)은 데이터의 계층 구조와 비율을 사각형 면적 크기로 시각화하며, 데이터 범주가 많아도 제한된 공간에 효과적으로 표현할 수 있습니다." 
  },
  { 
    subj: 4, 
    q: "다변량 데이터의 값을 행렬(Matrix) 형태로 배열하고, 각 값의 크기에 따라 각기 다른 색상이나 명암을 부여하여 상관관계나 데이터의 군집 패턴을 직관적으로 보여주는 시각화 도구는?", 
    choices: ["히트맵(Heatmap)", "버터플라이 차트(Butterfly Chart)", "평행 좌표 그래프(Parallel Coordinates)", "카토그램(Cartogram)"], 
    ans: 0, 
    exp: "히트맵(Heatmap)은 변수 간의 상관계수나 시계열 및 공간 데이터를 바둑판 형태의 색상 변화로 나타내어 정보의 밀집도를 파악하는 데 유용합니다." 
  },
  { 
    subj: 4, 
    q: "빅데이터 분석 결과를 보고서로 작성할 때 가장 중요하게 고려해야 할 핵심 요소로 올바르지 않은 것은?", 
    choices: ["분석 방법론의 수학적 증명 과정 상세 서술", "비즈니스 문제 해결을 위한 실행 가능한 인사이트(Actionable Insight) 제공", "독자의 수준과 이해도를 고려한 명확한 용어 사용", "시각화 도구를 활용한 분석 결과의 요약과 강조"], 
    ans: 0, 
    exp: "분석 보고서는 실무자와 의사결정자를 대상으로 하므로, 복잡한 수학적 알고리즘 증명보다는 결과가 갖는 비즈니스적 의미와 대응 방안(Insight)을 제시하는 것이 중요합니다." 
  },
  { 
    subj: 4, 
    q: "데이터 시각화의 요소 중 정보 수용자가 직관적으로 내용을 이해하고 흥미를 느낄 수 있도록, 데이터와 분석 결과를 서사 구조를 갖춘 이야기 형태로 전달하는 기법을 무엇이라 하는가?", 
    choices: ["데이터 시각화(Data Visualization)", "데이터 스토리텔링(Data Storytelling)", "인포그래픽(Infographics)", "대시보드(Dashboard)"], 
    ans: 0, 
    exp: "데이터 스토리텔링은 데이터+시각화+서사(내러티브)를 결합하여 의사결정자가 인사이트를 행동으로 연결하도록 돕습니다. 데이터 시각화는 총칭, 인포그래픽은 이미지 중심의 정보 디자인, 대시보드는 실시간 지표 모니터링입니다. ☞ 암기 팁: 스토리텔링=데이터+시각화+서사(행동 유도) / 인포그래픽=정보+그래픽(직관적 전달)" 
  },
  { 
    subj: 4, 
    q: "분석 모형을 실제 운영 환경에 배포(Deployment)하는 과정에 대한 설명으로 올바르지 않은 것은?", 
    choices: ["모델이 운영 시스템과 연동되도록 API 형태 등으로 개발한다.", "실제 운영 환경에서도 분석 모형의 예측 성능이 유지되는지 검증해야 한다.", "배포 후에는 모델을 절대 수정하지 않고 영구적으로 사용해야 한다.", "IT 부서 및 현업 사용자와의 협업을 통해 시스템 통합을 진행한다."], 
    ans: 2, 
    exp: "배포 이후에도 데이터의 분포나 비즈니스 환경이 변화하면 예측 성능이 저하될 수 있으므로, 주기적인 모니터링과 모델 재학습(Retraining)을 통해 모형을 개선해야 합니다." 
  },
  { 
    subj: 4, 
    q: "배포된 분석 모형의 성능 저하 현상인 모델 드리프트(Model Drift)를 감지하기 위해 모니터링해야 하는 주요 대상에 해당하지 않는 것은?", 
    choices: ["입력 데이터의 분포 변화(Data Drift)", "타깃 변수와 예측값의 관계 변화(Concept Drift)", "분석 조직의 인사 변동 이력", "모델의 평가지표(Accuracy, F1-Score 등) 하락"], 
    ans: 2, 
    exp: "모델 드리프트를 감지하기 위해서는 입력 데이터 패턴의 변화, 예측 타깃의 개념적 변화, 그리고 모델의 오분류율 등 평가지표를 지속적으로 모니터링해야 합니다." 
  },
  { 
    subj: 4, 
    q: "운영 중인 분석 모형을 새로운 모형으로 대체하고자 할 때, 기존 운영 모델(Champion)과 새로운 후보 모델(Challenger)을 병행하여 실행하며 성능을 비교한 뒤 교체 여부를 결정하는 전략은?", 
    choices: ["K-fold 교차검증(K-fold Cross Validation)", "챔피언-챌린저(Champion-Challenger) 테스트", "엘보우 기법(Elbow Method)", "그리드 서치(Grid Search)"], 
    ans: 1, 
    exp: "챔피언-챌린저(Champion-Challenger) 방식은 시스템 장애나 성능 저하 리스크를 최소화하기 위해 실시간 환경에서 기존 모델과 신규 모델의 성능을 비교 검증하는 배포 전략입니다." 
  },
  { 
    subj: 4, 
    q: "모델 배포 후 새로운 서비스 정책이나 분석 결과를 사용자에게 적용할 때, 전체 사용자를 무작위로 두 집단으로 나누어 한 집단에는 기존 방식을, 다른 집단에는 새로운 방식을 제공하여 두 집단의 반응 차이를 통계적으로 검증하는 기법은?", 
    choices: ["A/B 테스트(A/B Testing)", "부트스트래핑(Bootstrapping)", "연관 분석(Association Analysis)", "다차원 척도법(MDS)"], 
    ans: 0, 
    exp: "A/B 테스트(A/B Testing)는 인과관계를 파악하고 두 가지 대안 중 더 나은 성과를 보이는 방안을 의사결정에 반영하기 위해 널리 쓰이는 무작위 대조 실험입니다." 
  },
  { 
    subj: 4, 
    q: "예측 모델의 예측 결과를 현업 사용자가 직관적으로 이해할 수 있도록, 블랙박스 모델의 예측 과정과 각 변수의 중요도를 설명 가능하게 만들어주는 기술 분야를 무엇이라 하는가?", 
    choices: ["설명 가능한 인공지능(XAI: eXplainable AI)", "강화학습(Reinforcement Learning)", "연합학습(Federated Learning)", "전이학습(Transfer Learning)"], 
    ans: 2, 
    exp: "XAI(설명 가능한 AI)는 블랙박스 모델의 예측 근거를 사람이 이해할 수 있도록 설명하는 기술(SHAP, LIME, 특성 중요도 등). 강화학습은 보상 기반 학습, 연합학습은 분산 데이터 공동 학습, 전이학습은 사전 학습 모델 재사용입니다. ☞ 암기 팁: XAI=블랙박스 모델을 설명가능하게(SHAP·LIME 등 활용)" 
  },
  { 
    subj: 4, 
    q: "빅데이터의 시각화 원칙 중 데이터-잉크 비율(Data-Ink Ratio)을 최대화하라는 원칙이 의미하는 바는?", 
    choices: ["다양한 색상을 사용하여 그래프를 화려하게 꾸며야 한다.", "그래프에서 정보를 전달하지 않는 불필요한 장식이나 격자선 등의 잉크 사용을 최소화해야 한다.", "데이터의 양을 늘려서 그래프가 비어 보이지 않게 해야 한다.", "항상 3차원 형태의 그래프를 사용하여 입체감을 주어야 한다."], 
    ans: 1, 
    exp: "데이터-잉크 비율(Data-Ink Ratio) 이론은 정보 전달에 기여하지 않는 불필요한 장식 요소를 제거하여 데이터 시각화의 명료성과 직관성을 극대화해야 한다는 디자인 원칙입니다." 
  },
  { 
    subj: 4, 
    q: "이진 분류 모델에서 최적의 임계값(Threshold)을 결정할 때 주로 고려하는 사항으로 적절하지 않은 것은?", 
    choices: ["의료 진단 모델의 경우 질병을 놓치는 것을 방지하기 위해 재현율(Recall)을 높이는 방향으로 임계값을 조절한다.", "스팸 메일 분류 시 정상 메일이 스팸으로 분류되는 것을 막기 위해 정밀도(Precision)를 높이는 임계값을 선택한다.", "비즈니스 비용 구조를 분석하여 오분류로 인해 발생하는 비용을 최소화하는 지점을 찾는다.", "임계값은 무조건 0.5로 고정하여 모든 모델의 통일성을 유지해야 한다."], 
    ans: 3, 
    exp: "임계값(Threshold)은 분류 목적과 비즈니스 상황에 따라 양성(Positive) 예측의 위험 대비 수익을 고려하여 0.5가 아닌 다른 값으로 유연하게 조절해야 합니다." 
  },
  { 
    subj: 4, 
    q: "과대적합(Overfitting) 현상을 진단하는 방법으로, 훈련 데이터에 대한 학습 횟수(또는 모델의 복잡도)가 증가함에 따라 훈련 오차와 검증 오차의 변화 추이를 한 화면에 그려 비교하는 그래프는?", 
    choices: ["ROC 곡선(ROC Curve)", "학습 곡선(Learning Curve)", "스크리플롯(Screeplot)", "로렌츠 곡선(Lorenz Curve)"], 
    ans: 1, 
    exp: "학습 곡선(Learning Curve)을 그렸을 때 훈련 오차는 계속 감소하지만 검증 오차가 다시 상승하기 시작하는 패턴을 보이면 과대적합이 발생하고 있음을 진단할 수 있습니다." 
  },
  { 
    subj: 4, 
    q: "모델 평가 지표 중, 우연에 의해 모델이 정답을 맞출 확률을 배제하고 두 평가자나 모델 간의 분류 결과가 얼마나 일치하는지를 나타내는 통계량으로, 1에 가까울수록 완벽한 일치를 의미하는 지표는?", 
    choices: ["코헨의 카파 계수(Cohen's Kappa Coefficient)", "피어슨 상관계수(Pearson Correlation)", "R-Square", "스피어만 상관계수(Spearman Correlation)"], 
    ans: 0, 
    exp: "코헨의 카파 계수(Cohen's Kappa)는 범주형 데이터 분류 모델 평가 시 클래스 분포가 심하게 불균형할 때 우연히 맞출 확률을 제외하고 평가하는 일치도 지표입니다." 
  },
  { 
    subj: 4, 
    q: "회귀분석 모델 구축 후 잔차(Residual) 분석을 수행할 때, 오차항이 가져야 하는 기본 가정 중 오차의 분산이 독립변수의 값에 상관없이 항상 일정하게 나타나야 한다는 가정은?", 
    choices: ["선형성(Linearity)", "정규성(Normality)", "독립성(Independence)", "등분산성(Homoscedasticity)"], 
    ans: 3, 
    exp: "잔차 산점도를 그렸을 때 잔차들이 특정 패턴을 띠며 퍼지지 않고 일정한 폭(분산)을 유지해야 등분산성(Homoscedasticity) 가정을 만족하는 정상적인 회귀 모델입니다." 
  },
  { 
    subj: 4, 
    q: "분석 결과를 기반으로 의사결정을 수행할 때 발생할 수 있는 데이터 윤리 문제로, 학습 데이터에 내재된 특정 인종이나 성별에 대한 차별적 패턴을 인공지능이 그대로 모방하여 불공정한 예측 결과를 내놓는 현상은?", 
    choices: ["과대적합(Overfitting)", "정보 누출(Data Leakage)", "차원의 저주(Curse of Dimensionality)", "알고리즘 편향(Algorithmic Bias)"], 
    ans: 3, 
    exp: "알고리즘 편향(Algorithmic Bias)은 편향된 데이터를 학습한 모델이 불평등이나 차별을 알고리즘적으로 재생산하는 문제로, 모델 배포 시 반드시 윤리적 검토가 필요합니다." 
  },
  { 
    subj: 4, 
    q: "다수의 모델을 결합하여 예측 성능을 향상시키는 앙상블 모형(Ensemble Model)의 일반적인 장단점과 관련이 없는 것은?", 
    choices: ["단일 모델에 비해 과대적합 문제를 완화할 수 있다.", "단일 모델보다 예측 정확도가 높고 안정적이다.", "학습에 필요한 시간과 계산 연산량이 많이 소모된다.", "모델의 내부 구조가 투명해져서 각 변수의 영향력을 해석하기가 매우 쉽다."], 
    ans: 3, 
    exp: "앙상블 모형은 여러 모델의 결과를 결합하므로 성능은 향상되지만, 내부 로직이 복잡한 블랙박스(Black Box) 형태가 되어 결과 도출 과정의 해석력이 오히려 떨어지는 단점이 있습니다." 
  },
  { 
    subj: 4, 
    q: "모형 평가 시 교차 검증(Cross Validation) 기법을 사용하는 주된 이유로 가장 적절한 것은?", 
    choices: ["모델의 학습 속도를 획기적으로 높이기 위해", "하이퍼파라미터의 개수를 줄이기 위해", "특정 훈련 데이터 세트에만 최적화되는 것을 방지하고 일반화 성능을 객관적으로 평가하기 위해", "데이터에 존재하는 모든 이상치(Outlier)를 자동으로 삭제하기 위해"], 
    ans: 2, 
    exp: "교차 검증은 전체 데이터를 분할하여 학습과 검증을 반복함으로써, 우연히 모델 성능이 높거나 낮게 측정되는 편향을 없애고 모델의 일반화 성능(Generalization)을 정확히 평가하기 위한 필수 기법입니다." 
  },
  { 
    subj: 4, 
    q: "오차 행렬(Confusion Matrix)에서 계산할 수 있는 평가지표 중, '민감도(Sensitivity) + 특이도(Specificity) - 1' 로 계산되며 임계값에 상관없이 모델 분류 성능의 최적값을 파악하기 위해 활용되는 지표는?", 
    choices: ["Youden의 지수(Youden's Index)", "F1-스코어(F1-Score)", "오즈비(Odds Ratio)", "지니 지수(Gini Index)"], 
    ans: 0, 
    exp: "Youden's Index(유든 지수)는 TPR(민감도)과 FPR(1-특이도)의 차이를 최대로 만드는 점을 찾아 ROC 곡선 상에서 최적의 분류 임계값을 결정할 때 널리 쓰이는 지표입니다." 
  },
  { 
    subj: 4, 
    q: "정보 시각화 매체인 인포그래픽(Infographics)의 설계 요소 중, 텍스트가 없어도 어떤 데이터를 의미하는지 알 수 있도록 픽토그램(Pictogram)이나 아이콘 등 그래픽 요소를 활용하여 직관성을 높이는 설계 과정은?", 
    choices: ["스토리텔링 구상", "시각적 메타포(Visual Metaphor) 적용", "데이터 전처리", "하이퍼파라미터 최적화"], 
    ans: 1, 
    exp: "시각적 메타포(Visual Metaphor)는 데이터를 단순한 막대나 선이 아닌 개념과 연관된 이미지로 은유하여 수용자가 복잡한 수치를 빠르고 깊게 이해하도록 돕는 인포그래픽 핵심 기술입니다." 
  },
  { 
    subj: 4, 
    q: "모델 모니터링 과정에서 모델의 예측값 분포나 입력 변수의 중요도가 학습 당시와는 완전히 다르게 지속적으로 어긋나기 시작하는 것이 감지되었을 때 취해야 할 가장 올바른 조치는?", 
    choices: ["새로운 트렌드를 반영한 데이터를 수집하여 모델을 재학습(Retraining)시킨다.", "기존 모델의 가중치를 영구적으로 고정한다.", "경고 메시지를 무시하고 앙상블 기법만 추가로 적용한다.", "운영 환경 서버의 메모리를 증설한다."], 
    ans: 0, 
    exp: "시간 흐름에 따른 데이터 변화(Data Drift)가 발생하여 성능이 저하된 모델은 반드시 최신 데이터를 반영한 리모델링(재학습)이나 하이퍼파라미터 재조정을 통해 생명주기를 연장해야 합니다." 
  },
  { 
    subj: 4, 
    q: "선형 회귀 모델의 설명력을 나타내는 결정계수(R-Square)에 대한 설명으로 올바르지 않은 것은?", 
    choices: ["0에서 1 사이의 값을 가지며 1에 가까울수록 설명력이 높다.", "총 변동(SST) 중에서 회귀모형으로 설명되는 변동(SSR)의 비율이다.", "다중 회귀분석에서는 변수가 늘어날수록 무조건 값이 작아지는 특성이 있다.", "변수 추가에 따른 페널티를 부여한 수정된 결정계수(Adjusted R-Square)를 사용하여 다중 회귀 모델 간 성능을 비교한다."], 
    ans: 2, 
    exp: "결정계수는 독립변수가 추가될수록 모델의 실질적인 기여도와 무관하게 그 값이 증가하는 단점이 있으며, 이를 보완한 것이 수정된 결정계수(Adjusted R-Square)입니다." 
  },
  { 
    subj: 4, 
    q: "분석 보고서 작성 원칙 중, 최종 의사결정자가 한정된 시간 내에 핵심 결과를 파악할 수 있도록 보고서의 맨 앞부분에 프로젝트의 배경, 주요 결과, 비즈니스 시사점을 1~2페이지 분량으로 압축하여 제시하는 항목은?", 
    choices: ["탐색적 자료분석(EDA) 결과", "요약 보고서(Executive Summary)", "데이터 전처리 및 결측치 처리 로그", "알고리즘 소스 코드(Source Code)"], 
    ans: 1, 
    exp: "경영진 요약본(Executive Summary)은 바쁜 의사결정권자가 보고서 전체를 읽지 않고도 분석의 목적과 최종 인사이트, 기대효과를 빠르게 이해하고 조치할 수 있게 돕는 가장 중요한 섹션입니다." 
  },
  { 
    subj: 4, 
    q: "지도 시각화 기법 중 위도와 경도 좌표를 기반으로 선이나 점의 이동 경로를 연결하여 사람의 이동, 화물 운송, 네트워크 트래픽 등 물체의 흐름과 방향성을 표현하는 기법은?", 
    choices: ["플로우 맵(Flow Map)", "단계구분도(Choropleth Map)", "트리맵(Treemap)", "모자이크 차트(Mosaic Chart)"], 
    ans: 0, 
    exp: "플로우 맵(Flow Map)은 화살표의 방향으로 이동을 나타내고 선의 굵기로 이동하는 양(Volume)을 시각화하여 공간 내 객체의 동적인 흐름을 분석하는 데 적합한 시각화 방법입니다." 
  },
  { 
    subj: 4, 
    q: "다양한 시각화 도구 중 대시보드(Dashboard)를 구축할 때 유의해야 할 원칙으로 거리가 먼 것은?", 
    choices: ["단일 화면 내에서 중요 정보가 한눈에 들어오도록 설계한다.", "사용자가 상호작용(Interactive)하여 세부 데이터를 탐색할 수 있는 필터 기능을 제공한다.", "모든 변수의 데이터를 무조건 하나의 차트에 겹쳐서 입체적으로 표현해야 한다.", "KPI 등 비즈니스 핵심 지표를 눈에 잘 띄는 위치에 강조하여 배치한다."], 
    ans: 2, 
    exp: "대시보드는 직관적인 정보 전달이 목적이므로 너무 많은 변수를 하나의 차트에 욱여넣으면 오히려 인지 과부하가 발생합니다. 목적에 맞는 단순하고 명확한 개별 차트를 분리 배치하는 것이 원칙입니다." 
  },
  { 
    subj: 4, 
    q: "배포된 모델의 투자 수익률(ROI)을 계산할 때, '순이익(Net Profit) / 투자 비용(Investment Cost) × 100' 의 공식을 사용합니다. 다음 중 투자 비용(Investment Cost) 요소에 해당하지 않는 것은?", 
    choices: ["분석으로 인해 감소된 업무 처리 시간 비용", "모델 개발 및 인프라 구축 비용", "데이터 수집 및 정제 비용", "시스템 유지보수 및 라이선스 비용"], 
    ans: 0, 
    exp: "모델 도입으로 인해 감소된 업무 처리 시간 비용 등은 절감된 비용으로서 최종적으로 순이익(비즈니스 효과, Return) 부문에 포함되어 계산됩니다. 인프라나 개발비는 직접적인 투자 비용(Cost)입니다." 
  }
];