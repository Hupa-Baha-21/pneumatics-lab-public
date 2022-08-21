import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentListService {

  constructor() { }


  contentList: IPageKinds[] = [
    {
      title: "introduction",
      name: "היכרות",
      pageTitle: "מה תרצו ללמוד?",
      character: "gabi",
      content: [
        {
          title: "pneumatics-parts",
          name: "חלקי פנאומטיקה"
        },
        {
          title: "circuit",
          name: "מעגל פניאומטי",
          experimentInfo: {
            description: {
              contentText: "את הפיקוד הכפול ניתן לזהות על ידי סדר פעולות במעגל.\n במעגל רגיל סדר האותיות A, B, A, B \n במעגל עם פיקוד כפול A,B,B,A",
              graph: true
            },
            steps: [
              "תרשים חצים",
              "לרשום מצב של כל בוכנה בדיאגרמת זמן תנועה. \n אם זה + (עולה), - (יורד)",
              "לאחר מכן לרשום מצב שסתומי הגבול, בעזרת מצב הבוכנות שרשמנו קודם, כדי לדעת ממתי עד מתי הוא עובד",
              "מוצאים את הפיקוד הכפול בעזרת הדיאגרמה"            
            ],
            videos: [
              {
                letters: "A+B-B+A-",
                youtubeId: "t9v6XCixDT0"
              }
            ]
          }
        }
      ]
    },
    {
      title: "experiments",
      name: "ניסויים",
      pageTitle: "איזה ניסוי?",
      character: "leon",
      content: [
        {
          title: "cylinder",
          name: "בוכנה אחת",
          experimentInfo: {
            description: {
              contentText: 'מערכת פועלת על גז דחוס.\n המדחס הינו מקור הכח של המערכת, למדחס יש פתח שממנו הוא יונק את האוויר מבחוץ למערכת',
              graph: false
            },
            steps: [
              "תרשים חצים",
              "מתחילים מחיבורים קבועים + השחרות",
              "עוברים לתכנון לוגי - חיבור של כל המערכת"
            ],
            videos: [
              {
                letters: 'A+A-',
                youtubeId: 'mv9lB2wC76k'
              },
              {
                letters: 'A-A+',
                youtubeId: '5f1faK1Ujng' 
              }
            ]
          }
        },
        {
          title: "two-cylinders",
          name: "שתי בוכנות",
          experimentInfo: {
            description: {
              contentText: "מערכת פועלת על גז דחוס. \n המדחס הינו מקור הכח של המערכת, למדחס יש פתח שממנו הוא יונק את האוויר מבחוץ למערכת",
              graph: false
            },
            steps: [
              "תרשים חצים",
              "מתחילים מחיבורים קבועים + השחרות (לפי מצב האחרון של הבוכנה",
              "עוברים לתכנון לוגי",
              "לחבר אספקה לכלל הרכיבים כולל סגירת ופתיחת סעפת"
            ],
            videos: [
              {
                letters: 'B-A+B+A-',
                youtubeId: 'fIc0IUlZ4Oo'
              },
              {
                letters: 'A-B-A+B+',
                youtubeId: '60ft1w6Gvjk' 
              },
              {
                letters: 'A+B+A-B-',
                youtubeId: 'mv-QQEFYKLI' 
              }
            ]
          }
        },
        {
          title: "cascade",
          name: "קסקדה",
          experimentInfo: {
            description: {
              contentText: "את הפיקוד הכפול ניתן לזהות על פי סדר הבוכנות במעגל. \n לכן נעשה קבוצות ומשם נפתור את התרגיל",
              graph: true
            },
            steps: [
              "חלוקה לקבוצות",
              "תרשים חצים",
              "מחברים חיבורים קבועים + השחרות",
              "מתחילים לפתור לפי מצב האחרון של כל בוכנה"
            ],
            comments: [
              "בתרגיל הזה חובה לעבוד עם מספר צבעים"
            ]
          }
        }
      ]
    }
  ]

  tools: ITools[] = [
      {
        title: "airAirCylinder",
        name: "בוכנת אוויר-אוויר",
        hasSketch: true,
        experimentTitle: ['cylinder', 'two-cylinders']
      },
      {
        title: "controlValve",
        name: "שסתום בקרה 5/2 אוויר-אוויר",
        hasSketch: true,
        experimentTitle: ['cylinder', 'two-cylinders']
      },
      {
        title: "borderValve",
        name: "שסתום גבול 3/2 גלגלת-קפיץ",
        hasSketch: true,
        experimentTitle: ['cylinder', 'two-cylinders']
      },
      {
        title: "pushButton",
        name: "לחצן הפעלה (P.B) יד-קפיץ",
        hasSketch: true,
        experimentTitle: ['cylinder', 'two-cylinders']
      },
      {
        title: "diagram",
        name: "דיאגרמת זמן-תנועה",
        hasSketch: false,
        experimentTitle: ['circuit']
      },
      {
        title: "board",
        name: "לוח לחיבור המעגל",
        hasSketch: false,
        experimentTitle: ['circuit']
      }
  ]

  droppableContent: IDroppableContent = this.getDroppableContent();

  getDroppableContent(): IDroppableContent {
    let droppableContent: IDroppableContent = {};
    this.contentList.forEach(pageType => {
      pageType.content.forEach(content => {
        if (content.experimentInfo) {
          droppableContent[`${content.title}`] = false;
        } 
      })
    });
    return droppableContent;
  }
}



export interface IPageKinds {
  title: string,
  name: string,
  pageTitle: string,
  character: string,
  content: IContent[],
}

export interface IContent {
  title: string,
  name: string,
  content?: string,
  experimentInfo?: IExperiment,
}

export interface IExperiment {
  description: IExperimentDescription,
  steps: string[],
  comments?: string[],
  videos?: IVideo[]
}


export interface IExperimentDescription {
  contentText: string,
  graph: boolean
}

export interface ITools {
  title: string,
  name: string,
  hasSketch: boolean,
  experimentTitle?: string[]
}

export interface IVideo {
  letters?: string,
  youtubeId: string
}

export interface IDroppableContent {
  [key: string]: boolean
 }