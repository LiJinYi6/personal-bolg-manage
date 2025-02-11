import Mock, { Random } from 'mockjs';

// 定义 Mock 数据模板
export const overview=Mock.mock('/api/user', 'get', {
    "code":200,
    "data":{
        "file":Random.float(60,100,3,3)+'M',
        "article":0,
        "gallery":0,
        "diary":0,
        "project":0,
        "resource":0,
    }
});

