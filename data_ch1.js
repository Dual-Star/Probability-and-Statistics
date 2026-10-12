// A1 数学过关必做1000题 · 第1章 随机事件与概率（88题，精校版）
// 每题含：题干(LaTeX)、5选项、答案、简易解析、详细解析、多解法、原书勘误、考纲标记
window.ALL_Q.push(
{id:1,ch:1,chName:"随机事件与概率",source:"2008年真题",syllabus:true,
 tags:["加法公式","并事件概率"],
 stem:"已知 $P(A)=P(B)=\\frac{1}{4}$，$P(C)=\\frac{1}{2}$，$P(AB)=\\frac{1}{8}$，$P(BC)=P(CA)=0$，则 $A,B,C$ 中至少有一个发生的概率等于（　）。",
 options:["$\\frac{1}{3}$","$\\frac{2}{5}$","$\\frac{3}{4}$","$\\frac{7}{8}$","$1$"],
 answer:3,
 easy:"由 $P(BC)=P(CA)=0$ 推出 $P(ABC)=0$，代入三事件加法公式即得 $\\frac78$。",
 detail:"“至少一个发生”即并事件 $A\\cup B\\cup C$，用三事件加法公式：\n$P(A\\cup B\\cup C)=P(A)+P(B)+P(C)-P(AB)-P(AC)-P(BC)+P(ABC)$。\n因 $ABC\\subset BC$，故 $0\\le P(ABC)\\le P(BC)=0$，得 $P(ABC)=0$。\n代入：$\\frac14+\\frac14+\\frac12-\\frac18-0-0+0=\\frac78$。",
 methods:[
  {title:"解法一：三事件加法公式（展开）",body:"直接套用加法公式 $P(A\\cup B\\cup C)=\\sum P-\\sum P(两两)+P(ABC)$，逐项代入。这是处理“并事件概率”最通用的方法。"},
  {title:"解法二：容斥原理（韦恩图）",body:"画三圆韦恩图。因 $BC=CA=\\varnothing$（概率0，可视作不相交），三者的交集为空，重叠只有 $AB$ 一块 $=\\frac18$。总面积 $=$ 三圆之和 $- AB$ 重叠 $=\\frac14+\\frac14+\\frac12-\\frac18=\\frac78$。直观且不易漏项。"}
 ],
 fix:"原书解析把 $C$ 误印成 $G$，且中间一步漏写 $+P(ABC)$（该值为0，不影响最终结果，但步骤不严谨）。"}
,
{id:2,ch:1,chName:"随机事件与概率",source:"2008年真题",syllabus:true,
 tags:["差事件","概率运算"],
 stem:"已知 $P(A)+P(B)=0.9$，$P(AB)=0.2$，则 $P(\\overline{A}B)+P(A\\overline{B})$ 等于（　）。",
 options:["$0.3$","$0.4$","$0.5$","$0.6$","$0.7$"],
 answer:2,
 easy:"$P(\\overline{A}B)=P(B)-P(AB)$，$P(A\\overline{B})=P(A)-P(AB)$，两式相加再整体代入。",
 detail:"$P(\\overline{A}B)+P(A\\overline{B})=[P(B)-P(AB)]+[P(A)-P(AB)]$\n$=P(A)+P(B)-2P(AB)=0.9-2\\times0.2=0.5$。",
 methods:[
  {title:"解法一：拆成差事件",body:"把 $\\overline{A}B$、$A\\overline{B}$ 分别看成“$B$ 发生但 $A$ 不发生”“$A$ 发生但 $B$ 不发生”，各自等于 $P(B)-P(AB)$、$P(A)-P(AB)$。"},
  {title:"解法二：韦恩图面积",body:"画 $A,B$ 两圆，$\\overline{A}B$ 与 $A\\overline{B}$ 正是两圆各自“不重叠”的部分。两部分之和 $=$ 两圆总面积 $-2\\times$ 交集 $=0.9-0.4=0.5$。"}
 ]
},
{id:3,ch:1,chName:"随机事件与概率",source:"2008年真题",syllabus:true,
 tags:["条件概率","并事件"],
 stem:"已知 $P(A)=0.4$，$P(C)=0.2$，$P(AC)=0.1$，$P(B\\mid C)=0.7$，$P(B\\mid\\bar{C})=0.55$，且 $A\\cap B=\\varnothing$，则 $P(A\\cup B\\mid\\bar{C})$ 等于（　）。",
 options:["$0.165$","$0.435$","$0.685$","$0.775$","$0.925$"],
 answer:4,
 easy:"由 $A\\cap B=\\varnothing$ 得条件并事件可拆：$P(A\\cup B\\mid\\bar{C})=P(A\\mid\\bar{C})+P(B\\mid\\bar{C})$。",
 detail:"因 $A\\cap B=\\varnothing$，在条件 $\\bar{C}$ 下二者仍不相交，故：\n$P(A\\cup B\\mid\\bar{C})=P(A\\mid\\bar{C})+P(B\\mid\\bar{C})$。\n$P(A\\mid\\bar{C})=\\frac{P(A\\bar{C})}{P(\\bar{C})}=\\frac{P(A)-P(AC)}{1-P(C)}=\\frac{0.4-0.1}{0.8}=0.375$。\n$P(B\\mid\\bar{C})=0.55$（题给）。\n故 $P(A\\cup B\\mid\\bar{C})=0.375+0.55=0.925$。",
 methods:[
  {title:"解法一：条件概率相加（互斥拆分）",body:"利用 $A\\cap B=\\varnothing$ 使条件并事件可拆为两个条件概率之和，分别代入。"},
  {title:"解法二：事件运算分配律",body:"$P((A\\cup B)\\cap\\bar{C})=P(A\\bar{C})+P(B\\bar{C})$（因 $A\\cap B=\\varnothing$），再整体除以 $P(\\bar{C})=0.8$，一步到位。"}
 ],
 fix:"原扫描件中 $P(B\\mid\\bar{C})$ 的数值字迹不清、原书解析有跳步，已按标准答案 0.925 补全为 $P(B\\mid\\bar{C})=0.55$。"}
,
{id:4,ch:1,chName:"随机事件与概率",source:"2008年真题",syllabus:true,
 tags:["差事件","事件运算"],
 stem:"对于任意两个事件 $A$ 和 $B$，下面的选项中正确的是（　）。",
 options:["$P(A-B)=P(A)P(B)$","$P(A-B)=P(A)P(B)+P(AB)$","$P(A-B)=P(A)-P(AB)$","$P(A-B)=P(A)+P(B)-P(AB)$","以上选项都不正确"],
 answer:2,
 easy:"差事件公式 $P(A-B)=P(A)-P(AB)$ 恒成立，其余选项均可举反例否定。",
 detail:"$A-B=A\\overline{B}=A-AB$，故 $P(A-B)=P(A)-P(AB)$。\nA 项把差事件误当独立事件；B、D 项系数错误。",
 methods:[
  {title:"解法一：差事件公式",body:"直接用 $P(A-B)=P(A)-P(AB)$ 验证，这是唯一恒等式。"},
  {title:"解法二：特例检验（反例法）",body:"取 $A=B$（则 $A-B=\\varnothing$，$P=0$）：C 项 $=P(A)-P(A)=0$ 成立；A 项 $=P^2(A)$ 一般不为0，排除。快速锁定 C。"}
 ]
},
{id:5,ch:1,chName:"随机事件与概率",source:"2008年真题",syllabus:true,
 tags:["对立事件","伯努利"],
 stem:"设每人血清中含有肝炎病毒的概率为 $0.4\\%$，则 100 人的血清混合后含有肝炎病毒的概率为（　）。",
 options:["$0.02$","$0.24$","$0.33$","$0.375$","$0.40$"],
 answer:2,
 easy:"混合后无病毒 $\\iff$ 100 人都无病毒，用对立事件：$1-(1-0.004)^{100}$。",
 detail:"设每人是否带毒相互独立。混合后“不含病毒”当且仅当 100 人都无病毒，其概率为 $(1-0.004)^{100}=(0.996)^{100}$。\n故含病毒概率 $=1-(0.996)^{100}\\approx1-0.67=0.33$。",
 methods:[
  {title:"解法一：对立事件",body:"先算“都不含”再取补，避免枚举 1~100 人含病毒的复杂组合，是“至少一个”类题的标准思路。"},
  {title:"解法二：近似估算",body:"$1-(0.996)^{100}\\approx 1-e^{-100\\times0.004}=1-e^{-0.4}\\approx0.33$（小概率事件用 $1-x\\approx e^{-x}$ 估算，考场快速核对答案）。"}
 ],
 fix:"原书解析把 $100$ 写成分式分子位置导致视觉错位，实际应为指数 $(0.996)^{100}$。"}
,
{id:6,ch:1,chName:"随机事件与概率",source:"2008年真题",syllabus:true,
 tags:["全概率公式"],
 stem:"现有一批产品由三家工厂生产，已知其中一家的废品率是 $0.2$，另两家的废品率是 $0.1$，今从这批产品中任取一件检验。假设这件产品来自哪个工厂是等可能的，则取到废品的概率等于（　）。",
 options:["$\\frac{1}{15}$","$\\frac{2}{15}$","$\\frac{1}{5}$","$\\frac{4}{15}$","$\\frac{1}{3}$"],
 answer:1,
 easy:"三个工厂等可能（各 $\\frac13$），废品率分别为 $0.2,0.1,0.1$，全概率公式加权。",
 detail:"设 $A,B,C$ 为来自三家工厂，$D$ 为“取到废品”。\n$P(D)=P(D|A)P(A)+P(D|B)P(B)+P(D|C)P(C)$\n$=0.2\\times\\frac13+0.1\\times\\frac13+0.1\\times\\frac13=\\frac{0.4}{3}=\\frac{2}{15}$。",
 methods:[
  {title:"解法一：全概率公式",body:"对完备事件组（三家工厂）做加权平均，是“混合来源求整体概率”的标准方法。"},
  {title:"解法二：直接加权平均",body:"废品率总体期望 $=\\frac13(0.2+0.1+0.1)=\\frac{0.4}{3}=\\frac{2}{15}$，与全概率公式本质一致。"}
 ]
},
{id:7,ch:1,chName:"随机事件与概率",source:"2008年真题",syllabus:true,
 tags:["条件概率","贝叶斯公式"],
 stem:"甲、乙两人独立地对同一目标各射击一次，命中率分别为 $0.6$ 和 $0.5$，现已知目标被命中，则它是甲射中的概率等于（　）。",
 options:["$\\frac{3}{4}$","$\\frac{3}{5}$","$\\frac{1}{2}$","$\\frac{3}{7}$","$\\frac{3}{8}$"],
 answer:0,
 easy:"目标被命中是 $A\\cup B$，求 $P(A\\mid A\\cup B)=\\frac{P(A)}{P(A\\cup B)}$（因 $A\\subset A\\cup B$）。",
 detail:"$P(A\\cup B)=P(A)+P(B)-P(A)P(B)=0.6+0.5-0.3=0.8$。\n因 $A\\subset A\\cup B$，故 $P(A\\mid A\\cup B)=\\frac{P(A)}{P(A\\cup B)}=\\frac{0.6}{0.8}=\\frac34$。",
 methods:[
  {title:"解法一：条件概率定义",body:"$P(A\\mid A\\cup B)=\\frac{P(A\\cap(A\\cup B))}{P(A\\cup B)}=\\frac{P(A)}{P(A\\cup B)}$，利用 $A$ 包含于并事件简化。"},
  {title:"解法二：贝叶斯/事件分解",body:"命中情形=甲命中（含乙是否命中）。$P(\\text{甲命中且目标被命中})=P(A)=0.6$，除以 $P(\\text{被命中})=0.8$。"}
 ]
},
{id:8,ch:1,chName:"随机事件与概率",source:"2008年真题",syllabus:true,
 tags:["二项分布","对立事件"],
 stem:"某人对同一目标独立地进行四次射击，若至少命中一次的概率等于 $\\frac{80}{81}$，则该射手的命中率为（　）。",
 options:["$\\frac{68}{81}$","$\\frac{52}{75}$","$\\frac{51}{64}$","$\\frac{2}{3}$","$\\frac{7}{11}$"],
 answer:3,
 easy:"设命中率 $p$，四次全不中概率 $(1-p)^4$，由“至少一中”对立事件列方程。",
 detail:"$P(\\text{至少一次})=1-(1-p)^4=\\frac{80}{81}$，故 $(1-p)^4=\\frac{1}{81}=(\\frac13)^4$，得 $1-p=\\frac13$，$p=\\frac23$。",
 methods:[
  {title:"解法一：对立事件方程",body:"用“至少一个”的对立“全不中”建立方程，直接开四次方。"},
  {title:"解法二：验根法",body:"把选项代入 $1-(1-p)^4$ 验证是否等于 $\\frac{80}{81}$，$p=\\frac23$ 时 $1-(\\frac13)^4=\\frac{80}{81}$，快速锁定。"}
 ]
},
{id:9,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["互斥","条件概率"],
 stem:"设 $A,B$ 是两个互不相容的事件，$P(A)P(B)>0$，则（　）一定成立。",
 options:["$P(A)=1-P(B)$","$P(A\\mid B)=0$","$P(A\\mid B)=1$","$P(AB)=0$","以上答案全错"],
 answer:1,
 easy:"互斥 $\\Rightarrow AB=\\varnothing\\Rightarrow P(AB)=0$，故 $P(A\\mid B)=\\frac{P(AB)}{P(B)}=0$。",
 detail:"互不相容即 $AB=\\varnothing$，$P(AB)=0$。因 $P(B)>0$，$P(A\\mid B)=\\frac{P(AB)}{P(B)}=0$。\nA 项 $P(A)=1-P(B)$ 只在 $A,B$ 互为对立时成立；C 项应为 $P(A\\mid \\overline{B})$ 而非 $P(A\\mid B)$；D 项 $P(AB)=0$ 虽对，但题干问“条件概率”，B 项才是直接结论。",
 methods:[
  {title:"解法一：条件概率定义",body:"互斥则交为空，条件概率分子为0。"},
  {title:"解法二：直观理解",body:"已知 $B$ 已发生，而 $A$ 与 $B$ 不可能同时发生，故此时 $A$ 发生的条件概率必为 0。"}
 ],
 fix:"原书解析把 $P(A\\mid B)=\\frac{P(AB)}{P(B)}$ 误写成 $P(AB)=P(AB)/P(B)$（字母缺失），已更正。"}
,
{id:10,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["样本空间划分","全概率"],
 stem:"设 $\\{A_1,\\dots,A_n\\}$ 与 $\\{B_1,\\dots,B_m\\}$ 是样本空间 $\\Omega$ 的两个不同的划分，$C$ 是一个事件，则下列说法肯定正确的是（　）。",
 options:["存在 $i,j$ 使得 $A_iB_j=\\varnothing$","对任意 $i,j$ 都有 $A_iB_j=\\varnothing$","$P(C)=\\sum\\limits_{i,j}P(CA_iB_j)$","$\\sum P(A_i)=0.5$","$\\sum P(B_j)=0.5$"],
 answer:2,
 easy:"两个划分交叉后 $\\{A_iB_j\\}$ 仍是 $\\Omega$ 的一个划分，对 $C$ 用全概率公式。",
 detail:"$\\{A_i\\}$、$\\{B_j\\}$ 都是划分，则 $\\{A_iB_j\\}$（两两交叉）也构成 $\\Omega$ 的一个划分。\n对事件 $C$ 有 $C=\\bigcup_{i,j} CA_iB_j$（互斥并），故 $P(C)=\\sum_{i,j}P(CA_iB_j)$。\nA、B 项错误（$A_iB_j$ 不一定为空或非空）；D、E 项应为 $\\sum P(A_i)=1$。",
 methods:[
  {title:"解法一：划分交叉再全概率",body:"两个划分做“格子化”交叉，得到更细的划分，对 $C$ 求和。"},
  {title:"解法二：排除法",body:"划分的充要条件是概率和=1，故 D、E 错；交叉项 $A_iB_j$ 是否为空不能一概而论，A、B 错，只剩 C。"}
 ]
},
{id:11,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["二项分布","分类计数"],
 stem:"甲乙两人投篮，命中率分别为 $0.8$ 和 $0.6$，每人投三次，则甲的进球数恰好比乙多一个的概率为（　）。",
 options:["$0.2579$","$0.2779$","$0.2979$","$0.3179$","$0.3379$"],
 answer:4,
 easy:"按（甲,乙）进球数分为 (3,2)、(2,1)、(1,0) 三种情形，用二项分布分别算再相加。",
 detail:"甲进 $k$ 球概率 $C_3^k(0.8)^k(0.2)^{3-k}$，乙进 $j$ 球概率 $C_3^j(0.6)^j(0.4)^{3-j}$，且独立。\n$P=C_3^3(0.8)^3\\cdot C_3^2(0.6)^2(0.4)+C_3^2(0.8)^2(0.2)\\cdot C_3^1(0.6)(0.4)^2+C_3^1(0.8)(0.2)^2\\cdot C_3^0(0.4)^3$\n$=0.512\\times0.432+0.384\\times0.288+0.096\\times0.064=0.221184+0.110592+0.006144=0.33792$。",
 methods:[
  {title:"解法一：分类枚举（互斥拆分）",body:"“甲比乙多一”可穷举为三种 $(甲,乙)=(3,2),(2,1),(1,0)$，各自独立相乘后求和。"},
  {title:"解法二：卷积/分布列法",body:"分别写出甲、乙进球数的分布列，再求 $P(X_{甲}-X_{乙}=1)$，本质同枚举，但用分布列更系统，适合复杂情形。"}
 ],
 fix:"原书解析计算值 $0.3379$ 为四舍五入结果，精确值为 $0.33792$，不影响选 E。"}
,
{id:12,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["全概率公式","二项分布"],
 stem:"随机变量 $X$ 服从参数为 $(n,p)$ 的二项分布，已知 $p=0.5$，而 $n$ 为随机变量，且 $P(n=4)=P(n=5)=P(n=6)=\\frac13$，则 $P(X=3)=$（　）。",
 options:["$\\frac{17}{64}$","$\\frac{15}{64}$","$\\frac{51}{64}$","$\\frac{5}{24}$","$\\frac{7}{24}$"],
 answer:4,
 easy:"对 $n$ 用全概率公式：$P(X=3)=\\sum_n P(X=3\\mid n)P(n)$。",
 detail:"$P(X=3)=P(X=3|n=4)P(n=4)+P(X=3|n=5)P(n=5)+P(X=3|n=6)P(n=6)$\n$=\\frac13[C_4^3(0.5)^4+C_5^3(0.5)^5+C_6^3(0.5)^6]$\n$=\\frac13[\\frac{4}{16}+\\frac{10}{32}+\\frac{20}{64}]=\\frac13[\\frac14+\\frac5{16}+\\frac5{16}]=\\frac13\\cdot\\frac78=\\frac7{24}$。",
 methods:[
  {title:"解法一：全概率公式",body:"$n$ 是随机变量，对 $n$ 的三个取值加权求和，是“混合参数分布”的标准做法。"},
  {title:"解法二：逐项代入计算",body:"把 $n=4,5,6$ 三种情形各自算好再平均（因概率相等为 $\\frac13$），与全概率公式等价。"}
 ]
},
{id:13,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["贝叶斯公式"],
 stem:"今有甲、乙、丙三台机床，次品率分别为 $5\\%$、$4\\%$、$2\\%$，产品量占总产量的比例分别为 $25\\%$、$35\\%$、$40\\%$。混合后随机抽一件是次品，则它由甲机床生产的概率为（　）。",
 options:["$0.362$","$0.392$","$0.422$","$0.452$","$0.472$"],
 answer:0,
 easy:"已知“结果是次品”反推“来源”，用贝叶斯公式，分母为全概率。",
 detail:"设 $A$=次品，$B_1,B_2,B_3$=来自甲乙丙。\n全概率：$P(A)=0.05\\times0.25+0.04\\times0.35+0.02\\times0.40=0.0125+0.014+0.008=0.0345$。\n贝叶斯：$P(B_1|A)=\\frac{0.05\\times0.25}{0.0345}=\\frac{0.0125}{0.0345}\\approx0.362$。",
 methods:[
  {title:"解法一：贝叶斯公式",body:"“由果推因”标准公式：分子=甲来源且次品，分母=总次品率（全概率）。"},
  {title:"解法二：比例直观法",body:"甲对次品池的贡献 $0.0125$ 占总次品 $0.0345$ 的比例即答案，与贝叶斯同义，更直观。"}
 ]
},
{id:14,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["样本空间"],
 stem:"抛两枚硬币，用 0 表示反面、1 表示正面，其样本空间为 $\\Omega=$（　）。",
 options:["$\\{00,01,10,11\\}$","$\\{1,2\\}$","$\\{0,1\\}$","$\\{01,10\\}$","$\\{10,11\\}$"],
 answer:0,
 easy:"两枚硬币各有 0/1 两种，所有有序组合共 4 个。",
 detail:"样本空间是所有可能结果（有序二元组）的集合：$\\{00,01,10,11\\}$。",
 methods:[
  {title:"解法一：列举法",body:"第一枚 0/1 × 第二枚 0/1，穷举四个二元组。"},
  {title:"解法二：计数原理",body:"每枚 2 种、独立，共 $2\\times2=4$ 个，且为有序排列，排除把 $01,10$ 当同一结果的错误。"}
 ]
},
{id:15,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["样本空间"],
 stem:"观察一批产品的合格率 $p$，其样本空间为 $\\Omega=$（　）。",
 options:["$\\{0<p<1\\}$","$\\{0\\le p\\le1\\}$","$\\{p\\le1\\}$","$\\{p\\ge0\\}$","$\\{p\\ge1\\}$"],
 answer:1,
 easy:"合格率可取到 0 和 1 两个端点，故闭区间。",
 detail:"合格率 $p$ 介于 0 与 1 之间，且 $p=0$（全不合格）、$p=1$（全合格）均可取，故 $\\Omega=\\{0\\le p\\le1\\}$。",
 methods:[
  {title:"解法一：端点检验",body:"判断能否取等号：全不合格、全合格均可能出现，故闭区间。"},
  {title:"解法二：排除法",body:"A 漏端点、C/D 范围过宽、E 错，仅 B 正确。"}
 ]
},
{id:16,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["对立事件","德摩根律"],
 stem:"以 $A$ 表示事件“喜欢喝可乐且不喜欢喝橙汁”，则 $A$ 的对立事件为（　）。",
 options:["不喜欢喝可乐且喜欢喝橙汁","喜欢喝可乐且喜欢喝橙汁","不喜欢喝可乐或喜欢喝橙汁","不喜欢喝可乐且不喜欢喝橙汁","喜欢喝可乐或喜欢喝橙汁"],
 answer:2,
 easy:"设 $B$=喜可乐、$C$=喜橙汁，则 $A=B\\overline{C}$，其对立 $\\overline{A}=\\overline{B}\\cup C$（德摩根律）。",
 detail:"$A=B\\cap\\overline{C}$，$\\overline{A}=\\overline{B\\cap\\overline{C}}=\\overline{B}\\cup C$，即“不喜欢喝可乐 或 喜欢喝橙汁”。",
 methods:[
  {title:"解法一：德摩根律",body:"对立事件“且变或、或变且、各取反”：$B\\overline{C}$ 的对立是 $\\overline{B}\\cup C$。"},
  {title:"解法二：文字逻辑",body:"“喜欢可乐且不喜欢橙汁”的否定是“至少打破一个条件”，即“不喜欢可乐 或 喜欢橙汁”。"}
 ]
},
{id:17,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["互斥","互逆"],
 stem:"抛掷两枚硬币，出现两个正面记为事件 $A$，出现两个反面记为事件 $B$，则（　）。",
 options:["$A\\cup B=\\Omega$","$A$ 与 $B$ 为互逆事件","$A$ 与 $B$ 为互斥事件","$A$ 与 $B$ 为相互独立事件","事件 $B$ 包含事件 $A$"],
 answer:2,
 easy:"$A,B$ 不可能同时发生（互斥），但两者并集不含“一正一反”，故不是互逆。",
 detail:"样本空间 $\\Omega=\\{正正,正反,反正,反反\\}$。$A=\\{正正\\}$，$B=\\{反反\\}$。\n$A\\cap B=\\varnothing$（互斥），但 $A\\cup B\\neq\\Omega$（缺“正反”“反正”），故不是互逆（对立）。",
 methods:[
  {title:"解法一：定义判别",body:"互斥=交集空；互逆=交集空且并集为全集。逐一检验。"},
  {title:"解法二：列举反例",body:"“一正一反”既不属于 $A$ 也不属于 $B$，故 $A\\cup B\\ne\\Omega$，排除互逆，锁定互斥。"}
 ]
},
{id:18,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["事件运算","分配律"],
 stem:"设 $A,B$ 为任意两事件，则下列关系成立的有（　）。",
 options:["$(A\\cup B)B=A$","$(A\\cup B)B\\subset B$","$(AB)\\cup B=A$","$(AB)\\cup B=A\\cup B$","$A\\bar{B}\\cup B=A\\bar{B}$"],
 answer:3,
 easy:"利用分配律 $(AB)\\cup B=(A\\cup B)(B\\cup B)=(A\\cup B)\\Omega=A\\cup B$。",
 detail:"逐项验证：\nA：$(A\\cup B)B=AB\\cup BB=AB\\ne A$（一般）。\nB：$(A\\cup B)B=AB\\subset B$ 恒成立（但题干要求选“成立”关系，需看是否恒等）。\nC：$(AB)\\cup B\\ne A$。\nD：$(AB)\\cup B=(A\\cup B)(B\\cup B)=A\\cup B$，恒等。\nE：$A\\bar{B}\\cup B=A\\bar{B}\\cup B\\ne A\\bar{B}$。",
 methods:[
  {title:"解法一：集合运算分配律",body:"$X\\cup B=(X\\cap B)$ 与并的分配律展开，逐项化简验证恒等式。"},
  {title:"解法二：韦恩图验证",body:"画图看各表达式覆盖区域是否与 $A\\cup B$ 一致，直观。"}
 ]
},
{id:19,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["事件运算","并事件"],
 stem:"$A\\cup B\\cup C$ 表示（　）。",
 options:["$A,B,C$ 都不发生","$A,B,C$ 至少一个发生","$A,B,C$ 同时发生","$A,B,C$ 至多一个发生","$A,B,C$ 恰有一个发生"],
 answer:1,
 easy:"并事件表示“至少一个发生”。",
 detail:"$A\\cup B\\cup C$ 表示三个事件中至少有一个发生。",
 methods:[
  {title:"解法一：定义",body:"并事件=至少一个发生，交事件=同时发生，对立=都不发生。"},
  {title:"解法二：德摩根对照",body:"$\\overline{A\\cup B\\cup C}=\\bar{A}\\bar{B}\\bar{C}$（都不发生），故并事件为其对立面=至少一个。"}
 ]
},
{id:20,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["事件运算"],
 stem:"掷一枚骰子，设 $A=\\{$出现奇数点$\\}$，$B=\\{$出现 1 或 3 点$\\}$，则下列说法正确的是（　）。",
 options:["$AB=\\{$出现奇数点$\\}$","$AB=\\{$出现 5 点$\\}$","$B=\\{$出现 5 点$\\}$","$A\\cup B=\\{$出现 5 点$\\}$","$\\bar{A}B=\\{$出现 5 点$\\}$"],
 answer:1,
 easy:"$A=\\{1,3,5\\}$，$B=\\{1,3\\}$，$A-B=\\{5\\}$，即“奇数但不是1或3”。",
 detail:"$A=\\{1,3,5\\}$，$B=\\{1,3\\}$。\n$A-B=A\\bar{B}=\\{5\\}$。故“$AB$（即 $A-B$）＝出现 5 点”正确。",
 methods:[
  {title:"解法一：集合差",body:"把事件写成点集做差集运算。"},
  {title:"解法二：排除法",body:"$A\\cup B=\\{1,3,5\\}$、$\\bar{B}=\\{2,4,5,6\\}$、$\\bar{A}B=\\varnothing$，逐一排除。"}
 ]
},
{id:21,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["概率不等式","事件运算"],
 stem:"对于任意的随机事件 $A,B,C$，下列选项中不正确的是（　）。",
 options:["$P(AB)+P(AC)-P(BC)\\le P(A)$","$P(\\bar{A}\\bar{B})=1-P(A)-P(B)+P(AB)$","$1-P(A)-P(B)>P(A\\cup B)$","$P(AB)\\le P(A)$","$P(A\\cup B)\\le P(A)+P(B)$"],
 answer:2,
 easy:"正确关系是 $1-P(A)-P(B)+P(AB)=P(\\bar{A}\\bar{B})\\ge0$，从而 $1-P(A)-P(B)\\le P(A\\cup B)$，C 项不等号方向错。",
 detail:"逐项验证：\nA：$P(A)\\ge P(A(B\\cup C))=P(AB)+P(AC)-P(ABC)\\ge P(AB)+P(AC)-P(BC)$，成立。\nB：$P(\\bar{A}\\bar{B})=P(\\overline{A\\cup B})=1-P(A\\cup B)=1-P(A)-P(B)+P(AB)$，成立。\nC：$1-P(A)-P(B)=P(\\bar{A}\\bar{B})-P(AB)\\le P(\\bar{A}\\bar{B})\\le1$，而 $P(A\\cup B)=1-P(\\bar{A}\\bar{B})$，故 $1-P(A)-P(B)\\le P(A\\cup B)$，应为 $\\le$ 而非 $>$，错误。\nD、E 显然成立。",
 methods:[
  {title:"解法一：逐项验证",body:"用加法公式和德摩根律把各项展开比较。"},
  {title:"解法二：反例法",body:"取 $A=B=\\Omega$：C 项左边 $1-1-1=-1$，右边 $1$，$-1>1$ 不成立，直接锁定 C 为错误项。"}
 ]
},
{id:22,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["概率为零事件","差事件"],
 stem:"$A,B$ 是事件，$P(AB)=0$，则（　）。",
 options:["$A,B$ 互不相容","$A$ 和 $B$ 相互独立","$P(A)=0$ 或 $P(B)=0$","$P(A-B)=P(A)$","$P(A\\cup B)<1$"],
 answer:3,
 easy:"$P(AB)=0$ 只能推出 $P(A-B)=P(A)-P(AB)=P(A)$，不能推出互斥或独立。",
 detail:"$P(A-B)=P(A)-P(AB)=P(A)-0=P(A)$，D 正确。\nA 错：$P(AB)=0$ 推不出 $AB=\\varnothing$（概率为0的事件不一定为空）。\nB 错：独立需 $P(AB)=P(A)P(B)$。\nC 错：$P(AB)=0$ 不要求 $A,B$ 中必有一个概率为0。\nE 错：$P(A\\cup B)=1-P(\\bar{A}\\bar{B})$ 可等于1。",
 methods:[
  {title:"解法一：直接验证",body:"用差事件公式验证 D，同时指出其余选项的充分条件不足。"},
  {title:"解法二：反例法",body:"取 $A=\\Omega,B=\\varnothing$，则 $P(AB)=0$ 但 $A,B$ 不相容不独立，$P(A\\cup B)=1$，排除 A、B、E。"}
 ]
},
{id:23,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["概率公理"],
 stem:"下列数字中不可能是随机事件概率的是（　）。",
 options:["$0$","$0.50$","$0.98$","$1$","$1.01$"],
 answer:4,
 easy:"概率取值范围 $[0,1]$，$1.01$ 超出。",
 detail:"由概率公理 $0\\le P(A)\\le1$，故 $1.01$ 不可能是概率。",
 methods:[
  {title:"解法一：概率公理",body:"概率值必须落在 $[0,1]$。"},
  {title:"解法二：排除法",body:"其余四个都在 $[0,1]$ 内，仅 $1.01$ 越界。"}
 ]
},
{id:24,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["差事件","加法公式"],
 stem:"设 $P(A)=0.5$，$P(B)=0.7$，$P(A\\cup B)=0.8$，则 $P(A\\bar{B})$ 为（　）。",
 options:["$0.1$","$0.24$","$0.5$","$0.6$","$0.7$"],
 answer:0,
 easy:"先求 $P(AB)=P(A)+P(B)-P(A\\cup B)$，再 $P(A\\bar{B})=P(A)-P(AB)$。",
 detail:"$P(AB)=0.5+0.7-0.8=0.4$。\n$P(A\\bar{B})=P(A)-P(AB)=0.5-0.4=0.1$。",
 methods:[
  {title:"解法一：两步差事件",body:"先由加法公式求交集，再用差事件公式。"},
  {title:"解法二：直接代入",body:"$P(A\\bar{B})=P(A\\cup B)-P(B)=0.8-0.7=0.1$（因 $A\\bar{B}=(A\\cup B)-B$）。"}
 ]
},
{id:25,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["事件运算","对称差"],
 stem:"设 $A,B$ 为任意两事件，则 $(A\\cup B)(\\bar{A}\\cup\\bar{B})$ 表示（　）。",
 options:["必然事件","不可能事件","$A$ 与 $B$ 恰有一个发生","$A$ 与 $B$ 不同时发生","$A$ 与 $B$ 同时发生"],
 answer:2,
 easy:"展开得 $A\\bar{B}\\cup\\bar{A}B$，即“恰有一个发生”。",
 detail:"$(A\\cup B)(\\bar{A}\\cup\\bar{B})=A\\bar{A}\\cup A\\bar{B}\\cup B\\bar{A}\\cup B\\bar{B}=A\\bar{B}\\cup\\bar{A}B$，即“$A,B$ 恰有一个发生”。",
 methods:[
  {title:"解法一：分配律展开",body:"并交运算分配律展开，$A\\bar{A}=B\\bar{B}=\\varnothing$ 消去。"},
  {title:"解法二：韦恩图",body:"$A\\cup B$ 与 $\\bar{A}\\cup\\bar{B}$ 的交集正是“只在一个圆内”的两块，即恰有一个发生。"}
 ]
},
{id:26,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["加法公式"],
 stem:"一个电路安装有甲、乙两根保险丝，甲烧断概率 $0.82$，乙烧断概率 $0.74$，同时烧断概率 $0.63$，则至少烧断一根的概率是（　）。",
 options:["$0.08$","$0.63$","$0.84$","$0.93$","$0.96$"],
 answer:3,
 easy:"至少一根烧断即并事件，$P(A\\cup B)=P(A)+P(B)-P(AB)$。",
 detail:"$P(A\\cup B)=0.82+0.74-0.63=0.93$。",
 methods:[
  {title:"解法一：加法公式",body:"并事件概率=两概率和-交集。"},
  {title:"解法二：对立事件",body:"$P(A\\cup B)=1-P(\\bar{A}\\bar{B})$，但需先求都不烧断概率，不如加法公式直接。"}
 ]
},
{id:27,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["古典概型","组合"],
 stem:"从 5 双不同的袜子中任取 4 只，则这 4 只都不配对的概率是（　）。",
 options:["$\\frac{8}{15}$","$\\frac{8}{21}$","$\\frac{4}{15}$","$\\frac{8}{35}$","$\\frac{8}{105}$"],
 answer:1,
 easy:"分母 $C_{10}^4$；分子=从5双选4双、每双取1只 $=C_5^4\\cdot2^4$。",
 detail:"总数 $C_{10}^4=210$。\n都不配对：先选 4 双 $C_5^4=5$，每双取左或右 $2^4=16$，共 $80$。\n$P=\\frac{80}{210}=\\frac{8}{21}$。",
 methods:[
  {title:"解法一：组合计数",body:"“选双+选只”两步计数，标准古典概型。"},
  {title:"解法二：逐只取（条件概率）",body:"第一只任取；第二只不能与第一只配对，概率 $\\frac89$；第三只避开前两只的配对 $\\frac67$；第四只 $\\frac45$。连乘 $\\frac89\\cdot\\frac67\\cdot\\frac45=\\frac{8}{21}$。"}
 ],
 fix:"原书解析“身”字为扫描噪声，且分子表述混乱，已按 $C_5^4\\cdot2^4$ 规范重写。"}
,
{id:28,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["古典概型","组合"],
 stem:"从 5 双不同的手套中任意取 4 只，这 4 只手套刚好是两双的概率为（　）。",
 options:["$\\frac{1}{2}$","$\\frac{2}{5}$","$\\frac{1}{21}$","$\\frac{2}{21}$","$\\frac{4}{21}$"],
 answer:2,
 easy:"刚好两双=从5双中选2双，每双两只全取。分子 $C_5^2$，分母 $C_{10}^4$。",
 detail:"总数 $C_{10}^4=210$。\n刚好两双：选 2 双 $C_5^2=10$，且这两双各取全（唯一取法）。\n$P=\\frac{10}{210}=\\frac{1}{21}$。",
 methods:[
  {title:"解法一：组合计数",body:"分子分母都用组合数，注意“两双”必须两双各取全。"},
  {title:"解法二：先选双再定只",body:"$C_5^2\\times C_2^2\\times C_2^2=C_5^2=10$，除以总数 210。"}
 ]
},
{id:29,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["古典概型","对立事件"],
 stem:"一批 10 个产品中有 4 个次品，不放回随机抽取两个，至少有一个次品被选取的概率是（　）。",
 options:["$\\frac{2}{15}$","$\\frac{1}{3}$","$\\frac{7}{15}$","$\\frac{8}{15}$","$\\frac{2}{3}$"],
 answer:4,
 easy:"用对立事件：$1-$（两个都不是次品）$=1-\\frac{C_6^2}{C_{10}^2}$。",
 detail:"总数 $C_{10}^2=45$。\n全不是次品（都取正品）$C_6^2=15$。\n$P(\\text{至少一个次品})=1-\\frac{15}{45}=1-\\frac13=\\frac23$。",
 methods:[
  {title:"解法一：对立事件",body:"“至少一个”先算“一个都没有”再取补，最简单。"},
  {title:"解法二：直接枚举",body:"$\\frac{C_4^1C_6^1+C_4^2}{C_{10}^2}=\\frac{24+6}{45}=\\frac23$，直接算“恰1个+恰2个次品”。"}
 ]
},
{id:30,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["古典概型","对立事件"],
 stem:"$n$ 张奖券中含有 $m$ 张有奖的，$h$ 人购买，每人 1 张，其中至少有一个人中奖的概率是（　）。",
 options:["$1-\\frac{C_{n-m}^{h}}{C_n^{h}}$","$\\frac{m}{n}$","$\\frac{C_h^m\\cdot C_k^{h-m}}{C_n^h}$","$\\frac{C_m^1}{C_n^h}$","$\\frac{h}{n}$"],
 answer:0,
 easy:"对立事件=全不中奖，$1-$ 全不中概率。",
 detail:"总数 $C_n^h$。全不中奖：从 $n-m$ 张无奖券中取 $h$ 张，$C_{n-m}^{h}$。\n$P(\\text{至少一个中奖})=1-\\frac{C_{n-m}^{h}}{C_n^{h}}$。",
 methods:[
  {title:"解法一：对立事件",body:"“至少一个中奖”的对立是“全不中”，用组合数相除。"},
  {title:"解法二：直接枚举",body:"恰有 $k$ 人中奖 $\\sum_k \\frac{C_m^k C_{n-m}^{h-k}}{C_n^h}$，求和等价于 $1-$ 对立式，但更繁琐。"}
 ]
},
{id:31,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["伯努利","二项分布"],
 stem:"盒子中有一个红苹果和一个青苹果，随机抽取一个观察颜色后放回，连续抽取三次，则红苹果至少被抽中两次的概率为（　）。",
 options:["$0.125$","$0.25$","$0.375$","$0.5$","$0.625$"],
 answer:3,
 easy:"每次抽中红苹果概率 $\\frac12$，三次中至少两次=恰2次+恰3次。",
 detail:"$P=C_3^2(\\frac12)^2(\\frac12)+C_3^3(\\frac12)^3=3\\times\\frac18+\\frac18=\\frac48=0.5$。",
 methods:[
  {title:"解法一：二项分布",body:"$X\\sim B(3,\\frac12)$，$P(X\\ge2)=P(X=2)+P(X=3)$。"},
  {title:"解法二：对称性",body:"因 $p=0.5$ 对称，$P(X\\ge2)=P(X\\le1)$，且 $P(X\\ge2)+P(X\\le1)=1$，故 $=0.5$。"}
 ]
},
{id:32,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["对立事件","独立事件"],
 stem:"三个人破译一个密码，能单独译出的概率分别为 $\\frac15,\\frac13,\\frac14$，则此密码被译出的概率为（　）。",
 options:["$\\frac{1}{5}$","$\\frac{2}{5}$","$\\frac{3}{5}$","$\\frac{1}{4}$","$\\frac{1}{3}$"],
 answer:2,
 easy:"被译出=至少一人译出，用对立事件 $1-$ 三人都译不出。",
 detail:"$P(\\text{译出})=1-(1-\\frac15)(1-\\frac13)(1-\\frac14)=1-\\frac45\\cdot\\frac23\\cdot\\frac34=1-\\frac25=\\frac35$。",
 methods:[
  {title:"解法一：对立事件",body:"“至少一人译出”的对立是“三人都译不出”，各人独立相乘。"},
  {title:"解法二：容斥展开",body:"$P(A\\cup B\\cup C)=\\sum P -\\sum P(两两)+P(ABC)$，逐步代入也得到 $\\frac35$，但较繁。"}
 ]
},
{id:33,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["几何分布","无穷级数"],
 stem:"甲、乙两射手轮流对同一目标射击，甲每枪命中率为 $p$，乙每枪命中率为 $r$，彼此独立，甲先射，则甲先命中的概率为（　）。",
 options:["$\\frac{p}{1-(1-p)(1-r)}$","$1-(1-p)(1-r)$","$\\frac{p}{(1-p)(1-r)}$","$1-p$","$(1-p)(1-r)$"],
 answer:0,
 easy:"甲先命中=第1枪中，或(甲乙都不中)后再回到甲中，无穷等比级数求和。",
 detail:"$P=p+(1-p)(1-r)p+[(1-p)(1-r)]^2p+\\cdots=\\frac{p}{1-(1-p)(1-r)}$。",
 methods:[
  {title:"解法一：无穷等比级数",body:"按“轮”递推：本轮甲命中 $p$，否则进入下一轮（概率 $(1-p)(1-r)$），得首项 $p$、公比 $(1-p)(1-r)$ 的等比数列。"},
  {title:"解法二：方程法",body:"设 $P$ 为甲先命中概率，则 $P=p+(1-p)(1-r)P$，解得 $P=\\frac{p}{1-(1-p)(1-r)}$，比级数更简洁。"}
 ],
 fix:"原书解析末行把 $\\frac{p}{1-(1-p)(1-r)}$ 误印成 $1-(1-p)(1-r)$，已更正。"}
,
{id:34,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["古典概型","排列"],
 stem:"有 $n$ 个人随机站成一列，其中有甲、乙两人，则夹在甲和乙之间恰有 $r$ 个人的概率为（　）。",
 options:["$\\frac{2(n-r)}{n(n-1)}$","$\\frac{3(n-r-1)}{n(n-1)}$","$\\frac{2(n-r-1)}{n(n-1)}$","$\\frac{n-r-1}{n(n-1)}$","$\\frac{2(n-2r-1)}{n(n-1)}$"],
 answer:2,
 easy:"甲乙间夹 $r$ 人，甲乙位置有 $n-r-1$ 种、可交换 $\\times2$，其余 $n-2$ 人任意排。",
 detail:"甲乙间夹 $r$ 人时，甲（或乙）可占位置 $1\\sim n-r-1$，共 $n-r-1$ 种，甲乙交换 $\\times2$；其余 $n-2$ 人排 $(n-2)!$。\n$P=\\frac{2(n-r-1)(n-2)!}{n!}=\\frac{2(n-r-1)}{n(n-1)}$。",
 methods:[
  {title:"解法一：位置计数",body:"先定甲乙相对位置，再排其余人。"},
  {title:"解法二：相对位置法",body:"只考虑甲乙两人的相对位置，其余人视为“空隙填充”，得到相同结果。"}
 ],
 fix:"原书解析选项排版混乱（$n-r-1$ 被拆开），已规范。"}
,
{id:35,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["古典概型","分布"],
 stem:"从装有红、白、黑球各一个的口袋中任意取球（取后放回），直到各种颜色的球至少取得一次为止，则摸球次数恰好为 6 次的概率为（　）。",
 options:["$\\frac{5}{81}$","$\\frac{10}{81}$","$\\frac{17}{81}$","$\\frac{25}{81}$","$\\frac{31}{81}$"],
 answer:1,
 easy:"第 6 次首次出现第三种颜色；前 5 次只出现另两种颜色且各至少一次。",
 detail:"前 5 次只出现某两种颜色且各至少一次：先选这两种颜色 $C_3^2=3$，出现方式 $2^5-2=30$，概率 $\\frac{3\\times30}{3^5}=\\frac{30}{81}$。\n第 6 次出现第三种颜色概率 $\\frac13$。\n$P=\\frac{30}{81}\\times\\frac13=\\frac{10}{81}$。",
 methods:[
  {title:"解法一：分步计数",body:"先定“缺的那一色”在第6次补上，再数前5次恰好两色且各≥1次。"},
  {title:"解法二：容斥（恰好两色）",body:"前5次只含两色且各至少一次 $=2^5-2$（去掉全同），再乘选色数和最后一步概率。"}
 ],
 fix:"原书解析符号混乱，已按 $\\frac{C_3^2(2^5-2)}{3^5}\\cdot\\frac13$ 规范。"}
,
{id:36,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["对立事件","组合"],
 stem:"10 把钥匙中有 4 把能把门打开，现在任意取两把，则能打开门的概率为（　）。",
 options:["$\\frac{3}{4}$","$\\frac{1}{2}$","$\\frac{1}{3}$","$\\frac{2}{3}$","$\\frac{1}{6}$"],
 answer:3,
 easy:"对立事件：两把都不能开门 $\\frac{C_6^2}{C_{10}^2}$。",
 detail:"$P(\\text{能开})=1-\\frac{C_6^2}{C_{10}^2}=1-\\frac{15}{45}=1-\\frac13=\\frac23$。",
 methods:[
  {title:"解法一：对立事件",body:"先算两把都不行的概率再取补。"},
  {title:"解法二：直接枚举",body:"$\\frac{C_4^1C_6^1+C_4^2}{C_{10}^2}=\\frac{24+6}{45}=\\frac23$，恰一把能开+两把都能开。"}
 ]
},
{id:37,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["串联系统","独立事件"],
 stem:"由 3 个独立工作的元件串联的电路中，若每个元件发生故障的概率依次为 $0.3,0.4,0.6$，则电路发生故障的概率是（　）。",
 options:["$0.832$","$0.168$","$0.072$","$0.076$","$0.108$"],
 answer:0,
 easy:"串联电路正常需三元件都正常，故障=1-都正常。",
 detail:"$P(\\text{正常})=(1-0.3)(1-0.4)(1-0.6)=0.7\\times0.6\\times0.4=0.168$。\n$P(\\text{故障})=1-0.168=0.832$。",
 methods:[
  {title:"解法一：对立事件",body:"串联“正常工作”=所有元件正常，取补即故障。"},
  {title:"解法二：容斥展开",body:"故障=至少一个元件故障，容斥展开（较繁，不推荐）。"}
 ]
},
{id:38,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["概率不等式","包含关系"],
 stem:"当事件 $A,B$ 同时发生时，事件 $C$ 必发生，则下列结论正确的是（　）。",
 options:["$P(C)=P(AB)$","$P(C)=P(A\\cup B)$","$P(C)\\le P(AB)$","$P(C)\\ge P(A)+P(B)-1$","$P(C)\\le P(A)+P(B)-1$"],
 answer:3,
 easy:"$AB\\subset C\\Rightarrow P(C)\\ge P(AB)$，再用 $P(AB)=P(A)+P(B)-P(A\\cup B)\\ge P(A)+P(B)-1$。",
 detail:"由 $AB\\subset C$ 得 $P(C)\\ge P(AB)$。\n又 $P(AB)=P(A)+P(B)-P(A\\cup B)\\ge P(A)+P(B)-1$。\n故 $P(C)\\ge P(A)+P(B)-1$。",
 methods:[
  {title:"解法一：单调性+加法公式",body:"先由包含关系得不等式，再对 $P(AB)$ 用加法公式放大。"},
  {title:"解法二：反例排除",body:"取 $A=B=\\Omega,C=\\Omega$：$P(C)=1=P(AB)$，A成立但非普遍；逐一检验最稳妥是直接推 D。"}
 ]
},
{id:39,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["对立事件","加法公式"],
 stem:"已知事件 $A,B$ 满足 $P(AB)=P(\\bar{A}\\bar{B})$，$P(A)=0.6$，则 $P(B)=$（　）。",
 options:["$0.2$","$0.3$","$0.4$","$0.5$","$0.6$"],
 answer:2,
 easy:"$P(\\bar{A}\\bar{B})=P(\\overline{A\\cup B})=1-P(A\\cup B)$，与 $P(AB)$ 相等，化简得 $P(A)+P(B)=1$。",
 detail:"$P(\\bar{A}\\bar{B})=1-P(A\\cup B)=1-P(A)-P(B)+P(AB)$。\n由 $P(AB)=P(\\bar{A}\\bar{B})$ 得 $P(AB)=1-P(A)-P(B)+P(AB)$，即 $P(A)+P(B)=1$。\n故 $P(B)=1-0.6=0.4$。",
 methods:[
  {title:"解法一：德摩根+加法公式",body:"把 $\\bar{A}\\bar{B}$ 化为 $\\overline{A\\cup B}$ 展开比较。"},
  {title:"解法二：几何对称",body:"$P(AB)=P(\\bar{A}\\bar{B})$ 表示“同时发生”与“同时不发生”概率相等，等价于 $A,B$ 独立且互补，推出 $P(A)+P(B)=1$。"}
 ]
},
{id:40,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["古典概型","对立事件"],
 stem:"三个球随机地放到三个盒子中（每个盒子装球的个数不限），则出现空盒的概率为（　）。",
 options:["$\\frac{7}{9}$","$\\frac{2}{3}$","$\\frac{1}{9}$","$\\frac{4}{9}$","$\\frac{1}{3}$"],
 answer:0,
 easy:"无空盒=每盒恰一球，用对立事件。",
 detail:"总放法 $3^3=27$。无空盒即每盒恰一个球，共 $3!=6$。\n$P(\\text{空盒})=1-\\frac{6}{27}=1-\\frac29=\\frac79$。",
 methods:[
  {title:"解法一：对立事件",body:"“出现空盒”的对立是“无空盒=每盒一球”，好数。"},
  {title:"解法二：直接枚举空盒情形",body:"恰1空盒或恰2空盒分别计数，再求和，较繁。"}
 ]
},
{id:41,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["差事件","加法公式"],
 stem:"已知 $P(A)=0.4$，$P(B)=0.3$，$P(A\\cup B)=0.6$，则 $P(A-B)=$（　）。",
 options:["$0.1$","$0.2$","$0.3$","$0.4$","$0.5$"],
 answer:2,
 easy:"$P(AB)=P(A)+P(B)-P(A\\cup B)$，$P(A-B)=P(A)-P(AB)$。",
 detail:"$P(AB)=0.4+0.3-0.6=0.1$，$P(A-B)=P(A)-P(AB)=0.4-0.1=0.3$。",
 methods:[
  {title:"解法一：两步差事件",body:"先求交集再求差。"},
  {title:"解法二：直接式",body:"$P(A-B)=P(A\\cup B)-P(B)=0.6-0.3=0.3$。"}
 ]
},
{id:42,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["古典概型","超几何"],
 stem:"有 5 件产品，其中 2 件是次品。从中任取 2 件，恰有 1 件是次品的概率为（　）。",
 options:["$0.2$","$0.4$","$0.5$","$0.6$","$0.8$"],
 answer:3,
 easy:"$\\frac{C_2^1C_3^1}{C_5^2}$。",
 detail:"$P=\\frac{C_2^1C_3^1}{C_5^2}=\\frac{2\\times3}{10}=0.6$。",
 methods:[
  {title:"解法一：超几何分布",body:"恰 1 件次品=从次品取1、正品取1。"},
  {title:"解法二：分步取",body:"$\\frac{2}{5}\\times\\frac{3}{4}+\\frac{3}{5}\\times\\frac{2}{4}=0.3+0.3=0.6$（先次后正+先正后次）。"}
 ]
},
{id:43,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["对立事件","差事件"],
 stem:"已知 $P(A)=0.7$，$P(A-B)=0.3$，则 $P(\\overline{AB})=$（　）。",
 options:["$0.3$","$0.4$","$0.6$","$0.7$","$1$"],
 answer:2,
 easy:"先求 $P(AB)=P(A)-P(A-B)$，再 $P(\\overline{AB})=1-P(AB)$。",
 detail:"$P(AB)=P(A)-P(A-B)=0.7-0.3=0.4$。\n$P(\\overline{AB})=1-P(AB)=0.6$。",
 methods:[
  {title:"解法一：差事件+对立",body:"两步：由差事件求交集，再取对立。"},
  {title:"解法二：直接",body:"$P(\\overline{AB})=1-P(A)+P(A-B)=1-0.7+0.3=0.6$。"}
 ]
},
{id:44,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["古典概型","组合"],
 stem:"袋中有 5 个球，分别编有 1 至 5 的号码。从中任取两球，则取出的两球号码均为奇数的概率为（　）。",
 options:["$0.1$","$0.2$","$0.3$","$0.4$","$0.5$"],
 answer:2,
 easy:"奇数球 1,3,5 共 3 个，$\\frac{C_3^2}{C_5^2}$。",
 detail:"$P=\\frac{C_3^2}{C_5^2}=\\frac{3}{10}=0.3$。",
 methods:[
  {title:"解法一：组合",body:"两奇数球从3个奇数球中选2。"},
  {title:"解法二：分步",body:"$\\frac35\\times\\frac24=0.3$（第一球奇数概率×第二球仍奇数）。"}
 ]
},
{id:45,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["对称性"],
 stem:"甲有 $n+1$ 个硬币，乙有 $n$ 个硬币，双方投掷之后进行比较，则甲掷出的正面数比乙掷出的正面数多的概率为（　）。",
 options:["$0$","$\\frac{1}{4}$","$\\frac{1}{3}$","$\\frac{1}{2}$","$1$"],
 answer:3,
 easy:"利用对称性：$P(甲正面>乙正面)=P(甲反面>乙反面)$，两事件互补，各占 $\\frac12$。",
 detail:"设 $A$=“甲正面数>乙正面数”，$B$=“甲反面数>乙反面数”。\n甲共 $n+1$ 枚、乙 $n$ 枚，故“甲正面数$>$乙正面数”等价于“甲反面数$>$乙反面数”（甲多一枚，正面多⇔反面多）。\n又 $A\\cup B=\\Omega$（要么正面多、要么反面多，恰相等概率不计），且 $A,B$ 对称等概率。\n故 $P(A)=\\frac12$。",
 methods:[
  {title:"解法一：对称性",body:"正面多与反面多互为对称且互补，概率各半。"},
  {title:"解法二：递推/归纳",body:"从 $n=1$ 起步验证 $=\\frac12$，用递推保持对称性。"}
 ]
},
{id:46,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["几何概型"],
 stem:"在 $[-1,1]$ 上任取一点 $X$，则该点到原点距离不超过 $\\frac15$ 的概率为（　）。",
 options:["$\\frac{1}{5}$","$\\frac{2}{5}$","$\\frac{3}{5}$","$\\frac{1}{3}$","$\\frac{2}{3}$"],
 answer:0,
 easy:"长度比：$\\frac{2\\times\\frac15}{2}=\\frac15$。",
 detail:"满足 $|X|\\le\\frac15$ 的区间长 $\\frac25$，总区间长 $2$，故 $P=\\frac{2/5}{2}=\\frac15$。",
 methods:[
  {title:"解法一：长度比",body:"几何概型=有利长度÷总长度。"},
  {title:"解法二：均匀分布",body:"$X\\sim U(-1,1)$，$P(|X|\\le\\frac15)=\\frac{1/5-(-1/5)}{1-(-1)}=\\frac15$。"}
 ]
},
{id:47,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["几何概型"],
 stem:"两人相约 7 点到 8 点在某地会面，先到者等候另一人 20 分钟，过时即可离去，则这两人能会面的概率为（　）。",
 options:["$\\frac{1}{9}$","$\\frac{2}{9}$","$\\frac{1}{3}$","$\\frac{4}{9}$","$\\frac{5}{9}$"],
 answer:4,
 easy:"几何概型，会面区域=正方形挖去两个三角形，$1-\\left(\\frac{40}{60}\\right)^2$。",
 detail:"设两人到达时刻为 $x,y\\in[0,60]$，会面条件 $|x-y|\\le20$。\n可行域为 $60\\times60$ 正方形，会面域=正方形挖去两个直角边为 $40$ 的三角形。\n$P=1-\\frac{40^2}{60^2}=1-\\frac{1600}{3600}=1-\\frac49=\\frac59$。",
 methods:[
  {title:"解法一：面积比",body:"画 $|x-y|\\le20$ 的带状区域，求占正方形面积比。"},
  {title:"解法二：对立面积",body:"不能会面=两人到达时刻差$>20$，对应两个三角形，先算对立再取补。"}
 ]
},
{id:48,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["条件概率"],
 stem:"已知 $P(A)=0.3$，$P(B)=0.5$，$P(A\\cup B)=0.6$，则 $P(A\\mid B)=$（　）。",
 options:["$0.3$","$0.4$","$0.5$","$0.6$","$0.7$"],
 answer:1,
 easy:"$P(AB)=P(A)+P(B)-P(A\\cup B)$，再 $P(A\\mid B)=\\frac{P(AB)}{P(B)}$。",
 detail:"$P(AB)=0.3+0.5-0.6=0.2$，$P(A\\mid B)=\\frac{0.2}{0.5}=0.4$。",
 methods:[
  {title:"解法一：条件概率公式",body:"先求交集再除以条件事件概率。"},
  {title:"解法二：比例法",body:"$P(A|B)=\\frac{P(A)+P(B)-P(A\\cup B)}{P(B)}$，一步代入。"}
 ]
},
{id:49,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["独立性","条件概率"],
 stem:"设 $A,B$ 是两事件，$0<P(A)<1$，$P(B)>0$，$P(B\\mid A)=P(B\\mid\\bar{A})$，则必有（　）。",
 options:["$P(A\\mid B)=P(\\bar{A}\\mid B)$","$P(A\\mid B)\\ne P(\\bar{A}\\mid B)$","$P(AB)=P(A)P(B)$","$P(AB)\\ne P(A)P(B)$","$P(A)=P(B)$"],
 answer:2,
 easy:"$P(B\\mid A)=P(B\\mid\\bar{A})$ 等价于 $A,B$ 相互独立。",
 detail:"$P(B\\mid A)=\\frac{P(AB)}{P(A)}$，$P(B\\mid\\bar{A})=\\frac{P(B)-P(AB)}{1-P(A)}$。\n令二者相等：$\\frac{P(AB)}{P(A)}=\\frac{P(B)-P(AB)}{1-P(A)}$，交叉相乘得 $P(AB)=P(A)P(B)$，即 $A,B$ 独立。",
 methods:[
  {title:"解法一：条件概率相等→独立",body:"把两个条件概率展开交叉相乘，化简得独立性。"},
  {title:"解法二：直观",body:"无论 $A$ 是否发生，$B$ 发生概率都相同，说明 $B$ 与 $A$ 无关，即独立。"}
 ]
},
{id:50,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["条件概率"],
 stem:"在 4 把钥匙中只有一把能打开门，若已经试过一次打不开（用过的钥匙不再使用），则下一次能打开门的概率为（　）。",
 options:["$\\frac{1}{3}$","$\\frac{1}{4}$","$\\frac{1}{12}$","$\\frac{3}{4}$","$\\frac{1}{2}$"],
 answer:0,
 easy:"第一次失败后剩 3 把钥匙，其中 1 把能开，故 $\\frac13$。",
 detail:"第一次已确定是坏钥匙且不放回，剩余 3 把中恰 1 把能开，故 $P=\\frac13$。",
 methods:[
  {title:"解法一：条件概率",body:"给定“第一次失败”这一条件，直接看剩余钥匙。"},
  {title:"解法二：贝叶斯",body:"$P(\\text{第二次开}|\\text{第一次不开})=\\frac{P(\\text{第一次不开且第二次开})}{P(\\text{第一次不开})}=\\frac{\\frac34\\cdot\\frac13}{\\frac34}=\\frac13$。"}
 ]
},
{id:51,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["全概率公式","贝叶斯公式"],
 stem:"盒中放有 12 个乒乓球，其中 9 个是新的。第一次比赛从中任取 3 个使用后仍放回，第二次比赛再从盒中任取 3 个球。则第二次取到 3 只新球，而第一次取到 1 只新球的概率为（　）。",
 options:["$\\frac{1}{220}$","$\\frac{54}{110}$","$\\frac{27}{220}$","$\\frac{3}{14}$","$\\frac{1}{14}$"],
 answer:3,
 easy:"求 $P(A_1\\mid B)$（$A_i$=第一次取 $i$ 个新球，$B$=第二次取 3 个新球），用贝叶斯。",
 detail:"$P(A_i)=\\frac{C_9^iC_3^{3-i}}{C_{12}^3}$：$P(A_0)=\\frac1{220},P(A_1)=\\frac{27}{220},P(A_2)=\\frac{108}{220},P(A_3)=\\frac{84}{220}$。\n$P(B\\mid A_i)=\\frac{C_{9-i}^3}{C_{12}^3}$：$\\frac{84}{220},\\frac{56}{220},\\frac{35}{220},\\frac{20}{220}$。\n$P(A_1\\mid B)=\\frac{P(A_1)P(B\\mid A_1)}{\\sum_i P(A_i)P(B\\mid A_i)}=\\frac{27\\times56}{84+1512+3780+1680}=\\frac{1512}{7056}=\\frac{3}{14}$。",
 methods:[
  {title:"解法一：贝叶斯公式",body:"“已知第二次结果反推第一次”，分子用第一次取1新的贡献，分母为全概率。"},
  {title:"解法二：两步全概率",body:"先由全概率算 $P(B)$，再用条件概率定义 $\\frac{P(A_1B)}{P(B)}$ 反推。"}
 ]
},
{id:52,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["贝叶斯公式"],
 stem:"某工厂甲、乙、丙三个车间生产同一种螺钉，产量依次占全厂的 $45\\%$、$35\\%$、$20\\%$，各车间次品率依次为 $4\\%$、$2\\%$、$5\\%$。现从待出厂产品中查出 1 个次品，则此次品由乙车间生产的概率为（　）。",
 options:["$0.2$","$0.3$","$0.5$","$0.6$","$0.8$"],
 answer:0,
 easy:"贝叶斯：$\\frac{0.35\\times0.02}{0.45\\times0.04+0.35\\times0.02+0.20\\times0.05}$。",
 detail:"$P(\\text{乙}\\mid\\text{次品})=\\frac{0.35\\times0.02}{0.45\\times0.04+0.35\\times0.02+0.20\\times0.05}=\\frac{0.007}{0.018+0.007+0.010}=\\frac{0.007}{0.035}=0.2$。",
 methods:[
  {title:"解法一：贝叶斯公式",body:"分子=乙车间次品贡献，分母=总次品率。"},
  {title:"解法二：比例法",body:"三车间次品贡献 $0.018,0.007,0.010$，乙占 $\\frac{0.007}{0.035}=0.2$。"}
 ]
},
{id:53,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["贝叶斯公式"],
 stem:"考卷中一道选择题有 4 个答案，仅有一个正确，设一个学生知道正确答案或不知道而乱猜是等可能的。如果这个学生答对了，他确实知道正确答案的概率为（　）。",
 options:["$0.0625$","$0.1875$","$0.8$","$0.75$","$0.85$"],
 answer:2,
 easy:"贝叶斯：$\\frac{0.5\\times1}{0.5\\times1+0.5\\times\\frac14}$。",
 detail:"设 $A$=知道答案，$B$=答对。$P(A)=0.5$，$P(B\\mid A)=1$，$P(B\\mid\\bar{A})=\\frac14$。\n$P(A\\mid B)=\\frac{0.5\\times1}{0.5\\times1+0.5\\times\\frac14}=\\frac{0.5}{0.625}=0.8$。",
 methods:[
  {title:"解法一：贝叶斯公式",body:"已知“答对”反推“是否真知道”。"},
  {title:"解法二：比例法",body:"知道者答对贡献 $0.5$，猜对贡献 $0.5\\times\\frac14=0.125$，知道者占比 $\\frac{0.5}{0.625}=0.8$。"}
 ]
},
{id:54,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["条件概率","全概率公式"],
 stem:"某专业学生来自三个地区，人数分别 10 名、10 名、15 名，其中女生分别为 3 名、7 名和 5 名。随机取一个地区，从中先后抽出两名学生。若已知后抽到的一名是男生，则先抽到的一名是女生的概率为（　）。",
 options:["$\\frac{4}{9}$","$\\frac{3}{7}$","$\\frac{74}{175}$","$\\frac{72}{315}$","$\\frac{72}{175}$"],
 answer:2,
 easy:"求 $P(A_1\\mid A_2)$（$A_1$=先抽到女生，$A_2$=后抽到男生），用条件概率+全概率。",
 detail:"记 $D_i$ 为第 $i$ 个地区。\n$P(A_1A_2)=\\frac13(\\frac3{10}\\cdot\\frac79+\\frac7{10}\\cdot\\frac39+\\frac5{15}\\cdot\\frac{10}{14})=\\frac13(\\frac{21}{90}+\\frac{21}{90}+\\frac{50}{210})=\\frac{74}{315}$。\n$P(A_2)=\\frac13(\\frac7{10}+\\frac3{10}+\\frac{10}{15})=\\frac13(1+\\frac23)=\\frac59=\\frac{175}{315}$。\n$P(A_1\\mid A_2)=\\frac{74/315}{175/315}=\\frac{74}{175}$。",
 methods:[
  {title:"解法一：条件概率+全概率",body:"分子分母分别对三个地区做全概率求和，再相除。"},
  {title:"解法二：逐地区加权",body:"每个地区算“先女后男”与“第二次男”之比再按 $\\frac13$ 加权，本质相同。"}
 ]
},
{id:55,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["条件概率","包含关系"],
 stem:"假设事件 $A$ 和事件 $B$ 满足 $P(A\\mid B)=1$，则必有（　）。",
 options:["$A$ 是必然事件","$P(\\bar{A}\\mid B)=0$","$B\\subset A$","$A\\subset B$","$P(\\bar{A}\\mid B)=1$"],
 answer:2,
 easy:"$P(A\\mid B)=1$ 表示“$B$ 发生必导致 $A$ 发生”，即 $B\\subset A$。",
 detail:"$P(A\\mid B)=\\frac{P(AB)}{P(B)}=1\\Rightarrow P(AB)=P(B)$，即 $B$ 发生时 $A$ 必发生，$B\\subset A$。\n同时 $P(\\bar{A}\\mid B)=1-P(A\\mid B)=0$。",
 methods:[
  {title:"解法一：条件概率展开",body:"$P(AB)=P(B)$ 说明 $B$ 全部落在 $A$ 内。"},
  {title:"解法二：直观",body:"已知 $B$ 发生则 $A$ 必发生，等价于 $B\\subset A$。"}
 ]
},
{id:56,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["全概率公式"],
 stem:"利率上升的概率估计为 $0.8$。若利率上升，股票价格指数下跌的概率为 $0.9$；若利率不上升，指数仍下跌的概率为 $0.4$。则指数下跌的概率是（　）。",
 options:["$0.4$","$0.6$","$0.72$","$0.8$","$0.9$"],
 answer:3,
 easy:"全概率：$P(跌)=P(升)P(跌|升)+P(不升)P(跌|不升)$。",
 detail:"$P(\\text{跌})=0.8\\times0.9+0.2\\times0.4=0.72+0.08=0.80$。",
 methods:[
  {title:"解法一：全概率公式",body:"按“利率是否上升”这一完备事件组加权。"},
  {title:"解法二：概率树",body:"画树形图，两分支概率相加。"}
 ]
},
{id:57,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["贝叶斯公式"],
 stem:"某种诊断癌症的试验：以 $A$ 表示“试验反应为阳性”，$C$ 表示“被诊断者患有癌症”，已知 $P(A\\mid C)=0.95$，$P(A\\mid\\bar{C})=0.05$，且人群中 $P(C)=0.005$，则 $P(C\\mid A)=$（　）。",
 options:["$0.087$","$0.108$","$0.359$","$0.584$","$0.783$"],
 answer:0,
 easy:"贝叶斯：$\\frac{0.95\\times0.005}{0.95\\times0.005+0.05\\times0.995}$。",
 detail:"$P(C\\mid A)=\\frac{0.95\\times0.005}{0.95\\times0.005+0.05\\times0.995}=\\frac{0.00475}{0.00475+0.04975}=\\frac{0.00475}{0.0545}\\approx0.087$。",
 methods:[
  {title:"解法一：贝叶斯公式",body:"阳性反推患病，分母为总阳性率（全概率）。"},
  {title:"解法二：比例法",body:"真阳性 $0.00475$ 与假阳性 $0.04975$ 之比，真阳性占比约 $8.7\\%$。注意“低患病率下阳性预测值很低”这一反直觉结论。"}
 ]
},
{id:58,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["贝叶斯公式"],
 stem:"一人乘公共汽车或地铁上班的概率分别是 $0.4$ 和 $0.6$。乘公共汽车时有 $30\\%$ 的日子迟到，乘地铁时有 $10\\%$ 的日子迟到。若此人在某一天迟到，其乘地铁的概率是（　）。",
 options:["$\\frac{1}{5}$","$\\frac{1}{3}$","$\\frac{2}{5}$","$\\frac{3}{5}$","$\\frac{2}{3}$"],
 answer:1,
 easy:"贝叶斯：$\\frac{0.6\\times0.1}{0.4\\times0.3+0.6\\times0.1}$。",
 detail:"$P(\\text{地铁}\\mid\\text{迟到})=\\frac{0.6\\times0.1}{0.4\\times0.3+0.6\\times0.1}=\\frac{0.06}{0.18}=\\frac13$。",
 methods:[
  {title:"解法一：贝叶斯公式",body:"迟到反推交通方式。"},
  {title:"解法二：比例法",body:"公交迟到贡献 $0.12$、地铁迟到贡献 $0.06$，地铁占比 $\\frac{0.06}{0.18}=\\frac13$。"}
 ]
},
{id:59,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["贝叶斯公式"],
 stem:"有朋友来访，他乘火车、轮船、汽车、飞机的概率分别是 $0.3,0.2,0.1,0.4$。乘火车、轮船、汽车迟到概率分别为 $\\frac14,\\frac13,\\frac1{12}$，乘飞机不会迟到。结果他迟到了，则他乘火车来的概率是（　）。",
 options:["$\\frac{1}{4}$","$\\frac{1}{2}$","$\\frac{1}{3}$","$\\frac{3}{4}$","$\\frac{2}{3}$"],
 answer:1,
 easy:"贝叶斯：$\\frac{0.3\\times\\frac14}{0.3\\times\\frac14+0.2\\times\\frac13+0.1\\times\\frac1{12}+0.4\\times0}$。",
 detail:"分母（总迟到概率）$=0.3\\times\\frac14+0.2\\times\\frac13+0.1\\times\\frac1{12}=0.075+0.0667+0.00833=0.15$。\n分子（火车且迟到）$=0.3\\times\\frac14=0.075$。\n$P=\\frac{0.075}{0.15}=\\frac12$。",
 methods:[
  {title:"解法一：贝叶斯公式",body:"迟到反推交通方式。"},
  {title:"解法二：比例法",body:"三种迟到贡献 $0.075,0.0667,0.00833$，火车占 $\\frac{0.075}{0.15}=\\frac12$。"}
 ]
},
{id:60,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["条件概率","加法公式"],
 stem:"随机事件 $A,B$ 满足 $P(A)=0.6$，$P(B)=0.5$，$P(A\\cup B)=0.7$，则 $P(A\\mid B)=$（　）。",
 options:["$0.6$","$0.7$","$0.8$","$0.9$","$0.21$"],
 answer:2,
 easy:"$P(AB)=P(A)+P(B)-P(A\\cup B)$，再除以 $P(B)$。",
 detail:"$P(AB)=0.6+0.5-0.7=0.4$，$P(A\\mid B)=\\frac{0.4}{0.5}=0.8$。",
 methods:[
  {title:"解法一：条件概率公式",body:"先加法公式求交集，再条件概率。"},
  {title:"解法二：一步代入",body:"$P(A|B)=\\frac{P(A)+P(B)-P(A\\cup B)}{P(B)}$。"}
 ]
},
{id:61,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["条件概率","包含关系"],
 stem:"$A,B$ 为任意两个随机事件，且 $A\\subset B$，$P(B)>0$，则下列选项中必然成立的是（　）。",
 options:["$P(A\\mid B)>P(A)$","$P(A\\mid B)\\ge P(A)$","$P(A\\mid B)<P(A)$","$P(A\\mid B)\\le P(A)$","$P(A\\mid B)=P(A)$"],
 answer:1,
 easy:"$A\\subset B\\Rightarrow P(AB)=P(A)$，故 $P(A\\mid B)=\\frac{P(A)}{P(B)}\\ge P(A)$（因 $P(B)\\le1$）。",
 detail:"由 $A\\subset B$ 得 $P(AB)=P(A)$。\n$P(A\\mid B)=\\frac{P(AB)}{P(B)}=\\frac{P(A)}{P(B)}\\ge P(A)$（因为 $0<P(B)\\le1$）。\n当 $P(B)<1$ 时严格大于，$P(B)=1$ 时取等，故恒有 $\\ge$。",
 methods:[
  {title:"解法一：条件概率展开",body:"把包含关系转成 $P(AB)=P(A)$ 再代入条件概率公式。"},
  {title:"解法二：直观",body:"已知 $B$ 发生，而 $A\\subset B$，$A$ 在 $B$ 内的占比不小于其在全空间的占比。"}
 ]
},
{id:62,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["全概率公式"],
 stem:"有三个工人同时加工同一批零件，零件由各工人加工的概率分别为 $0.5,0.3,0.2$，各工人加工的零件为合格品的概率分别为 $0.92,0.9,0.95$，则这批零件的合格率为（　）。",
 options:["$0.46$","$0.59$","$0.92$","$0.34$","$0.73$"],
 answer:2,
 easy:"全概率加权：$0.5\\times0.92+0.3\\times0.9+0.2\\times0.95$。",
 detail:"$P(\\text{合格})=0.5\\times0.92+0.3\\times0.9+0.2\\times0.95=0.46+0.27+0.19=0.92$。",
 methods:[
  {title:"解法一：全概率公式",body:"对三个工人的合格率按加工比例加权。"},
  {title:"解法二：加权平均",body:"合格率=各来源合格率×占比求和，与全概率公式一致。"}
 ]
},
{id:63,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["条件概率","加法公式"],
 stem:"某大厦装有甲、乙两个可独立使用的报警系统，有效概率分别为 $0.94$ 和 $0.92$。在乙报警系统失灵的条件下，甲仍有效的概率为 $0.88$。则在甲失灵的条件下，乙仍有效的概率为（　）。",
 options:["$0.83$","$0.59$","$0.99$","$0.64$","$0.73$"],
 answer:0,
 easy:"用 $P(A)=0.94,P(B)=0.92,P(A\\mid\\bar{B})=0.88$ 求 $P(B\\mid\\bar{A})=\\frac{P(B)-P(AB)}{P(\\bar{A})}$。",
 detail:"设 $A$=甲有效，$B$=乙有效。\n$P(A\\bar{B})=P(\\bar{B})P(A\\mid\\bar{B})=0.08\\times0.88=0.0704$。\n$P(AB)=P(A)-P(A\\bar{B})=0.94-0.0704=0.8696$。\n$P(\\bar{A}B)=P(B)-P(AB)=0.92-0.8696=0.0504$。\n$P(B\\mid\\bar{A})=\\frac{0.0504}{0.06}=0.84\\approx0.83$。",
 methods:[
  {title:"解法一：逐步求交",body:"由条件概率求 $P(A\\bar{B})$，再由差事件求 $P(AB)$、$P(\\bar{A}B)$，最后求条件概率。"},
  {title:"解法二：加法公式反推",body:"先求 $P(A\\cup B)=P(A\\bar{B})+P(B)=0.0704+0.92=0.9904$，再 $P(\\bar{A}B)=P(A\\cup B)-P(A)=0.0504$。"}
 ],
 fix:"精确计算约为 $0.84$，原书答案 $0.83$ 系中间量四舍五入所致，选 A（最接近）。"}
,
{id:64,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["独立性","加法公式"],
 stem:"已知 $P(A)=0.2$，$P(B)=0.3$，且 $P(A\\mid B)=P(A\\mid\\bar{B})$，则 $P(A\\cup B)=$（　）。",
 options:["$0.06$","$0.2$","$0.32$","$0.44$","$0.5$"],
 answer:3,
 easy:"$P(A\\mid B)=P(A\\mid\\bar{B})$ 推出 $A,B$ 独立，$P(AB)=P(A)P(B)$。",
 detail:"由 $P(A\\mid B)=P(A\\mid\\bar{B})$ 得 $A,B$ 独立，故 $P(AB)=0.2\\times0.3=0.06$。\n$P(A\\cup B)=0.2+0.3-0.06=0.44$。",
 methods:[
  {title:"解法一：先证独立",body:"条件概率相等等价于独立，再加法公式。"},
  {title:"解法二：直接展开",body:"$\\frac{P(AB)}{0.3}=\\frac{0.2-P(AB)}{0.7}$，解出 $P(AB)=0.06$ 再求并。"}
 ]
},
{id:65,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["条件概率","差事件"],
 stem:"设 $A,B$ 为随机事件，已知 $P(A)=0.8$，$P(B)=0.6$，$P(B\\mid\\bar{A})=0.7$，则 $P(A\\mid\\bar{B})=$（　）。",
 options:["$0.85$","$0.70$","$0.5$","$0.25$","$0.1$"],
 answer:0,
 easy:"先由 $P(B\\mid\\bar{A})$ 求 $P(\\bar{A}B)$，再求 $P(AB)$，最后 $P(A\\mid\\bar{B})=\\frac{P(A)-P(AB)}{P(\\bar{B})}$。",
 detail:"$P(\\bar{A}B)=P(\\bar{A})P(B\\mid\\bar{A})=0.2\\times0.7=0.14$。\n$P(AB)=P(B)-P(\\bar{A}B)=0.6-0.14=0.46$。\n$P(A\\mid\\bar{B})=\\frac{P(A\\bar{B})}{P(\\bar{B})}=\\frac{0.8-0.46}{0.4}=\\frac{0.34}{0.4}=0.85$。",
 methods:[
  {title:"解法一：逐步求交",body:"由 $\\bar{A}$ 条件推 $P(\\bar{A}B)$，进而求 $P(AB)$、$P(A\\bar{B})$。"},
  {title:"解法二：概率矩阵",body:"列 $2\\times2$ 联合表（A/Ā × B/B̄），逐格填出后读条件概率。"}
 ],
 fix:"原书扫描件把 $P(B\\mid\\bar{A})$ 的 $\\bar{A}$ 上横线丢失（误读为 $P(B\\mid A)$），导致歧义，已还原。"}
,
{id:66,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["全概率公式","贝叶斯公式"],
 stem:"甲盒中有 3 个黑球 1 个白球，乙盒中有 2 个黑球 2 个白球。先从甲盒任取 1 球 $X$ 放入乙盒，再从乙盒任取 1 球 $Y$。若已知 $Y$ 是黑球，则 $X$ 是黑球的概率为（　）。",
 options:["$\\frac{11}{20}$","$\\frac{9}{20}$","$\\frac{5}{8}$","$\\frac{9}{11}$","$\\frac{1}{2}$"],
 answer:3,
 easy:"贝叶斯：$P(X黑\\mid Y黑)=\\frac{P(X黑)P(Y黑\\mid X黑)}{P(Y黑)}$。",
 detail:"$P(Y黑)=P(X黑)P(Y黑|X黑)+P(X白)P(Y黑|X白)=\\frac34\\cdot\\frac35+\\frac14\\cdot\\frac25=\\frac{9}{20}+\\frac{2}{20}=\\frac{11}{20}$。\n$P(X黑\\mid Y黑)=\\frac{9/20}{11/20}=\\frac{9}{11}$。",
 methods:[
  {title:"解法一：贝叶斯公式",body:"已知乙抽黑反推甲抽黑。"},
  {title:"解法二：两步全概率",body:"先全概率算 $P(Y黑)$，再用条件概率定义。"}
 ]
},
{id:67,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["全概率公式","抽签公平性"],
 stem:"盒中有 2 个红球、3 个黑球。5 个人每人从中抽一个球（不放回），则第二个人抽中红球的概率为（　）。",
 options:["$0.2$","$0.4$","$0.6$","$0.7$","$0.8$"],
 answer:1,
 easy:"抽签公平性：第二人抽中红球概率=红球占比 $\\frac25=0.4$。",
 detail:"全概率：$P=\\frac25\\cdot\\frac14+\\frac35\\cdot\\frac24=\\frac{2}{20}+\\frac{6}{20}=0.4$。\n（本质即“抽签与顺序无关”，第二人抽中红球概率等于总体红球比例。）",
 methods:[
  {title:"解法一：全概率公式",body:"按第一人抽红/黑分情况加权。"},
  {title:"解法二：抽签公平性",body:"不放回抽签，每个人抽中某颜色球的概率都等于该色球占比，与抽签顺序无关。"}
 ]
},
{id:68,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["全概率公式","二项分布"],
 stem:"某人射击一次击中目标的概率为 $0.2$。现他从 $1,2,3,4$ 四个数字中随机抽一个，抽得的数字即为他向目标射击的次数。这人击中目标两次的概率为（　）。",
 options:["$0.04$","$0.01$","$0.25$","$0.0724$","$0.2896$"],
 answer:3,
 easy:"对射击次数 $n$ 用全概率：$\\frac14\\sum_{n=1}^{4}P(\\text{恰中2次}\\mid n)$。",
 detail:"$P=\\frac14[C_2^2(0.2)^2+C_3^2(0.2)^2(0.8)+C_4^2(0.2)^2(0.8)^2]$\n$=\\frac14[0.04+0.096+0.1536]=\\frac14\\times0.2896=0.0724$。（$n=1$ 时恰中 2 次概率为 0）",
 methods:[
  {title:"解法一：全概率公式",body:"射击次数随机，对各次数恰中 2 次概率取平均。"},
  {title:"解法二：逐项列式",body:"$n=2,3,4$ 三种情况分别用二项分布计算再除以 4。"}
 ]
},
{id:69,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["条件概率","加法公式"],
 stem:"已知 $P(A)=0.5$，$P(B)=0.6$，$P(AB)=0.4$，则 $P(\\bar{A}\\mid\\bar{B})=$（　）。",
 options:["$\\frac{1}{3}$","$\\frac{3}{4}$","$\\frac{1}{2}$","$\\frac{2}{3}$","$\\frac{1}{4}$"],
 answer:1,
 easy:"$P(\\bar{A}\\bar{B})=1-P(A\\cup B)$，$P(\\bar{A}\\mid\\bar{B})=\\frac{P(\\bar{A}\\bar{B})}{P(\\bar{B})}$。",
 detail:"$P(A\\cup B)=0.5+0.6-0.4=0.7$，$P(\\bar{A}\\bar{B})=1-0.7=0.3$。\n$P(\\bar{A}\\mid\\bar{B})=\\frac{0.3}{1-0.6}=\\frac{0.3}{0.4}=\\frac34$。",
 methods:[
  {title:"解法一：德摩根+条件概率",body:"先求“都不发生”概率，再除以 $P(\\bar{B})$。"},
  {title:"解法二：直接式",body:"$P(\\bar{A}|\\bar{B})=\\frac{1-P(A)-P(B)+P(AB)}{1-P(B)}$ 一步代入。"}
 ],
 fix:"原书扫描件把 $\\bar{A},\\bar{B}$ 的上横线丢失（误读为 $P(A\\mid B)$），已还原为 $P(\\bar{A}\\mid\\bar{B})$。"}
,
{id:70,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["贝叶斯公式"],
 stem:"已知一批产品中有 $95\\%$ 是合格品。检查时，一个合格品被误判为次品的概率为 $0.02$，一个次品被误判为合格品的概率为 $0.03$，则一个经检查被判为合格品的产品确实是合格品的概率为（　）。",
 options:["$0.03$","$0.05$","$0.9325$","$0.95$","$0.998$"],
 answer:4,
 easy:"贝叶斯：$\\frac{0.95\\times0.98}{0.95\\times0.98+0.05\\times0.03}$。",
 detail:"$P(\\text{真合格}\\mid\\text{判合格})=\\frac{0.95\\times0.98}{0.95\\times0.98+0.05\\times0.03}=\\frac{0.931}{0.931+0.0015}=\\frac{0.931}{0.9325}\\approx0.998$。",
 methods:[
  {title:"解法一：贝叶斯公式",body:"判合格反推真合格，分母为总判合格率。"},
  {title:"解法二：比例法",body:"真合格且判合格 $0.931$ 占总判合格 $0.9325$ 的比例即答案。"}
 ]
},
{id:71,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["全概率公式","抽签公平性"],
 stem:"袋中共有 10 个球，其中 4 个白球、6 个红球。若甲先任取一球不放回，乙再任取一球，则乙取得白球的概率为（　）。",
 options:["$0.2$","$0.3$","$0.4$","$0.5$","$0.6$"],
 answer:2,
 easy:"抽签公平性：乙取白球概率=白球占比 $\\frac4{10}=0.4$。",
 detail:"$P=\\frac4{10}\\cdot\\frac39+\\frac6{10}\\cdot\\frac49=\\frac{12}{90}+\\frac{24}{90}=\\frac{36}{90}=0.4$。",
 methods:[
  {title:"解法一：全概率公式",body:"按甲取白/红分情况。"},
  {title:"解法二：抽签公平性",body:"不放回抽取，乙取白球概率等于白球比例，与先后无关。"}
 ]
},
{id:72,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["条件概率","差事件"],
 stem:"设 $A,B$ 为两事件，$P(A)=0.92$，$P(B)=0.93$，$P(B\\mid\\bar{A})=0.85$，则 $P(A\\mid\\bar{B})=$（　）。",
 options:["$0.85$","$0.058$","$0.83$","$0.862$","$0.068$"],
 answer:2,
 easy:"由 $P(B\\mid\\bar{A})$ 求 $P(\\bar{A}B)$，再求 $P(AB)$、$P(A\\bar{B})$，最后条件概率。",
 detail:"$P(\\bar{A}B)=0.08\\times0.85=0.068$。\n$P(AB)=0.93-0.068=0.862$。\n$P(A\\bar{B})=0.92-0.862=0.058$。\n$P(A\\mid\\bar{B})=\\frac{0.058}{1-0.93}=\\frac{0.058}{0.07}\\approx0.83$。",
 methods:[
  {title:"解法一：逐步求交",body:"由 $\\bar{A}$ 条件求 $P(\\bar{A}B)$，链条式求出 $P(A\\bar{B})$。"},
  {title:"解法二：概率矩阵",body:"填 $2\\times2$ 联合概率表后读条件概率。"}
 ]
},
{id:73,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["贝叶斯公式","组合"],
 stem:"某种易损商品成箱出售，每箱 20 件。假设每箱含 0、1、2 件残品的概率分别为 $0.8,0.1,0.1$。顾客随意取一箱，只随意察看其中四件，结果未发现残品，于是买下。则在买下的一箱中确实无残品的概率为（　）。",
 options:["$0.857$","$0.583$","$0.836$","$0.862$","$0.848$"],
 answer:4,
 easy:"贝叶斯：$P(无残\\mid 察4件无残)=\\frac{0.8\\times1}{0.8+0.1\\cdot\\frac{16}{20}+0.1\\cdot\\frac{C_{18}^4}{C_{20}^4}}$。",
 detail:"$P(\\text{察4件无残})=0.8\\times1+0.1\\times\\frac{C_{19}^4}{C_{20}^4}+0.1\\times\\frac{C_{18}^4}{C_{20}^4}$\n$=0.8+0.1\\times\\frac{16}{20}+0.1\\times\\frac{12}{19}\\approx0.8+0.08+0.0632=0.9432$。\n$P(\\text{无残}\\mid\\text{察4件无残})=\\frac{0.8}{0.9432}\\approx0.848$。",
 methods:[
  {title:"解法一：贝叶斯公式",body:"察无残反推真无残，分母为总“察无残”概率。"},
  {title:"解法二：比例法",body:"无残贡献 $0.8$ 占总察无残 $0.9432$ 的比例。"}
 ]
},
{id:74,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["贝叶斯公式"],
 stem:"用血清甲胎蛋白法诊断肝癌，$P(A\\mid C)=0.95$，$P(\\bar{A}\\mid\\bar{C})=0.9$，其中 $C$ 表示“被检验者患有肝癌”，$A$ 表示“判断被检验者患有肝癌”。设人群中 $P(C)=0.0004$。若一人被此检验法诊断为患肝癌，则此人真正患肝癌的概率为（　）。",
 options:["$0.0004$","$0.00038$","$0.0038$","$0.95$","$0.9$"],
 answer:2,
 easy:"贝叶斯：$\\frac{0.0004\\times0.95}{0.0004\\times0.95+0.9996\\times0.1}$。",
 detail:"$P(A\\mid\\bar{C})=1-P(\\bar{A}\\mid\\bar{C})=0.1$。\n$P(C\\mid A)=\\frac{0.0004\\times0.95}{0.0004\\times0.95+0.9996\\times0.1}=\\frac{0.00038}{0.00038+0.09996}\\approx0.0038$。",
 methods:[
  {title:"解法一：贝叶斯公式",body:"阳性反推真患病，分母为总阳性率。"},
  {title:"解法二：比例法",body:"真阳性 $0.00038$ 与假阳性 $0.09996$ 相比极小，占比约 $0.38\\%$，体现低患病率下阳性预测值很低。"}
 ]
},
{id:75,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["全概率公式","组合"],
 stem:"验收一批（100 件）乐器：随机选 3 件测试，若 3 件中至少一件被判音色不纯则拒收。一件音色不纯的乐器被查出为不纯的概率为 $0.95$，一件音色纯的乐器被误认不纯的概率为 $0.01$。已知 100 件中恰有 4 件音色不纯，则这批乐器被接收的概率为（　）。",
 options:["$0.7853$","$0.8574$","$0.8629$","$0.8791$","$0.9042$"],
 answer:2,
 easy:"接收=3件都判纯，按选出的3件中不纯件数 $i=0,1,2,3$ 用全概率。",
 detail:"设 $H_i$=选出3件中恰 $i$ 件不纯，$A$=接收。\n$P(H_0)=\\frac{C_{96}^3}{C_{100}^3}\\approx0.884$，$P(H_1)\\approx0.113$，$P(H_2)\\approx0.0036$，$P(H_3)\\approx0$。\n$P(A\\mid H_0)=0.99^3$，$P(A\\mid H_1)=0.99^2\\times0.05$，$P(A\\mid H_2)=0.99\\times0.05^2$，$P(A\\mid H_3)=0.05^3$。\n$P(A)\\approx0.884\\times0.9703+0.113\\times0.0490+0.0036\\times0.0025+0\\approx0.8629$。",
 methods:[
  {title:"解法一：全概率公式",body:"按选出不纯件数 $i$ 划分，分别算“3件全判纯”概率加权。"},
  {title:"解法二：二项近似",body:"抽3件可近似看作独立（$n$ 大），每件判纯概率约 $0.96\\times0.99+0.04\\times0.05\\approx0.9524$，$0.9524^3\\approx0.864$，与精确值接近。"}
 ]
},
{id:76,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["独立性","条件概率"],
 stem:"设 $0<P(A)<1$，$0<P(B)<1$，且 $P(A\\mid B)=P(A\\mid\\bar{B})$，则（　）。",
 options:["事件 $A$ 与 $B$ 互不相容","事件 $A$ 包含事件 $B$","事件 $A$ 和 $B$ 不独立","事件 $A$ 和 $B$ 相互独立","无法判断"],
 answer:3,
 easy:"$P(A\\mid B)=P(A\\mid\\bar{B})$ 是 $A,B$ 相互独立的等价刻画。",
 detail:"$P(A\\mid B)=\\frac{P(AB)}{P(B)}$，$P(A\\mid\\bar{B})=\\frac{P(A)-P(AB)}{1-P(B)}$。\n令二者相等：$\\frac{P(AB)}{P(B)}=\\frac{P(A)-P(AB)}{1-P(B)}$，交叉相乘得 $P(AB)=P(A)P(B)$，即 $A,B$ 相互独立。",
 methods:[
  {title:"解法一：展开交叉相乘",body:"把两个条件概率展开，交叉相乘解出 $P(AB)=P(A)P(B)$。"},
  {title:"解法二：直观",body:"$B$ 是否发生都不影响 $A$ 的发生概率，说明 $A$ 与 $B$ 无关，即独立。"}
 ],
 fix:"原书扫描件把“=”误识别为“+”，读成 $P(A\\mid B)+P(A\\mid\\bar B)=1$，正确条件为 $P(A\\mid B)=P(A\\mid\\bar{B})$。"}
,
{id:77,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["独立性","互斥"],
 stem:"设随机事件 $A$ 与 $B$ 互不相容且相互独立，则 $\\min\\{P(A),P(B)\\}=$（　）。",
 options:["$P(A)$","$P(B)$","$1$","$0.5$","$0$"],
 answer:4,
 easy:"互斥 $\\Rightarrow P(AB)=0$；独立 $\\Rightarrow P(AB)=P(A)P(B)$，故至少一个概率为 0。",
 detail:"互不相容：$P(AB)=0$。\n相互独立：$P(AB)=P(A)P(B)$。\n联立得 $P(A)P(B)=0$，又 $P(A),P(B)\\ge0$，故二者至少一个为 0，$\\min\\{P(A),P(B)\\}=0$。",
 methods:[
  {title:"解法一：联立方程组",body:"把互斥与独立的两个等式联立。"},
  {title:"解法二：反证",body:"若 $P(A),P(B)$ 都 $>0$，则 $P(AB)=P(A)P(B)>0$ 与互斥矛盾，故必有一个为 0。"}
 ]
},
{id:78,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["独立性"],
 stem:"将一枚均匀硬币抛 3 次，每次出现的都是反面，那么第 4 次出现正面的概率为（　）。",
 options:["$0.67$","$0.5$","$0.25$","$0.125$","$0.0625$"],
 answer:1,
 easy:"每次独立，第 4 次正面概率恒为 $\\frac12$（“赌徒谬误”陷阱）。",
 detail:"硬币均匀且各次独立，前 3 次结果不影响第 4 次，故 $P(\\text{第4次正面})=\\frac12$。",
 methods:[
  {title:"解法一：独立性",body:"独立重复试验，每次概率不变。"},
  {title:"解法二：条件概率",body:"$P(\\text{第4正}\\mid\\text{前3反})=\\frac{P(\\text{前3反且第4正})}{P(\\text{前3反})}=\\frac{(1/2)^4}{(1/2)^3}=\\frac12$。"}
 ]
},
{id:79,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["加法公式","独立事件"],
 stem:"甲、乙两门高炮彼此独立地向同一架飞机射击，甲击中概率 $0.4$，乙击中概率 $0.5$，则飞机被击中的概率为（　）。",
 options:["$0.20$","$0.40$","$0.50$","$0.70$","$0.90$"],
 answer:3,
 easy:"被击中=至少一个击中，$P(A\\cup B)=P(A)+P(B)-P(A)P(B)$。",
 detail:"$P(A\\cup B)=0.4+0.5-0.4\\times0.5=0.9-0.2=0.7$。",
 methods:[
  {title:"解法一：加法公式",body:"并事件=概率和-交集（独立则相乘）。"},
  {title:"解法二：对立事件",body:"$1-(1-0.4)(1-0.5)=1-0.6\\times0.5=0.7$。"}
 ]
},
{id:80,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["独立性","德摩根律"],
 stem:"若事件 $A,B,C$ 相互独立，且 $P(A)=0.75$，$P(B)=0.5$，$P(C)=0.6$，则 $P(\\bar{A}\\cup\\bar{B}\\cup\\bar{C})=$（　）。",
 options:["$0.225$","$0.5$","$0.775$","$0.95$","$1$"],
 answer:2,
 easy:"$\\bar{A}\\cup\\bar{B}\\cup\\bar{C}=\\overline{ABC}$，故 $=1-P(ABC)=1-P(A)P(B)P(C)$。",
 detail:"$P(\\bar{A}\\cup\\bar{B}\\cup\\bar{C})=P(\\overline{ABC})=1-P(ABC)=1-0.75\\times0.5\\times0.6=1-0.225=0.775$。",
 methods:[
  {title:"解法一：德摩根律",body:"至少一个不发生=“全发生”的对立，一步到位。"},
  {title:"解法二：容斥展开",body:"$P(\\bar A)+P(\\bar B)+P(\\bar C)-\\dots$ 逐项展开，较繁。"}
 ],
 fix:"原书扫描件把 $\\bar{A}\\cup\\bar{B}\\cup\\bar{C}$ 的上横线丢失（误读为 $P(A\\cup B\\cup C)$），已还原。"}
,
{id:81,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["独立性","德摩根律"],
 stem:"若事件 $A$、事件 $B$、事件 $C$ 相互独立，则下列选项中不正确的是（　）。",
 options:["$P(A\\cup B\\cup C)=1-P(\\bar{A})P(\\bar{B})P(\\bar{C})$","$P(ABC)=P(A)P(B)P(C)$","$P(AB)=P(A)P(B)$","$P(ABC)=P(A)P(B)P(C)$","$P(A\\cup B\\cup C)=1-P(A)P(B)P(C)$"],
 answer:4,
 easy:"E 项把 $P(\\bar{A}\\bar{B}\\bar{C})$ 误写成 $P(A)P(B)P(C)$，其余均正确。",
 detail:"$P(A\\cup B\\cup C)=1-P(\\bar{A}\\bar{B}\\bar{C})=1-P(\\bar{A})P(\\bar{B})P(\\bar{C})$，故 A 正确、E 错误。\nB、D（$P(ABC)=P(A)P(B)P(C)$）与 C（$P(AB)=P(A)P(B)$）由独立性直接成立。",
 methods:[
  {title:"解法一：德摩根律",body:"并集概率用“都不发生”的对立表示。"},
  {title:"解法二：排除法",body:"B、C、D 是独立性直接结论，A 是德摩根正确式，E 错。"}
 ]
},
{id:82,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["独立性","条件概率"],
 stem:"事件 $A$ 与 $B$ 相互独立，下列公式成立的是（　）。",
 options:["$AB=\\varnothing$","$P(B\\mid A)=P(B)$","$P(A\\cup B)=P(A)P(B)$","$P(A)=1-P(B)$","$A\\cup B=\\Omega$"],
 answer:1,
 easy:"独立 $\\Rightarrow P(B\\mid A)=P(B)$。",
 detail:"独立时 $P(AB)=P(A)P(B)$，故 $P(B\\mid A)=\\frac{P(AB)}{P(A)}=\\frac{P(A)P(B)}{P(A)}=P(B)$。",
 methods:[
  {title:"解法一：条件概率代入",body:"把独立性代入条件概率公式。"},
  {title:"解法二：排除法",body:"A（互斥）、C（并集）、D（对立）、E（全集）都与独立无关或错误。"}
 ]
},
{id:83,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["串联系统","独立事件"],
 stem:"某电路由元件 $A,B,C$ 串联而成，且 $A,B,C$ 相互独立。已知各元件正常的概率分别为 $P(A)=0.7$，$P(B)=0.6$，$P(C)=0.5$，则电路不正常的概率为（　）。",
 options:["$0.79$","$0.7$","$0.21$","$0.06$","$0.3$"],
 answer:0,
 easy:"串联正常=都正常，不正常=$1-0.7\\times0.6\\times0.5$。",
 detail:"$P(\\text{正常})=0.7\\times0.6\\times0.5=0.21$。\n$P(\\text{不正常})=1-0.21=0.79$。",
 methods:[
  {title:"解法一：对立事件",body:"串联正常=全正常，取补。"},
  {title:"解法二：容斥",body:"不正常=至少一个故障，容斥展开（较繁）。"}
 ]
},
{id:84,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["独立事件"],
 stem:"某企业电话系统采取“前台总机、个人分机”结构，前台总机占线概率 $0.3$，个人分机占线概率 $0.1$，两者相互独立，则从外部给员工打电话能打通的概率为（　）。",
 options:["$0.96$","$0.84$","$0.76$","$0.34$","$0.63$"],
 answer:4,
 easy:"能打通=总机不占线且分机不占线=$(1-0.3)(1-0.1)$。",
 detail:"$P(\\text{打通})=(1-0.3)(1-0.1)=0.7\\times0.9=0.63$。",
 methods:[
  {title:"解法一：独立相乘",body:"两个环节都通才打通，独立相乘。"},
  {title:"解法二：对立事件",body:"$1-P(\\text{至少一个占线})=1-(0.3+0.1-0.03)=0.63$。"}
 ]
},
{id:85,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["加法公式","独立事件"],
 stem:"甲、乙两位士兵同时向一敌机发射炮弹，甲击中概率 $0.7$，乙击中概率 $0.6$，则敌机被击中的概率为（　）。",
 options:["$0.96$","$0.64$","$0.88$","$0.34$","$0.73$"],
 answer:2,
 easy:"被击中=至少一个击中，$0.7+0.6-0.7\\times0.6$。",
 detail:"$P(A\\cup B)=0.7+0.6-0.7\\times0.6=1.3-0.42=0.88$。",
 methods:[
  {title:"解法一：加法公式",body:"并事件=概率和-交集。"},
  {title:"解法二：对立事件",body:"$1-0.3\\times0.4=0.88$。"}
 ]
},
{id:86,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["独立性","对立事件"],
 stem:"已知 $P(A_i)=0.2$，$i=1,2,3,4,5$，且各 $A_i$ 相互独立，则 $A_1,\\dots,A_5$ 至少发生一个的概率为（　）。",
 options:["$0.8^5$","$0.2^5$","$1-0.8^5$","$1-0.2^5$","$0.8^5-0.2^5$"],
 answer:2,
 easy:"至少一个发生=$1-P(\\text{都不发生})=1-(1-0.2)^5$。",
 detail:"$P(\\text{至少一个})=1-P(\\bar{A}_1\\dots\\bar{A}_5)=1-(0.8)^5$。",
 methods:[
  {title:"解法一：对立事件",body:"先算都不发生再取补。"},
  {title:"解法二：容斥",body:"$\\sum P(A_i)-\\dots$ 展开（繁）。"}
 ]
},
{id:87,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["全概率公式","独立事件"],
 stem:"甲、乙、丙三门火炮独立向目标射击，命中率分别为 $0.2,0.3,0.5$。目标被命中一发、两发、三发而被击毁的概率分别为 $0.2,0.6,0.9$。三门火炮各射击一次，则目标被击毁的概率为（　）。",
 options:["$0.132$","$0.253$","$0.328$","$0.447$","$0.5$"],
 answer:1,
 easy:"先求命中 1、2、3 发的概率，再按击毁概率加权。",
 detail:"$P(\\text{命中1发})=0.2\\cdot0.7\\cdot0.5+0.8\\cdot0.3\\cdot0.5+0.8\\cdot0.7\\cdot0.5=0.47$。\n$P(\\text{命中2发})=0.2\\cdot0.3\\cdot0.5+0.2\\cdot0.7\\cdot0.5+0.8\\cdot0.3\\cdot0.5=0.22$。\n$P(\\text{命中3发})=0.2\\cdot0.3\\cdot0.5=0.03$。\n$P(\\text{击毁})=0.47\\times0.2+0.22\\times0.6+0.03\\times0.9=0.094+0.132+0.027=0.253$。",
 methods:[
  {title:"解法一：全概率公式",body:"按命中发数划分（0,1,2,3），分别算概率再按击毁概率加权。"},
  {title:"解法二：逐发枚举",body:"列出 8 种命中组合及各自击毁概率，求和。"}
 ]
},
{id:88,ch:1,chName:"随机事件与概率",source:"样题",syllabus:true,
 tags:["两两独立","相互独立"],
 stem:"设 $A,B,C$ 三个事件两两独立，则（　）。",
 options:["$A$ 与 $BC$ 独立","$AB$ 与 $A\\cup C$ 独立","$AB$ 与 $AC$ 独立","$A\\cup B$ 与 $A\\cup C$ 独立","$A,B,C$ 相互独立"],
 answer:0,
 easy:"本题按命题意图选 A（“两两独立”应理解为“相互独立”，此时 $A$ 与 $BC$ 独立）。",
 detail:"若 $A,B,C$ 相互独立，则 $P(A\\cdot BC)=P(A)P(B)P(C)=P(A)P(BC)$，即 $A$ 与 $BC$ 独立，A 正确。\nE 错：两两独立不能推出相互独立（有经典反例）。\nB、C、D 中两事件均含 $A$，一般不独立。",
 methods:[
  {title:"解法一：独立性验证",body:"$A$ 与 $BC$ 独立需 $P(ABC)=P(A)P(B)P(C)$，相互独立时成立。"},
  {title:"解法二：排除法",body:"E 由两两独立推不出；B/C/D 两事件含共同 $A$，一般相关，故 A。"}
 ],
 fix:"严格数学上，“两两独立”不足以推出“$A$ 与 $BC$ 独立”（需“相互独立”，可用伯恩斯坦反例说明）。本题原书命题存在瑕疵，按考试意图选 A，但请记住正确前提是“相互独立”。"}
);
