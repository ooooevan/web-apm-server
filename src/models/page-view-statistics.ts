import mongoose, { Schema } from 'mongoose';
import { DataType, StatisticsType } from '@copyist/web-report-sdk';
import { PageViewStatisticsData } from '@copyist/web-report-sdk';
// Data去掉path、lastPath、lastElement

/** Page View 页面访问统计 */
const PageViewStatisticsSchema = new Schema({
  /** 应用id */
  appId: String,
  /** 匿名id */
  anonymousId: String,
  /** 登录id */
  distinctId: String,
  /** 一级类型 */
  type: {
    type: String,
    enum: Object.keys(DataType),
    default: DataType.stability,
  },
  /** 二级类型 */
  subType: {
    type: String,
    enum: Object.keys(StatisticsType),
    default: StatisticsType.pageView,
  },
  /**页面url */
  url: String,
  /**页面标题 */
  title: String,
  /** 时间戳 */
  timeStamp: Number,
  /** performance时间 */
  performanceStamp: Number,
  /**显示器Height */
  screenHeight: Number,
  /**显示器Width */
  screenWidth: Number,
  /**可视height */
  innerHeight: Number,
  /**可视width */
  innerWidth: Number,
  /**文档height */
  clientHeight: Number,
  /**文档width */
  clientWidth: Number,
  /**页面来源 */
  referrer: String,
  /**浏览器ua parse对象 */
  userAgent: String,
});

export default mongoose.model<PageViewStatisticsData>(
  'PageViewstistics',
  PageViewStatisticsSchema,
);
