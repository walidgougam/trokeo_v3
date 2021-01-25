const prod = { 
    // url: { 
    //     IOS_URL: 'http://localhost:8080', 
    //     ADNDROID_URL: 'http://172.20.10.2:8080' } 
    };
    const dev = { 
    url: { 
        IOS_URL: 'http://localhost:8080', 
        ADNDROID_URL: 'http://172.20.10.2:8080'
    } 
    };
    
  export const config = process.env.NODE_ENV === 'dev' ? dev : prod;