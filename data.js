/* ===== 여기만 고치면 됩니다 =====
   사진은 images 폴더에 넣고 경로를 "images/파일명.jpg" 로 적으세요.
   메시지: messages:[["in","받은 내용","오전 9:38"],["out","보낸 내용","오전 9:39"]]
   통화기록: calls:[{dir:"out",label:"휴대전화",time:"오후 2:00"}]  (dir: out=발신, in=수신) */
const C=(id,name,o={})=>({id,name,number:"",photo:"",favorite:false,calls:[],messages:[],...o});
const DATA={
passcode:"0707",
me:{name:"서이건",photo:"",appleId:"Apple ID"},
cameraImage:"",
photos:[
 // {src:"images/1.jpg",date:"2026-10-17"},
],
contacts:[
 C("mom","어머니",{favorite:true,thread:true}),C("dad","아버지",{favorite:true,thread:true}),C("poop","똥",{thread:true}),
 C("c1","위도윤",{thread:true}),C("c2","윤현성",{thread:true}),C("c3","강태공",{thread:true}),C("c4","호수",{thread:true}),
 C("c5","강예린"),C("c6","허광열"),C("c7","최도진"),C("c8","남궁지원"),C("c9","박찬일"),
 C("c10","강혁",{thread:true}),C("c11","김우진",{thread:true}),C("c12","한유현",{thread:true}),
 C("c13","유서빈 지휘 팀장님"),C("c14","김영진 반장"),C("c15","김성태 반장"),C("c16","양응윤 반장"),
 C("c17","2팀 조태진 팀장님",{thread:true}),C("c18","김익권 형님",{thread:true}),C("c19","박세환 대장님",{thread:true})
],
events:[
 {date:"2026-10-23",title:"약속",time:"오후 4:30"}
],
notes:[
 {text:"살 것\n커피, 충전 케이블",date:"10/18/26",pinned:true},
 {text:"메모\n내용을 여기에",date:"10/17/26"},
 {text:"비밀 메모",date:"6/17/26",locked:true}
],
alarms:["8:00","8:10","8:20","8:30","8:40","8:50"].map(t=>({time:t,ap:"오전",label:"알람",on:true})),
worldClock:[{city:"서울",tz:"Asia/Seoul"},{city:"미국",tz:"America/New_York"}],
weather:[
 {name:"작도시",temp:18,cond:"흐림",hi:23,lo:17,bg:"linear-gradient(#3a3f4c,#1b1f2b)",note:"오전 6시경 비가 예상됩니다. 돌풍은 최대 24mph입니다.",
  hourly:[["지금","☁️",18],["오후 9시","☁️",18],["오후 10시","⛅",19],["오후 11시","⛅",18],["오전 12시","⛅",17],["오전 1시","⛅",17],["오전 2시","⛅",17]],
  daily:[["오늘","⛅",17,23],["월","🌧",16,24],["화","☀️",12,25],["수","☀️",13,26],["목","☀️",13,25]]}
],
notices:[]   // 알림센터(왼쪽 위에서 당기기)에 뜰 알림. 예: {app:"메시지",title:"어머니",body:"밥 먹었니",time:"방금",chat:"mom"}
};
