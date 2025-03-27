/*
 * @Author: shawicx d35f3153@proton.me
 * @Date: 2025-03-02 10:00:00
 * @LastEditors: shawicx d35f3153@proton.me
 * @LastEditTime: 2025-03-25 10:17:43
 * @Description: Experience page component
 */
import './experience.scss';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "杭州友成科技有限公司",
    position: "前端工程师",
    period: "2019.07 - 2021.03",
    responsibilities: [
      "ERP/MES的PC管理平台与MES的 APP 操作平台的新功能评审开发维护与原功能的维护优化，主要负责 PC 项目的开发/维护/重构（umi + antd + dva + ts）。",
      "一些小工具的开发与维护，提升开发速度与效率。",
      "推动团队使用TypeScript，总结制定TSLint的规则与相关文档，完善前端规范文档。"
    ]
  },
  {
    company: "杭州宇泛智能科技股份有限公司",
    position: "前端工程师",
    period: "2021.04 ~ 2025.03",
    responsibilities: [
      "负责 七牛云国标视频、鲁班BIM、小程序身份证读卡设备、萤石云直播设备、TPLink 路由器、海康ISC视频平台等外部设备/技术 接入。",
      "接入袋鼠云的大屏设计系统，负责视频监控等主要内容的开发。负责自定义组件仓库的维护与代码审查，协助组内其他成员完成自定义组件开发，针对其他成员遇到的问题给出解决方案。",
      "负责新项目 立项、技术选型、架构。",
      "部门前端组件开发维护，16个/17(总)。前端技术、业务文档编写维护，17篇/34(总)",
      "负责前端项目的私有化部署维护，输出文档，解决客户问题。",
      "低代码 基础组件库、物料组件库系统搭建，前端 cli 工具开发维护。",
    ]
  }
];

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#f43f5e]">工作经历</h1>
      <div className="relative">
        {/* 时间轴线 */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#f43f5e]"></div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
          >
            {/* 时间节点 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#f43f5e] rounded-full"></div>
            {/* 内容卡片 */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
              <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/20">
                <h3 className="text-xl font-bold text-[#f43f5e] mb-2">{exp.company}</h3>
                <h4 className="text-lg font-semibold mb-2">{exp.position}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="mb-1">{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}