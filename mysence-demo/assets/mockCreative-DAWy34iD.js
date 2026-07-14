const e=[{id:"node-sticky-1",type:"sticky",x:120,y:80,width:220,height:140,content:'如何让 AI 在创意过程中既保持发散性思维，又不偏离原始需求？关键在于建立"约束边界"——在边界内自由探索，而非无方向的随机发散。',color:"#ffbe0b",source:"human",createdAt:"2025-12-18T10:00:00Z"},{id:"node-text-2",type:"text",x:420,y:60,width:280,height:160,content:'主动推断理论认为，创意本质上是"最小化惊喜"的过程。真正有价值的创意不是天马行空的随机组合，而是在现有知识网络中找到最优的"预测误差"——既出乎意料又在情理之中。',color:"#2a2a3a",source:"human",createdAt:"2025-12-18T10:05:00Z"},{id:"node-ai-3",type:"ai-generated",x:160,y:280,width:240,height:120,content:'AI 创意辅助的核心价值：不是替代人类创意，而是作为"创意催化剂"——通过结构化的发散方法（如 SCAMPER）扩展人类的创意空间，同时用三角联想发现看似无关概念之间的深层联系。',color:"#1a3a4a",source:"ai",createdAt:"2025-12-18T10:12:00Z"},{id:"node-sticky-4",type:"sticky",x:480,y:300,width:200,height:130,content:"创意画布的设计原则：无限空间但不迷失——需要智能缩放、局部聚焦和上下文感知导航。用户的注意力是有限资源，界面应主动管理信息密度。",color:"#4da347",source:"human",createdAt:"2025-12-18T10:20:00Z"},{id:"node-ai-5",type:"ai-generated",x:340,y:480,width:260,height:140,content:'SCAMPER 方法论与主动推断的结合点：每种变换操作（替代、组合、调整等）本质上是在知识超图上执行一次"结构变异"，而自由能评估则用于筛选出最有价值的变异方向。',color:"#1a3a4a",source:"ai",createdAt:"2025-12-18T10:30:00Z"}],t=[{id:"edge-1-2",source:"node-sticky-1",target:"node-text-2"},{id:"edge-1-3",source:"node-sticky-1",target:"node-ai-3"},{id:"edge-3-5",source:"node-ai-3",target:"node-ai-5"}],n={variants:[{dimension:"substitute",label:"替代",content:'用"类比推理引擎"替代传统的 SCAMPER 检查表——不是逐项检查，而是自动从跨领域知识库中检索结构相似的概念，将替代过程从"人工列举"升级为"智能匹配"。',newNodeId:"scamper-substitute"},{dimension:"combine",label:"组合",content:'将三角联想与 SCAMPER 组合为"联想-变换链"——先通过三角联想发现三个概念之间的桥梁，再对桥梁概念执行 SCAMPER 变换，产生双层创意叠加效果。',newNodeId:"scamper-combine"},{dimension:"adapt",label:"调整",content:'将生物进化中的"基因漂变"机制调整应用到创意生成中——在约束边界内引入小幅随机变异，通过自由能评估自然选择最有价值的方向，实现"有方向的随机探索"。',newNodeId:"scamper-adapt"},{dimension:"modify",label:"修改/放大",content:'将创意输出从"单个节点"修改为"创意流"——不是一个静态的想法，而是一系列连续演化的创意节点，每个节点基于前一个节点的反馈进行迭代，形成创意的时间序列。',newNodeId:"scamper-modify"},{dimension:"put-to-other-use",label:"改变用途",content:'将"魔鬼代言人"批判工具改变用途为"创意压力测试器"——不是批判创意的缺陷，而是模拟极端用户场景和边缘条件，验证创意在这些条件下的鲁棒性。',newNodeId:"scamper-put"},{dimension:"eliminate",label:"消除",content:'消除"约束边界"中的刚性限制，改为弹性约束——允许 Agent 在特定条件下暂时突破边界，但引入"弹性回弹力"，使其在超出一定距离后被自然拉回。',newNodeId:"scamper-eliminate"},{dimension:"reverse",label:"反转",content:'反转创意流程的方向：不是从问题出发寻找方案，而是从随机生成的方案反推它能解决什么问题。这种方法常用于发现"隐藏需求"和意外创新。',newNodeId:"scamper-reverse"}]},a={concepts:["贝叶斯推断","日本侘寂美学","模块化架构"],bridge:'三个概念的共同内核是"在不完整中追求最优"。贝叶斯推断接受先验知识的不完整，通过持续更新逼近真实分布；侘寂美学拥抱不完美与无常，在不完整中发现美；模块化架构承认单个模块能力的有限，通过组合实现复杂功能。将这一哲学应用到 AI 创意系统中：不要追求"完美的创意"，而是在"足够好"的基础上持续迭代——每次迭代都是一次微小的自由能降低。',newNodeId:"trisociation-1"},o={critiques:[{point:'"结构化发散"本身就是矛盾修辞',detail:'SCAMPER 等结构化方法的前提假设——创意可以通过固定框架生成——可能本身就是错误的。真正突破性的创新往往来自对框架本身的打破，而非在框架内的操作。将发散思维"结构化"可能适得其反，限制而非扩展创意空间。'},{point:"缺乏创意质量评估标准",detail:'当前的自由能评估只能衡量创意与已有知识网络的一致性，但这恰恰会排斥真正原创的想法——因为原创想法本质上就是"高自由能"的。需要一套独立的创意质量评估维度：新颖性、可行性、影响力，而非单一的"预测误差"指标。'},{point:"人机创意边界模糊带来的责任问题",detail:'当 AI 不只是工具而是"创意催化剂"时，创意成果的归属变得模糊。如果 AI 提示了关键的方向转折点，这个创意算人类的还是 AI 的？在知识产权和学术诚信日益重要的背景下，创意画布需要内置"贡献追踪"机制，记录每个创意节点的真实来源。'}]},i=[{id:"cs1",title:"Blender 3D 模型批量变体",time:"15:20",active:!0},{id:"cs2",title:"Photoshop 产品图批处理",time:"14:05",active:!1},{id:"cs3",title:"Maya 骨骼自动绑定",time:"12:30",active:!1},{id:"cs4",title:"Maya 渲染队列自动化",time:"昨天",active:!1}],s=[{role:"assistant",content:`我是你的 AI 创意助手。我可以调度 **FileSurfer** 扫描文件、**Coder** 生成 Python 脚本、**Reviewer** 验证安全性。

我能操作 Maya、Photoshop、Blender 等创意软件，帮你自动化重复性工作。请描述你的需求。`,agentActivity:null,delay:300},{role:"user",content:"帮我把 Blender 里的 3D 模型生成 3 个变体，同时批量处理 Photoshop 里的产品图",agentActivity:null,delay:1500},{role:"assistant",content:"",agentActivity:{orchestrator:"理解创意需求，调度多 Agent 操作目标软件...",subAgents:[{role:"FileSurfer",name:"文件 Agent",status:"done",detail:"已扫描工作目录和项目文件",result:"识别 3 个可操作的软件项目"},{role:"Coder",name:"创意 Agent",status:"done",detail:"已生成 Python 操作脚本",result:"生成 5 段自动化脚本"},{role:"Reviewer",name:"评估 Agent",status:"done",detail:"已完成安全验证",result:"验证通过，3 个脚本可安全执行"}],done:!0},delay:2500},{role:"assistant",content:`**FileSurfer** 扫描了工作目录，**Coder** 生成了 5 段 Python 自动化脚本，**Reviewer** 完成了安全验证：

**可执行操作：**
1. **Blender** — 自动生成 3D 模型变体（修改材质、灯光、相机角度）
2. **Photoshop** — 批量处理图片（调整色彩、裁剪、添加水印）
3. **Maya** — 自动化骨骼绑定和动画关键帧

**Python 脚本预览（Blender）：**
\`\`\`python
import bpy

# Blender Python API — 生成 3 个模型变体
base_obj = bpy.data.objects["ProductModel"]
variants = [
    {"material": "Metallic", "light": "Warm", "angle": 45},
    {"material": "Matte",    "light": "Cool",  "angle": 90},
    {"material": "Glass",    "light": "Studio","angle": 120},
]
for i, v in enumerate(variants):
    variant = base_obj.copy()
    variant.data = base_obj.data.copy()
    variant.name = f"ProductModel_V{i+1}"
    bpy.context.collection.objects.link(variant)
    # 修改材质
    mat = bpy.data.materials.new(name=f"Mat_{v["material"]}")
    mat.use_nodes = True
    variant.data.materials[0] = mat
\`\`\`

需要我执行哪个操作？`,agentActivity:null,delay:4e3}],d=[{name:"Blender",api:"bpy",status:"connected",version:"4.2",port:null,description:"3D 建模、材质、灯光、渲染自动化"},{name:"Photoshop",api:"photoshop-python-api",status:"connected",version:"2025",port:null,description:"图片批处理、滤镜、图层操作"},{name:"Maya",api:"maya.cmds / pymel",status:"connected",version:"2025",port:7001,description:"骨骼绑定、动画关键帧、渲染队列"}];export{o as a,a as b,d as c,e as d,t as e,s as f,i as g,n as m};
