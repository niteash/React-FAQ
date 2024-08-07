import React, { useState } from "react";
import Faq from "./Faq";

const FaqSection = () => {
  const [questions, setQuestions] = useState (
    [
      {
        id: 1,
        question: "What is JSX?",
        answer:
          "JSX သည် JavaScript ၏ syntax extension ဖြစ်သည်။ ၎င်းကို React ဖြင့် အသုံးပြု၍ အသုံးပြုသူ၏ အင်တာဖေ့စ် အနေအထားကို ဖော်ပြရန် အသုံးပြုသည်။ JSX ကို အသုံးပြု၍ HTML အဖွဲ့အစည်းများကို JavaScript ကုဒ်ပါရှိသော ဖိုင်တစ်ခုအတွင်း တွင်ရေးသားနိုင်သည်။",
        isOpen : false,
      },
      {
        id: 2,
        question: "What is a component in React?",
        answer:
          "Component သည် output တစ်ခုတည်းကို render လုပ်ပေးသော အစိတ်အပိုင်းဖြစ်သည်။ ၎င်းသည် class သို့မဟုတ် function ဖြစ်နိုင်ပြီး state နှင့် lifecycle methods ကို ထိန်းသိမ်းနိုင်သည်။ Component များသည် props အဖြစ် မည်သည့်ဒေတာမဆို လက်ခံနိုင်သည်။",
        isOpen : false,
  
      },
      {
        id: 3,
        question: "What is the difference between state and props?",
        answer:
          "State သည် component တစ်ခုချင်းစီ၏ ဒေတာကို သိမ်းဆည်းထားသော နေရာဖြစ်ပြီး အချိန်နှင့်အမျှ ပြောင်းလဲနိုင်သည်။ Prop များသည် မိဘ component ကနေ သားသမီး component ကို ပေးပို့သော data တစ်ခုဖြစ်သည်။ Prop များသည် ပြောင်းလဲ၍ မရသော data ဖြစ်သော်လည်း state က ပြောင်းလဲနိုင်သည်။",
        isOpen : true,
  
      },
      {
        id: 4,
        question: "What is a React Hook?",
        answer:
          "React Hooks သည် functional component များတွင် state နှင့် React ၏ အခြား feature များကို အသုံးပြုနိုင်စေရန် အစွန်းစွန်းကျင်များဖြစ်သည်။ useState နှင့် useEffect ကဲ့သို့သော hooks များသည် state ကို ထိန်းသိမ်းခြင်းနှင့် side effect များကို စီမံခန့်ခွဲနိုင်စေသည်။",
        isOpen : false, 
  
      },
      {
        id: 5,
        question: "What is the virtual DOM?",
        answer:
          "Virtual DOM သည် actual DOM ၏ တစ်ခုတည်းဖြစ်သည့် representation တစ်ခုဖြစ်သည်။ React သည် ၎င်းကို အသုံးပြု၍ ပြောင်းလဲမှုများကို စောင့်ကြည့်ကာ previous version နှင့်  current virtual DOM ကို နှိုင်းယှဉ်၍ real DOM ကို အထောက်အပံ့ဖြင့် update လုပ်ပေးသည်။",
        isOpen : false,
  
      },
      {
        id: 6,
        question: "What is the useEffect hook?",
        answer:
          "useEffect hook သည် functional components တွင် side effect များကို အကောင်အထည်ဖော်ရန် ဖန်တီးထားသော hook တစ်ခုဖြစ်သည်။ ဒေတာဆွဲယူခြင်း၊ subscription များနှင့် ကိုယ်တိုင် DOM ကို ပြောင်းလဲခြင်း ကဲ့သို့သော အလုပ်များအတွက် အသုံးပြုနိုင်သည်။ ၎င်းသည် render တစ်ခုစီပြီးတိုင်း အလုပ်လုပ်သည်။",
        isOpen : false,
  
      },
      {
        id: 7,
        question: "What is React Router?",
        answer:
          "React Router သည် React application များအတွက် routing လုပ်သော library တစ်ခုဖြစ်သည်။ ၎င်းသည် component များအကြား navigation လုပ်ခြင်းကို ခွင့်ပြုကာ page reload မလုပ်ဘဲ content ကို dynamic render လုပ်နိုင်စေသည်။",
        isOpen : false,
  
      },
      {
        id: 8,
        question: "What is the purpose of the useState hook?",
        answer:
          "useState hook သည် functional component များတွင် state ကို ထိန်းသိမ်းရန် စီမံခန့်ခွဲသည်။ ၎င်းသည် ယခု state တန်ဖိုးနှင့် state ကို update လုပ်ရန် function တစ်ခုပါရှိသည့် အမျိုးအစားတစ်ခုကို return ပြန်သည်။ ၎င်းသည် component အတွင်း တွင် အချိန်နှင့်အမျှ ပြောင်းလဲနေသော data ကို ထိန်းသိမ်းနိုင်ရန် ကူညီသည်။",
        isOpen : false,
  
      },
      {
        id: 9,
        question: "What is the purpose of keys in React?",
        answer:
          "Keys သည် React တွင် list အတွက် အသုံးပြုသော element များကို မည်သည့် element သည် ပြောင်းလဲခြင်း၊ ဖြည့်သွင်းခြင်း၊ ဖြုတ်ခြင်းများကို ခွဲခြားရန် အသုံးပြုသည်။ ၎င်းတို့သည် element များကို မှတ်တမ်းတင်၍ list item များကို နောက်ဆုံးမှ update လုပ်ခြင်းဖြင့် DOM ကို အထောက်အကူပြုကာ optimal rendering လုပ်သည်။",
        isOpen : false,
  
      },
      {
        id: 10,
        question: "What is a higher-order component (HOC) in React?",
        answer:
          "Higher-order component (HOC) သည် component တစ်ခုကို လက်ခံပြီး 새로운 component 를 돌려주는 function 이다. HOC 는 component 들이 공유할 수 있는 logic 을 재사용하는데 사용된다. 예를 들어, 인증이나 데이터 가져오기를 구현할 때 유용하다.",
        isOpen : false,
  
      },
    ]);
  const ToggleQuestion = (id) => {
       setQuestions(questions.map((el) => el.id === id ? {...el, isOpen: !el.isOpen} : {...el, isOpen : false}))
  }

  return (
    <div className="p-10">
      <div className="text-4xl font-bold mb-8">
        Frequently Asked Questions
      </div>

      <div className=" flex flex-col">
        {questions.map((question) => (
          <Faq ToggleQuestion={ToggleQuestion} key={question.id} faq={question} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
