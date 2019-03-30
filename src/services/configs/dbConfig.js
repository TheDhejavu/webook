const Config = {
    name: 'webbook.io',
    version: 0.1,
    stores: {
      'contactStore': {
          deleteOnUpgrade: false,
          properties:{
              autoIncrement: true,
              keyPath: 'uniqueid'
          },
          indexes: {
            uniqueid: { unique: true  },
            fullname: { unique: false },
            phone:    { unique: false },
            country:  { unique: false },
            workplace:{ unique: false },
            phone:    { unique: false },
            email:    { unique:false  },
            type:     { unique:false  }
        }
      }
    }
  };

  export default Config;
