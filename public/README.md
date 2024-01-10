# מגיש
ליאון זולוטריוב
מספר כיתה:D110422ER
טלפון לשאלות: 0546663482 
EMAIL : lion.zolotarov@gmail.com


בגדול בניתי אתר שקצת שונה מכל השאר אני מאמין בניתי אתר לבר קוקטלים
 שדרכו אפשר להירשם ואז לבצע הזמנה של מקום בהתאם למקום שנשאר ביחס
לאיפה שהוזמן
פתחתי משתמש אחד שיש לו גישות של ADMIN
שמאפשר לו לראות את כלל ההזמנות שבוצעו לעשות סינון וכמובן למחוק הזמנות לפי הצורך
ועכשיו נתחיל עם ההסבר על הקוד 

# צד לקוח
## Assets
 תקייה ששמרתי שם את התמונות שאני משתמש בהם בצד לקוח 
![ASSETS](./Imgs/Assets.png)

## Componets 
 התקייה עוזרת לנו בחלקים מדף הבית כמו נראות,Navbar וכו' 
![Components](./Imgs/Components.png)

### Nabar
פה אנחנו כבר מתחיל לכתוב את JS 
אנחנו משתמשים גם בCONTEXT ו STATE
שתורם לנו לבדוק אם המשתמש כבר נכנס למערכת או לא ואם כן מה סוג הגישות שקימות אצלו ובהתאם להעביר לפתוח לו חלון לעבור לשם אם הוא חסר 
TYPE אז לאופציה של הזמנה 
ואם הוא ADMIN
אז לאופציה לגישות של האדמין
![Navbar](./Imgs/Navbar.png)

בתמונה הבא מתבצעת בידקה של הUSER 
המחובר ובהתאתם מופיע האפשרויות של אותו משתמש ה Navbar 
מופיע רק במסך הבית
![Navbar_test](./Imgs/Navbar_test.png) 
ואלה התצאות: אם הוא לא מחובר
![Navbar_login](./Imgs/Navbar_login.png)
USER רגיל מחובר
![Navbar_null](./Imgs/Navbar_null.png)
ADMIN מחובר
![Navbar_admin](./Imgs/Navbar_admin.png)
## Constants
התקייה יוצרת לנו קישור לתמונות למחירים של הקוקטלים בדף הבית
![Constants](./Imgs/Constants.png)

## Pages 
 שומר לנו על הדפים של האתר באופן מסודר
 ![Pages](./Imgs/Pages.png)


 ### HOME
 דף הבית פותח מכמה מכלים זאת אומרת הוא בנוי בחלקים
 ![HOME](./Imgs/Home.png)

 כל חלק אחראי על משהו אחר
 ABOUTUS 
 ![about_Us](./Imgs/About_Us.png)
 FINDUS
 ![find_Us](./Imgs/find_Us.png)
 FOOTER
 ![footer](./Imgs/footer.png)
 GALLERY
 ![gallery](./Imgs/gallery.png)
 HEADER
 ![header](./Imgs/header.png)
 MENU
 פה זה החלק השאני משתמש בו בConstants 
 ולוקח את שמות המוצרים,מרכיבים ומחיר 
 ![menu](./Imgs/menu.png)


 ### LoginRegister
 פה אני מתחבר או נרשם למערכת
 ![LoginRegister](./Imgs/LoginRegister.png)

 #### LOGIN
 ![Login](./Imgs/Login.png)
 פה מתבצע החיבור הראשוני לAPI 
 לאחר שיש משתמש המשתמש יצטרך להזין פרטים של EMAIL PASSWORD
 ואם המשתמש תקין זה יעביר אותו בהתאם לסוג תוקן שיש לו כלומר אם הוא ADMIN
 זה יעביר אותו לORDERS
 ששם הוא רואה את כלל ההזמנות ויכול למחוק הזמנות וכמובן לעשות סינון
 אם המשתמש NULL 
 זאת אומרת לא אדמין אז ישלח אותו לBOOKTABLE 
 ששם הוא יכול להזמין מקום בהתאם למקומות שנשארו 
 אם אין משתמש ללקוח אז יש לו אופציה לגשת לREGSTER
 וגם אופציה לחזור למשחק הבית

 ביצוע הניתוב לאחר סוג הTOKEN
 ![TOKEN](./Imgs/TOKEN.png)

#### REGISTER
![Register](./Imgs/Register.png)
פה מתבצע החיבור לAPI סוג POST 
כדי להירשם לאתר יש פה כמה בלדיציות כמו עם האיימל וטלפון והתאמה כל אחד מהם
![Phone&Email](./Imgs/Phone&Email.png)
כמובן שאם למשתמש יש משתמש יש לו כפתור חזרה לLOGIN
או לדף הבית
לאחר ההרשמה הלקוח מקבל הודעה באתר

