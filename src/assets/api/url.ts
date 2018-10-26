const domain: String = 'https://api.qsebao.com/';
export default {
  // 存数据
  list: domain + 'manage/policy/list',
  info: domain + 'manage/policy/info/',
  detail: domain + 'manage/policy/detail/',
  agreement: domain + 'manage/policy/agreement/',
  disposition: domain + 'manage/policy/disposition/',
  compensation: domain + 'manage/policy/compensation/',

  // 取数据
  agreemenDetail: domain + 'deny/data/agreement/',
  dispositionDetail: domain + 'deny/data/disposition/',
  compensationDetail: domain + 'deny/data/compensation/'
};
