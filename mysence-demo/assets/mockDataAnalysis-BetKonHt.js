const e=[{id:"dataset-sales-2025",name:"2025年度产品销售数据",columns:["月份","产品线","销售额","同比增长","区域"],rows:[["1月","A系列",128500,.12,"华东"],["1月","B系列",96200,.08,"华南"],["1月","C系列",74300,-.03,"华北"],["2月","A系列",115800,.05,"华南"],["2月","B系列",89e3,.15,"华东"],["2月","C系列",68700,-.05,"西南"],["3月","A系列",142300,.18,"华东"],["3月","B系列",105600,.22,"华北"],["3月","C系列",82100,.04,"华南"],["4月","A系列",138900,.14,"西南"],["4月","B系列",98700,.1,"华东"],["4月","C系列",77200,-.02,"华北"],["5月","A系列",156200,.25,"华东"],["5月","B系列",112400,.19,"华南"],["5月","C系列",85600,.07,"西南"],["6月","A系列",168700,.28,"华南"],["6月","B系列",128900,.24,"华东"],["6月","C系列",92300,.11,"华北"],["7月","A系列",172100,.3,"华东"],["7月","B系列",135600,.26,"西南"],["7月","C系列",95200,.13,"华南"],["8月","A系列",165400,.22,"华北"],["8月","B系列",122300,.18,"华东"],["8月","C系列",88900,.09,"西南"]]}],t={language:"python",code:`import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.font_manager as fm

# 加载数据
columns = ['月份', '产品线', '销售额', '同比增长', '区域']
data = [
    ['1月',  'A系列', 128500, 0.12, '华东'],
    ['2月',  'A系列', 115800, 0.05, '华南'],
    ['3月',  'A系列', 142300, 0.18, '华东'],
    ['4月',  'A系列', 138900, 0.14, '西南'],
    ['5月',  'A系列', 156200, 0.25, '华东'],
    ['6月',  'A系列', 168700, 0.28, '华南'],
    ['7月',  'A系列', 172100, 0.30, '华东'],
    ['8月',  'A系列', 165400, 0.22, '华北'],
]

df = pd.DataFrame(data, columns=columns)

# 按月份聚合 A 系列总销售额
series_a = df[df['产品线'] == 'A系列']
monthly = series_a.groupby('月份')['销售额'].sum()

# 确保月份排序正确
month_order = ['1月','2月','3月','4月','5月','6月','7月','8月']
monthly = monthly.reindex(month_order)

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

# 绘制折线图
fig, ax = plt.subplots(figsize=(10, 5))
ax.plot(monthly.index, monthly.values / 10000,
        marker='o', linewidth=2, color='#60cdff',
        markersize=8, markerfacecolor='white',
        markeredgewidth=2)

ax.set_title('A系列月度销售额趋势（万元）',
             fontsize=14, fontweight='bold')
ax.set_xlabel('月份', fontsize=12)
ax.set_ylabel('销售额（万元）', fontsize=12)
ax.grid(True, alpha=0.3)
ax.fill_between(monthly.index, monthly.values / 10000,
                alpha=0.1, color='#60cdff')

plt.tight_layout()
plt.show()`},a=[{type:"line",title:"A系列月度销售趋势",xField:"month",yField:"value",data:[{month:"1月",value:12.85},{month:"2月",value:11.58},{month:"3月",value:14.23},{month:"4月",value:13.89},{month:"5月",value:15.62},{month:"6月",value:16.87},{month:"7月",value:17.21},{month:"8月",value:16.54}]},{type:"bar",title:"各产品线平均同比增长率",xField:"month",yField:"value",data:[{month:"A系列",value:.193},{month:"B系列",value:.168},{month:"C系列",value:.048}]},{type:"pie",title:"A系列区域销售额占比",xField:"month",yField:"value",data:[{month:"华东",value:44.3},{month:"华南",value:30.7},{month:"华北",value:11.4},{month:"西南",value:13.6}]}],l=[{id:"ds1",title:"2025年度销售数据分析",time:"15:45",active:!0},{id:"ds2",title:"区域销售额对比报告",time:"14:20",active:!1},{id:"ds3",title:"C系列负增长归因分析",time:"11:10",active:!1},{id:"ds4",title:"季度趋势预测模型",time:"昨天",active:!1},{id:"ds5",title:"产品线交叉销售分析",time:"昨天",active:!1}],n=[{role:"assistant",content:`我是你的 AI 数据分析助手。我可以调度 **FileSurfer** 加载数据、**Coder** 生成分析代码、**Reviewer** 验证结果。

请描述你的分析需求，或直接在表格中选中数据行进行探索。`,agentActivity:null,delay:300},{role:"user",content:"分析 2025 年度各产品线的销售趋势，重点关注异常波动",agentActivity:null,delay:1500},{role:"assistant",content:"",agentActivity:{orchestrator:"编排数据分析流程，调度多 Agent...",subAgents:[{role:"FileSurfer",name:"数据 Agent",status:"done",detail:"已加载 sales_data.csv",result:"1,247 行数据加载完成"},{role:"Coder",name:"分析 Agent",status:"done",detail:"已生成分析代码",result:"生成 4 段分析代码"},{role:"Reviewer",name:"验证 Agent",status:"done",detail:"已完成验证",result:"验证通过，发现 1 个异常"}],done:!0},delay:2500},{role:"assistant",content:`**FileSurfer** 加载了 1,247 行销售数据，**Coder** 生成了 4 段分析代码，**Reviewer** 完成了结果验证：

**关键发现：**
1. A 系列产品 7 月达到峰值 17.2 万元，同比增长 23%
2. 华东地区贡献了 45% 的销售额，是主力市场
3. C 系列在西南地区有独特优势，建议加大投入
4. 1-2 月 C 系列存在负增长，需进一步归因分析

代码已自动写入文件，可在代码面板中查看。`,agentActivity:null,delay:4e3}];export{t as a,a as b,n as c,l as d,e as m};