### BookTable
כאן שומרים מקום לבר
![BookTable](./Imgs/BookTable.png)
 בחלק הזה מתבצע כמה חיבורים שונים לAPI 
 ולכמה טבלאות שונות
 ![Connection](./Imgs/Connection.png)
 לפי זה מופיעות לנו קטגוריות לכלל המקומות כגון Inside,Outside,Bar כמות אנשים ובחירת תאריך ושעה לפי שעות קבועות שהמקום מקבל הזמנות מראש
 לאחר מכן כל בחירה שנעשת המערכת עושה בדיקה שאכן קימים שולחנות לאותו יום והשעה שנבחרו
 ![Reservation](./Imgs/Reservation.png)
 בתמונה הזאת נשארו לנו 5 מקומות לזמן,לאזור,לכמות אנשים והתאריך הנבחר 
 לאחר הזמנת המקום הלוקח מקבל הודעה ואופציה לחזור לדף הבית 

 ### Admin
 כאן זה גישות של האדמין 
 ![Admin](./Imgs/Admin.png)
 בדף הבא נוצר קישור בין כלל הטבלאות שקימות במערכת נקח את השם הפרטי את זמן את מספר השולחן והתאריך
 לטבלה מראה לנו איזה הזמנות בוצע על ידי מי וכו' 
 מתצע חיבור של 4 הטבלות עם הפרטים שצריכים
 ![Combination](./Imgs/Combination.png)
 לאדמין יש גם את הגישה לבטל את ההזמנה וללחוץ DELETE
 ![Filter](./Imgs/Filter.png)
 בדף יש גם סינון לפי הפרמטרים שמקבלים שכך אפשר למצוא הזמנות ספציפיות במערכת
 אדם שאין לו TYPE ADMIN 
וינסה להתחבר דרך URL /admin
יקבל מסך לבן רק בלי אופציה לכלום

## Context 
פה נוצר הזיכרון של הTOKEN 
דרך הPROVIDER
בשביל שלא יעלם וישמר במערכת כל עוד אני משתמש בו ברגע שאני עושה LOGOUT
הTOKEN והUSER = NULL
![Context](./Imgs/Context.png)


## App 
![App](./Imgs/App.png)
פה נוצרים הדפים
תחת BrowserRouter Routes Route
וכמובן של  הPROVIDER 
עוטף אותם כדי שהמשתמש ישאר במערכת
ויזכר 
נוסף גם שאם הלקוח/האדמין ינסו להגיע לנתיב שלא קיים יקבלו דף שמופיע בו Not Found 404


# צד שרת
## Program
פה כנסתי כמה דברים
אחד מהם זה את Authentication ראשוני
שלוקח Issuer ,SecretForKey ,Audience
![Authentication](./Imgs/Authentication.png)
Policy הכנסתי פה גם 
של ADMIN 

## Models
![Models](./Imgs/Models.png)
לכל אחד מהם יש את הפרמטרים שאני מקבל ומביא בהתאם למה שאני צריך ובהתאם לטבלה
בחלק מMODELS 
אני יוצר דרישות והערות בהתאם לדרישות למשתמש 
כמו פה ![Register C#](./Imgs/RegisterC#.png)

## Contexts
![Contexts C#](ContextsC#.png)
לכל אחד מהMODELS יש CONTEXT משלו
שיוצר לו חיבור לDATA 
דוגמה:![TableContexts](./Imgs/TableContexts.png)

## Controllers
![Controllers](./Imgs/Controllers.png)
חלק מהקונטרולרים נבנו לשימוש עתידי ומחשבה קדימה
הCONTROLLER הכי חשוב הואAuthentication
![Authentication Controller](./Imgs/AuthenticationController.png)
שיוצר לנו את הTOKEN כולו
זאת אומרת אני מכניס את הEMAIL & PASSWORD
ומקבל טוקן שלוקח כמה פרמטרים של המשתמש ועוד כמה פרמטרים קימיים ויוצר לנו את הTOKEN

בCONTROLLERS יש לנו 
GET
POST
DELETE 
ואופציה לPATCH בעתיד


## SQL
![(Database)](Imgs/Database.png)
יש 4 טבלאות 
USERS
EXPECTEDARRIVAL
TABLES
שמעברים  ID ל
BOOKING
ששומר את פירטי ההזמנה של הלקוחות
לEXPECTEDARRIVAL אין PUST רק GET 
כי הזמנים קבועים ולא נתנים לשנות 
![EXPECTEDARRIVAL](./Imgs/EXPECTEDARRIVAL.png)
וגם TABLES 
לכל שולחן יש את המספר שלו כמות אנשים והאזור שהוא נמצא לכן גם פה נמשוך רק נתונים ולא נשנה
![TABLES](./Imgs/TABLES.png)



😂מקווה שאהבתם את בפרויקט שלי שנכתב בהרבה חוסר שינה ועצבים😂
לשאלות מוזמנים לפנות אלי 