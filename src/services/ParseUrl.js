
 export const parseRequestUrl = () => {

    // 위치 해시를 URL로 변환합니다.
    const path = location.hash.slice(2).toLowerCase() || '/';
  
    // url을 params 배열로 분할합니다: [resource, id, verb].
    const params = path.split('/');
  

    const request = {
      resource: params[0] || null,
      verb: params[1] || null,
      id: params[2] || null
    };

    return request;
  };
