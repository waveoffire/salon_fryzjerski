interface IConfig {
  api: string;
  logo: string;
  hosts: string[];

  title: string;
  //czy klient może się logować
}

let config = {
  current: <IConfig>{},
  dev: <IConfig>{
    //api: "http://127.0.0.1:30001/api",
    logo: "logo.png",
    title: "Fryzjer Małgorzata Wasilewska-Smilgin",
    hosts: ["localhost:8080", "localhost:8082"]
  },
  zdzis: <IConfig>{
    //api: "http://91.237.69.144:30001/api",
    logo: "logo.png",
    title: "Salon Fryzjerski",
    hosts: ["localhost:8081", "91.227.122.10", "pb.zdzis.com"]
  }
};

config.current = config.dev;

let host = window.location.host;

//szukaj po hoście
for (let confname in config) {
  let cc = <IConfig>(<any>config)[confname];
  let hosts = cc.hosts;
  if (hosts) {
    for (let i = 0; i < hosts.length; i++) {
      if (hosts[i] == host) {
        config.current = cc;

        break;
      }
    }
  }
}

export default config;
