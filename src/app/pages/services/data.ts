const tableData = [
  { 
    name: 'kubernetes',
    namespace:'default',
    lebels: 'component:apiserver provider:kubernetes',
    clusterip: '10.96.0.1',
    internalendpoints: 'kubernetes:443 TCP kubernetes:0 TCP',
    externalendpoints:'-',
    age: '26 minutes',
  },{ 
    name: 'kubernetes',
    namespace:'default',
    lebels: 'component:apiserver provider:kubernetes',
    clusterip: '10.96.0.1',
    internalendpoints: 'kubernetes:443 TCP kubernetes:0 TCP',
    externalendpoints:'-',
    age: '26 minutes',
  },
];

export { tableData };
