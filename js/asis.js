// ley 24241
let coeficienteMovilidad=[1,1,1,1,1,1,1,1,1.1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1.11,1,1,1,1,1,1,1.13,1,1,1,1,1,1,1,1.125,1,1,1,1,1,1.075,1,1,1,1.075,1,1,1,1,1,1,1,1.1169,1,1,1,1,1,1.0734,1,1,1,1,1,1.0821,1,1,1,1,1,1.169,1,1,1,1,1,1.1733,1,1,1,1,1,1.1682,1,1,1,1,1,1.1762,1,1,1,1,1,1.1142,1,1,1,1,1,1.1518,1,1,1,1,1,1.1441,1,1,1,1,1,1.1131,1,1,1,1,1,1.1721,1,1,1,1,1,1.1826,1,1,1,1,1,1.1249,1,1,1,1,1,1.1535,1,1,1,1,1,1.1416,1,1,1,1,1,1.1296,1,1,1,1,1,1.1332,1,1,1,1,1,1.0571,1,1,1.0569,1,1,1.0668,1,1,1.0778,1,1,1.1183,1,1,1.1074,1,1,1.1222,1,1,1.0874,1,1,1.023,1,1,1.0612,1,1,1.075,1,1,1.05,1,1,1.0807,1,1,1.1212,1,1]

let nPer=['20040101','20040201','20040301','20040401','20040501','20040601','20040701','20040801','20040901','20041001','20041101','20041201','20050101','20050201','20050301','20050401','20050501','20050601','20050701','20050801','20050901','20051001','20051101','20051201','20060101','20060201','20060301','20060401','20060501','20060601','20060701','20060801','20060901','20061001','20061101','20061201','20070101','20070201','20070301','20070401','20070501','20070601','20070701','20070801','20070901','20071001','20071101','20071201','20080101','20080201','20080301','20080401','20080501','20080601','20080701','20080801','20080901','20081001','20081101','20081201','20090101','20090201','20090301','20090401','20090501','20090601','20090701','20090801','20090901','20091001','20091101','20091201','20100101','20100201','20100301','20100401','20100501','20100601','20100701','20100801','20100901','20101001','20101101','20101201','20110101','20110201','20110301','20110401','20110501','20110601','20110701','20110801','20110901','20111001','20111101','20111201','20120101','20120201','20120301','20120401','20120501','20120601','20120701','20120801','20120901','20121001','20121101','20121201','20130101','20130201','20130301','20130401','20130501','20130601','20130701','20130801','20130901','20131001','20131101','20131201','20140101','20140201','20140301','20140401','20140501','20140601','20140701','20140801','20140901','20141001','20141101','20141201','20150101','20150201','20150301','20150401','20150501','20150601','20150701','20150801','20150901','20151001','20151101','20151201','20160101','20160201','20160301','20160401','20160501','20160601','20160701','20160801','20160901','20161001','20161101','20161201','20170101','20170201','20170301','20170401','20170501','20170601','20170701','20170801','20170901','20171001','20171101','20171201','20180101','20180201','20180301','20180401','20180501','20180601','20180701','20180801','20180901','20181001','20181101','20181201','20190101','20190201','20190301','20190401','20190501','20190601','20190701','20190801','20190901','20191001','20191101','20191201','20200101','20200201','20200301','20200401','20200501','20200601','20200701','20200801','20200901','20201001','20201101','20201201','20210101','20210201','20210301','20210401','20210501','20210601','20210701','20210801']

let coeficientesMagistrados=[1,1,1,1.1,1,1,1,1,1,1,1.05,1,1,1.1,1,1,1,1.1,1,1.1,1,1,1,1,1.1,1,1.075,1.075,1,1,1.1,1,1.1,1.1,1,1,1,1,1,1,1,1,1,1.1,1.1,1.075,1,1,1,1,1,1,1,1]

let nPerMagistrados=['20170301','20170401','20170501','20170601','20170701','20170801','20170901','20171001','20171101','20171201','20180101','20180201','20180301','20180401','20180501','20180601','20180701','20180801','20180901','20181001','20181101','20181201','20190101','20190201','20190301','20190401','20190501','20190601','20190701','20190801','20190901','20191001','20191101','20191201','20200101','20200201','20200301','20200401','20200501','20200601','20200701','20200801','20200901','20201001','20201101','20201201','20210101','20210201','20210301','20210401','20210501','20210601','20210701','20210801']

let tablaCombinadaMagis={'UNO-101':'17974.5','UNO-110':'26961.58','UNO-108':'53634.01','UNO-120':'4853.82','UNO-107':'4853.82','UNO-157':'0','UNO-105':'5171.14','UNO-115':'5171.14','UNO-TOT':'108595.05','DOS-101':'16362.28','DOS-110':'24543.16','DOS-108':'35432.41','DOS-120':'4853.82','DOS-107':'4853.82','DOS-157':'0','DOS-105':'4059.54','DOS-115':'4059.54','DOS-TOT':'85251.21','TRES-101':'19415.08','TRES-110':'27909.24','TRES-108':'55817.78','TRES-120':'4853.82','TRES-107':'4853.82','TRES-157':'0','TRES-105':'5399.82','TRES-115':'5399.82','TRES-TOT':'113395.74','CUATRO-101':'14366.85','CUATRO-110':'21550.12','CUATRO-108':'26914.14','CUATRO-120':'4853.82','CUATRO-107':'4853.82','CUATRO-157':'0','CUATRO-105':'3384.29','CUATRO-115':'3384.29','CUATRO-TOT':'71069.22','CINCO-101':'13069.69','CINCO-110':'19604.73','CINCO-108':'25263.73','CINCO-120':'4853.82','CINCO-107':'4853.82','CINCO-157':'0','CINCO-105':'3139.62','CINCO-115':'3139.62','CINCO-TOT':'65931.59','SEIS-101':'12670.91','SEIS-110':'19006.13','SEIS-108':'22206.16','SEIS-120':'4853.82','SEIS-107':'4853.82','SEIS-157':'0','SEIS-105':'2936.89','SEIS-115':'2936.89','SEIS-TOT':'61673.91','SIETE-101':'12471.16','SIETE-110':'18707.04','SIETE-108':'13590.43','SIETE-120':'4853.82','SIETE-107':'4853.82','SIETE-157':'3320.16','SIETE-105':'2647.12','SIETE-115':'2647.12','SIETE-TOT':'55589.73','OCHO-101':'12171.85','OCHO-110':'18257.9','OCHO-108':'13226.52','OCHO-120':'4853.82','OCHO-107':'4853.82','OCHO-157':'3320.16','OCHO-105':'2591.49','OCHO-115':'2591.49','OCHO-TOT':'54421.74','NUEVE-101':'10552.72','NUEVE-110':'15828.7','NUEVE-108':'11499.63','NUEVE-120':'7840.77','NUEVE-107':'7840.77','NUEVE-157':'3320.16','NUEVE-105':'2452.08','NUEVE-115':'2452.08','NUEVE-TOT':'51494.06','DIEZ-101':'8522.12','DIEZ-110':'12793.51','DIEZ-108':'10123.82','DIEZ-120':'7840.77','DIEZ-107':'7840.77','DIEZ-157':'3320.16','DIEZ-105':'2130','DIEZ-115':'2130','DIEZ-TOT':'44730.38','ONCE-101':'7105.05','ONCE-110':'10657.85','ONCE-108':'8440','ONCE-120':'7840.77','ONCE-107':'7840.77','ONCE-157':'2766.91','ONCE-105':'1840.51','ONCE-115':'1840.51','ONCE-TOT':'38651.09','DOCE-101':'6464.44','DOCE-110':'9696.74','DOCE-108':'5667.61','DOCE-120':'7840.77','DOCE-107':'7840.77','DOCE-157':'2766.91','DOCE-105':'1621.9','DOCE-115':'1621.9','DOCE-TOT':'34058.37','TRECE-101':'5684.13','TRECE-110':'8526.34','TRECE-108':'3984.05','TRECE-120':'7840.77','TRECE-107':'7840.77','TRECE-157':'2213.37','TRECE-105':'1412.47','TRECE-115':'1412.47','TRECE-TOT':'29661.13','CATORCE-101':'4591.68','CATORCE-110':'6887.43','CATORCE-108':'4702.68','CATORCE-120':'7840.77','CATORCE-107':'7840.77','CATORCE-157':'2213.37','CATORCE-105':'1311.78','CATORCE-115':'1311.78','CATORCE-TOT':'27547.71','QUINCE-101':'3745.56','QUINCE-110':'5618.35','QUINCE-108':'4127.68','QUINCE-120':'7840.77','QUINCE-107':'7840.77','QUINCE-157':'1660.21','QUINCE-105':'1149.63','QUINCE-115':'1149.63','QUINCE-TOT':'24142.2','DIECISEIS-101':'4591.68','DIECISEIS-110':'6887.43','DIECISEIS-108':'3675.76','DIECISEIS-120':'7840.77','DIECISEIS-107':'7840.77','DIECISEIS-157':'2213.37','DIECISEIS-105':'1260.51','DIECISEIS-115':'1260.51','DIECISEIS-TOT':'26469.52','DIECISIETE-101':'3745.56','DIECISIETE-110':'5618.35','DIECISIETE-108':'3265.04','DIECISIETE-120':'7840.77','DIECISIETE-107':'7840.77','DIECISIETE-157':'1660.21','DIECISIETE-105':'1106.48','DIECISIETE-115':'1106.48','DIECISIETE-TOT':'23236.41','DIECIOCHO-101':'19954.03','DIECIOCHO-110':'29930.96','DIECIOCHO-108':'70379.3','DIECIOCHO-120':'4853.83','DIECIOCHO-107':'4853.83','DIECIOCHO-157':'0','DIECIOCHO-105':'6255.94','DIECIOCHO-115':'6255.94','DIECIOCHO-TOT':'131374.07'}

let tablaMagis={'01-02':'UNO','01-03':'DOS','01-06':'TRES','15-01':'UNO','15-03':'DOS','15-04':'DOS','15-07':'CINCO','15-10':'CINCO','15-11':'SEIS','15-12':'SEIS','25-04':'SEIS','30-02':'CINCO','30-03':'SIETE','30-04':'SEIS','30-05':'SEIS','30-07':'NUEVE','35-01':'DOS','40-01':'CUATRO','55-01':'OCHO','60-01':'NUEVE','63-90':'DIEZ','64-00':'ONCE','64-01':'DOCE','64-02':'TRECE','64-03':'DIECISEIS','64-04':'DIECISIETE','83-01':'DIEZ','84-00':'ONCE','84-01':'DOCE','84-02':'TRECE','84-03':'CATORCE','84-04':'QUINCE','03-02':'UNO','05-01':'UNO','05-02':'UNO','05-03':'UNO','05-06':'UNO','05-12':'UNO','06-35':'UNO','06-40':'UNO','15-02':'UNO','15-20':'UNO','15-21':'UNO','05-04':'DOS','05-07':'DOS','05-08':'DOS','06-95':'DOS','07-01':'DOS','10-03':'DOS','15-05':'DOS','15-06':'DOS','07-15':'CUATRO','45-03':'CUATRO','03-03':'TRES','05-09':'CINCO','07-27':'CINCO','15-08':'CINCO','15-17':'CINCO','30-08':'CINCO','40-02':'CINCO','25-05':'SEIS','30-09':'SEIS','30-10':'SEIS','84-10':'SEIS','55-03':'DIEZ','03-01':'DIECIOCHO','08-03':'TRES','07-05':'TRES','07-07':'TRES','07-09':'UNO','08-27':'UNO','07-13':'UNO','07-17':'UNO','07-19':'UNO','07-21':'UNO','14-01':'UNO','07-23':'DOS','07-25':'DOS','07-29':'DOS','08-41':'DOS','08-43':'DOS','08-47':'DOS','14-04':'DOS','14-07':'CINCO','07-31':'CINCO','40-03':'CINCO','16-01':'SEIS','14-11':'SEIS','01-01':'DIECIOCHO','35-02':'CUATRO','45-01':'CUATRO','45-02':'CUATRO','45-07':'CUATRO','45-08':'CUATRO','45-04':'CUATRO','15-18':'SEIS','15-19':'SEIS'
}

let haberMin=['200','200','200','200','200','260','260','260','308','308','308','308','308','308','308','308','308','308','350','350','350','350','350','350','350','350','350','350','350','470','470','470','470','470','470','470','530','530','530','530','530','530','530','530','596,2','596,2','596,2','596,2','596,2','596,2','655','655','655','655','690','690','690','690','690','690','690','690','770,66','770,66','770,66','770,66','770,66','770,66','827,23','827,23','827,23','827,23','827,23','827,23','895,15','895,15','895,15','895,15','895,15','895,15','1046,43','1046,43','1046,43','1046,43','1046,43','1046,43','1227,77','1227,77','1227,77','1227,77','1227,77','1227,77','1434,29','1434,29','1434,29','1434,29','1434,29','1434,29','1687,01','1687,01','1687,01','1687,01','1687,01','1687,01','1879,67','1879,67','1879,67','1879,67','1879,67','1879,67','2165','2165','2165','2165','2165','2165','2476,98','2476,98','2476,98','2476,98','2476,98','2476,98','2757,13','2757,13','2757,13','2757,13','2757,13','2757,13','3231,63','3231,63','3231,63','3231,63','3231,63','3231,63','3821,72','3821,72','3821,72','3821,72','3821,72','3821,72','4299,06','4299,06','4299,06','4299,06','4299,06','4299,06','4958,96','4958,96','4958,96','4958,96','4958,96','4958,96','5661,15','5661,15','5661,15','5661,15','5661,15','5661,15','6394,84','6394,84','6394,84','6394,84','6394,84','6394,84','7246,63','7246,63','7246,63','7246,63','7246,63','7246,63','7660,41','7660,41','7660,41','8096,29','8096,29','8096,29','8637,12','8637,12','8637,12','9309,09','9309,09','9309,09','10410,36','10410,36','10410,36','11528,43','11528,43','11528,43','12937,2','12937,2','12937,2','14067,91','14067,91','14067,91','15891,47','15891,47','15891,47','16864,03','16864,03','16864,03','18128,83','18128,83','18128,83','19035,27','19035,27','19035,27','20571,44','20571,44','20571,44','23064.70','23064.70','23064.70']

let tope=['3441','3441','3441','3441','3441','3441','3441','3441','3441','3441','3441','3441','3441','3441','3441','3441','3441','3441','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','3888,33','4374,37','4374,37','4374,37','4374,37','4374,37','4374,37','4702,45','4702,45','4702,45','4702,45','5055,13','5055,13','5055,13','5055,13','5055,13','5055,13','5055,13','5055,13','5646,08','5646,08','5646,08','5646,08','5646,08','5646,08','6060,5','6060,5','6060,5','6060,5','6060,5','6060,5','6558,07','6558,07','6558,07','6558,07','6558,07','6558,07','7666,38','7666,38','7666,38','7666,38','7666,38','7666,38','8994,96','8994,96','8994,96','8994,96','8994,96','8994,96','10507,91','10507,91','10507,91','10507,91','10507,91','10507,91','12359,4','12359,4','12359,4','12359,4','12359,4','12359,4','13770,84','13770,84','13770,84','13770,84','13770,84','13770,84','15861,25','15861,25','15861,25','15861,25','15861,25','15861,25','18146,86','18146,86','18146,86','18146,86','18146,86','18146,86','20199,27','20199,27','20199,27','20199,27','20199,27','20199,27','23675,56','23675,56','23675,56','23675,56','23675,56','23675,56','27998,72','27998,72','27998,72','27998,72','27998,72','27998,72','31495,76','31495,76','31495,76','31495,76','31495,76','31495,76','36330,36','36330,36','36330,36','36330,36','36330,36','36330,36','41474,74','41474,74','41474,74','41474,74','41474,74','41474,74','46849,87','46849,87','46849,87','46849,87','46849,87','46849,87','53090,27','53090,27','53090,27','53090,27','53090,27','53090,27','56121,72','56121,72','56121,72','59315,05','59315,05','59315,05','63277,3','63277,3','63277,3','68200,27','68200,27','68200,27','76268,36','76268,36','76268,36','84459,58','84459,58','84459,58','94780,54','94780,54','94780,54','103064,36','103064,36','103064,36','106934,71','106934,71','106934,71','113479,11','113479,11','113479,11','121990,04','121990,04','121990,04','128089,54','128089,54','128089,54','138426,37','138426,37','138426,37','155203.65','155203.65','155203.65']

let pbu=['140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','140','364,1','364,1','364,1','364,1','364,1','364,1','390,82','390,82','390,82','390,82','390,82','390,82','422,91','422,91','422,91','422,91','422,91','422,91','494,38','494,38','494,38','494,38','494,38','494,38','580,06','580,06','580,06','580,06','580,06','580,06','677,62','677,62','677,62','677,62','677,62','677,62','797,02','797,02','797,02','797,02','797,02','797,02','888,04','888,04','888,04','888,04','888,04','888,04','1022,84','1022,84','1022,84','1022,84','1022,84','1022,84','1170,23','1170,23','1170,23','1170,23','1170,23','1170,23','1302,58','1302,58','1302,58','1302,58','1302,58','1302,58','1526,75','1526,75','1526,75','1526,75','1526,75','1526,75','1805,53','1805,53','1805,53','1805,53','1805,53','1805,53','2031,04','2031,04','2031,04','2031,04','2031,04','2031,04','2342,8','2342,8','2342,8','2342,8','2342,8','2342,8','2674,54','2674,54','2674,54','2674,54','2674,54','2674,54','3021,16','3021,16','3021,16','3021,16','3021,16','3021,16','3423,58','3423,58','3423,58','3423,58','3423,58','3423,58','3619,07','3619,07','3619,07','3825','3825','3825','4080,51','4080,51','4080,51','4397,97','4397,97','4397,97','4918,25','4918,25','4918,25','5446,47','5446,47','5446,47','6112,03','6112,03','6112,03','6646,22','6646,22','6646,22','6799,08','6799,08','6799,08','7215,18','7215,18','7215,18','7756,32','7756,32','7756,32','8144,14','8144,14','8144,14','8908.06','8908.06','8908.06','9987.72','9987.72','9987.72']

let coefDocente=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1.0733,1,1,1,1,1,1.0098,1,1,1,1,1,1.169,1,1,1,1,1,1.1733,1,1,1,1,1,1.1682,1,1,1,1,1,1.1762,1,1,1,1,1,1.0698,1,1,1,1,1,1.1548,1,1,1,1,1,1.0912,1,1,1,1,1,1.1131,1,1,1,1,1,1.1519,1,1,1,1,1,1.1826,1,1,1,1,1,1.0886,1,1,1,1,1,1.1535,1,1,1,1,1,1.1449,1,1,1,1,1,1.1296,1,1,1,1,1,1.1166,1,1,1,1,1,1.1165,1,1,1,1,1,1.0954,1,1,1,1,1,1.2562,1,1,1,1,1,1.1885,1,1,1,1,1,1.2329,1,1,1,1,1,1.1422,1,1,1,1,1,1.1037,1,1,1.1212,1,1]

let coefInvestigadores=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1.,1,1,1,1,1,1.,1,1,1,1,1,1.0972,1,1,1,1,1,1.1237,1,1,1,1,1,1.2281,1,1,1,1,1,1.12,1,1,1,1,1,1.193,1,1,1,1,1,1.0304,1,1,1,1,1,1.1754,1,1,1,1,1,1.0607,1,1,1,1,1,1.1118,1,1,1,1,1,1.2819,1,1,1,1,1,1.1709,1,1,1,1,1,1.1221,1,1,1,1,1,1.186,1,1,1,1,1,1.1341,1,1,1,1,1,1.1024,1,1,1,1,1,1.134,1,1,1,1,1,1.0738,1,1,1,1,1,1.1931,1,1,1,1,1,1.086,1,1,1,1,1,1.3064,1,1,1,1,1,1.1919,1,1,1,1,1,1.07,1,1,1,1,1]

let coefLyF=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1.,1,1,1,1,1,1.,1,1,1,1,1,1.0923,1,1,1,1,1,1.1061,1,1,1,1,1,1.1061,1,1,1,1,1,1.1818,1,1,1,1,1,1.1818,1,1,1,1,1,1.1273,1,1,1,1,1,1.1273,1,1,1,1,1,1.1356,1,1,1,1,1,1.1356,1,1,1,1,1,1.1648,1,1,1,1,1,1.1648,1,1,1,1,1,1.1609,1,1,1,1,1,1.1609,1,1,1,1,1,1.1483,1,1,1,1,1,1.1483,1,1,1,1,1,1.1354,1,1,1,1,1,1.1354,1,1,1,1,1,1.134,1,1,1,1,1,1.134,1,1,1,1,1,1.1876,1,1,1,1,1,1.1876,1,1,1,1,1,1.1543,1,1,1,1,1]

let liq=[]

let ConceptosM={'001050':'SUELDO BASICO -','001051':'JUBILACION LIMITADA -','001073':'HABER ACUMULADO MINIMO -','001053':'JUBILACION LEY 18037 -','008115':'INCENTIVO MEJORAS AL SERVICIO DE JUSTICIA','001181':'PRESTACION BASICA UNIVERS.LEY 24241-','001054':'SUPLEMENTO REMUNER.ACORDADA 71/93 -','001078':'HABER MINIMO ART.20 LEY 22940      ','001055':'COMPENSACION JERARQUICA -','001056':'COMPENSACION FUNCIONAL -','001057':'COMPENSACION FUNCIONAL PORCENTAJE -','014056':'AJUSTE COMPENSACION FUNCIONAL -','201056':'DEDUCCION COMPENSACION FUNCIONAL -','008115':'INCENTIVO MEJORAS AL SERVICIO DE JUSTICIA','001058':'HABER ACUMULATIVO -','001059':'PERMANENCIA CATEGORIA -','014059':'AJUSTE PERMANENCIA CATEGORIA -','001060':'DIFERENCIA ART.4 LEY 22738 -','001070':'RESOLUCION  47/04 Y 195/04          ','001080':'EQUIPARACION CARGO CONSEJERO       ','001090':'HABER ACUMULATIVO - LEY 26.508','014058':'AJUSTE HABER ACUMULATIVO -','014053':'AJUSTE LEY 18037 -','001069':'MOVILIDAD FIJA -','001084':'ACORDADA CSJN Nº 18/2008','001074':'DIFERENCIA ACORDADA 71/93 -','001061':'BONIFICACION TITULO -','001062':'BONIFICACION TITULO PORCENTAJE -','001071':'BONIFICACION TITULO SECUNDARIO MINISTERIO PUBLICO ','101061':'AJUSTE TITULO','001063':'BONIFICACION ANTIGUEDAD SERVICIO -','001064':'BONIFICACION ANTIGUEDAD TITULO -','014063':'AJUSTE ANTIGUEDAD -','014064':'AJUSTE ANTIGUEDAD TITULO -','021050':'COMPENSACION RESIDENCIA BONIF. 20%'}

let descConcepto={'101':'SUELDO BASICO -','102':'JUBILACION LIMITADA -','103':'HABER ACUMULADO MINIMO -','104':'JUBILACION LEY 18037 -','105':'INCENTIVO MEJORAS AL SERVICIO DE JUSTICIA','106':'PRESTACION BASICA UNIVERS.LEY 24241-','108':'SUPLEMENTO REMUNER.ACORDADA 71/93 -','109':'HABER MINIMO ART.20 LEY 22940      ','110':'COMPENSACION JERARQUICA -','111':'BONIFICACION TITULO- PODER JUDICIAL -','112':'COMPENSACION FUNCIONAL PORCENTAJE -','113':'AJUSTE COMPENSACION FUNCIONAL -','114':'DEDUCCION COMPENSACION FUNCIONAL -','115':'INCENTIVO MEJORAS AL SERVICIO DE JUSTICIA','116':'HABER ACUMULATIVO -','117':'PERMANENCIA CATEGORIA -','118':'AJUSTE PERMANENCIA CATEGORIA -','119':'DIFERENCIA ART.4 LEY 22738 -','120':'RESOLUCION  47/04 Y 195/04          ','121':'EQUIPARACION CARGO CONSEJERO       ','127':'HABER ACUMULATIVO - LEY 26.508','130':'AJUSTE HABER ACUMULATIVO -','131':'AJUSTE LEY 18037 -','145':'MOVILIDAD FIJA -','157':'ACORDADA CSJN Nº 18/2008','188':'DIFERENCIA ACORDADA 71/93 -','190':'BONIFICACION TITULO -','191':'BONIFICACION TITULO PORCENTAJE -','192':'BONIFICACION TITULO SECUNDARIO MINISTERIO PUBLICO ','194':'AJUSTE TITULO','195':'BONIFICACION ANTIGUEDAD SERVICIO -','196':'BONIFICACION ANTIGUEDAD TITULO -','197':'AJUSTE ANTIGUEDAD -','198':'AJUSTE ANTIGUEDAD TITULO -','200':'COMPENSACION RESIDENCIA BONIF. 20%','201':'DEDUCCION COMPENSACION RESIDENCIA','205':'RES. PROCURACION GRAL NACION 87/06','215':'COMPENSACION ELECTORES -','220':'SUPLEMENTO ACORDADA 37/94 Y 35/95 -','221':'SUPLEMENTO ACORDADA 37/94 Y 35/95 - BONIFICABLE','225':'HABER LEY 22955 -','226':'CARGOS PROVINCIALES -','227':'EQUIPARACION LEY 24946             ','228':'REPRESENTACION O.S.P.J.            ','229':'SUBROGANCIA - R 76/04','230':'TAREAS PELIGROSAS E INSALUBRES -','231':'DEDUCCION TAREAS INSALUBRES -','235':'TAREAS INSALUBRES ACORDADA 21/97   ','240':'COMPENSACION RESIDENCIA - ACORDADA 19/99','266':'DEDUCCION POR FALLECIMIENTO','276':'DESARRAIGO','280':'MES ANTERIOR','281':'MES ANTERIOR DOCENTE','282':'AJUSTE MES ANTERIOR','283':'AJUSTE HABER ACUMULATIVO -','290':'DEDUCCION HABERES','290':'DEDUCCION HABERES','291':'DEDUCCION HABERES','291':'DEDUCCION HABERES','292':'DEDUCCION DE HABERES 20% ','298':'LEY 24463 SOLIDARIDAD PREVISIONAL - LEY24241','299':'LEY 24463 SOLIDARIDAD PREVISIONAL - LEY24241','300':'AJUSTE OCTUBRE / 93 - -','360':'AGUINALDO NORMAL -','361':'AGUINALDO NORMAL -','362':'AJUSTE AGUINALDO','363':'DEDUCCION AGUINALDO - -','364':'AGUINALDO DOCENTE -','366':'AGUINALDO CARGOS PROVINCIALES -','410':'ASIGNACION POR MATRIMONIO -','412':'ASIGNACION POR NACIMIENTO -','414':'ASIGNACION POR CONYUGE -','416':'ASIGNACION POR HIJO -','418':'ASIGNACION FAMILIA NUMEROSA -','419':'ESCOLARIDAD PRIMARIA INCAPACITADO -','420':'ESCOLARIDAD PRIMARIA -','421':'ASIGNACION PREESCOLAR -','422':'ESCOLARIDAD PRIMARIA FLIA.NUMEROSA -','424':'ESCOLARIDAD MEDIA O SUPERIOR -','425':'ESC.MEDIA O SUPERIOR INCAPACITADO -','426':'ESC.MEDIA O SUPERIOR FLIA.NUMEROSA -','427':'ASIGNACION PREESCOLAR FLIA.NUMEROSA-','428':'ASIGNACION HIJO INCAPACITADO -','429':'ESC.PRIM.FLIA.NUM.HIJO INCAPACITADO-','430':'AYUDA ESCALAR PRIMARIA -','431':'AYUDA ESC.PRIM.P/HIJO INCAPACITDO -','432':'PRE-NATAL -','434':'ASIG.ANUALCOMPL.DE VACACIONES -','435':'ASIG.ANUALCOMPL.DE VACACIONES -','437':'ASIG.ANUALCOMPL.DE VACACIONES -','441':'REAJUSTE ASIGNACION FAMILIAR -','499':'REINTEGRO - PODER JUDICIAL  DTO. 109','500':'LIQ.AUSENTE AL COBRO - -','510':'DEDUCCION POR MATRIMONIO -','512':'DEDUCCION ASIG. POR NACIMIENTO -','514':'DEDUCCION ASIG. POR CONYUGE -','516':'DEDUCCION ASIG. POR HIJO -','518':'DEDUCCION ASIG. POR FLIA.NUMEROSA -','520':'DEDUCCION ASIG. POR ESC.PRIMARIA -','522':'DEDUCCION ESC.PRIM.FLIA.NUMEROSA -','524':'DEDUCCION ESC.MEDIA O SUPERIOR -','526':'DEDUCC.ESC.MEDIA O SUP.FLIA.NUMEROSA -','527':'DEDUCCION PREESCOLAR -','528':'DEDUCCION ASIG. POR HIJO INCAPACITADO -','530':'DEDUCCION ASIG. AYUDA ESC.PRIMARIA -','532':'DEDUCCION ASIG. POR PRENATAL -','534':'DEDUCC.ASIG.ANUAL COMP.VACACIONES -','550':'REAJUSTE POR MATRIMONIO -','552':'REAJUSTE POR NACIMIENTO -','554':'REAJUSTE POR CONYUGE -','556':'REAJUSTE POR HIJO -','558':'REAJUSTE POR FLIA.NUMEROSA -','560':'REAJUSTE POR ESCOLARIDAD PRIMARIA -','561':'REAJUSTE PRE-ESCOLARIDAD -','562':'REAJUSTE ESC.PRIMARIA FLIA.NUMEROSA -','564':'REAJUSTE ESC.MEDIA O SUPERIOR -','566':'REAJUSTE ESC.MEDIA O SUP.FLIA.NUMEROSA -','568':'REAJUSTE ASIG.POR HIJO INCAPACITADO -','570':'REAJUSTE AYUDA ESCOLAR PRIMARIA -','572':'REAJUSTE POR PRE-NATAL -','574':'REAJUSTE ASIG.ANUAL C.VACACIONES -','578':'REAJUSTE ASIGNACION FAMILIAR -','602':'RETENCION IMPUESTO A LAS GANANCIAS -','603':'RETENCION IMPUESTO A LAS GANANCIAS -','604':'AJUSTE RETENCION IMPUESTO A LAS GANANCIAS -','608':'RETENCION LEY 23549 TIT.1RO. -','618':'I.N.S.S.J.P. - DESCUENTO SOBRE HABERES RETROCTIVOS','619':'CONCEPTOS UNIFICADOS OBRA SOCIAL ACORDADA 40/87 -','620':'CONCEPTOS UNIFICADOS OBRA SOCIAL ACORDADA 40/87 -','622':'CONCEPTOS UNIFICADOS OBRA SOCIAL ACORDADA 40/87 -','624':'CONCEPTOS UNIFICADOS OBRA SOCIAL ACORDADA 40/87 -','625':'CONCEPTOS UNIFICADOS OBRA SOCIAL ACORDADA 40/87 -','626':'CONCEPTOS UNIFICADOS OBRA SOCIAL ACORDADA 40/87 -','627':'CONCEPTOS UNIFICADOS OBRA SOCIAL ACORDADA 40/87 -','628':'CONCEPTOS UNIFICADOS OBRA SOCIAL ACORDADA 40/87 -','630':'APORTES LEY 23278 - -','632':'AJUSTE APORTE LEY 23278 -','634':'APORTES JUBILATORIOS OMITIDOS','645':'CONCEPTOS UNIFICADOS - ASOCIAC.JUDICIAL - -','650':'EMBARGO COMUN -','652':'AJUSTE EMBARGO COMUN -','655':'CUOTA ALIMENTO -','656':'CUOTA ALIMENTO - S.A.C. -','660':'AJUSTE CUOTA ALIMENTO -','662':'PRIMER EMBARGO % SOBRE HABER BRUTO - -','680':'AJUSTE SEGURO OBLIGATORIO -','685':'AJUSTE SEGURO ADICIONAL -','700':'CONCEPTOS UNIFICADOS-ASOCIACION MAGISTRADOS- -','701':'CONCEPTOS UNIFICADOS-ASOCIACION MAGISTRADOS- -','702':'CONCEPTOS UNIFICADOS-ASOCIACION MAGISTRADOS- -','703':'ASOC. MAGISTRADOS Y FUNC - SEG. COLECTIVO DE SEPELIO','705':'CONCEPTOS UNIFICADOS-OBRA SOCIAL- -','714':'CONCEPTOS UNIFICADOS-OBRA SOCIAL- -','715':'CONCEPTOS UNIFICADOS-OBRA SOCIAL- -','716':'CONCEPTOS UNIFICADOS-OBRA SOCIAL- -','717':'CONCEPTOS UNIFICADOS-OBRA SOCIAL- -','718':'CONCEPTOS UNIFICADOS-OBRA SOCIAL- -','719':'CONCEPTOS UNIFICADOS - OBRA SOCIAL - -','720':'CONCEPTOS UNIFICADOS - OBRA SOCIAL - -','721':'CONCEPTOS UNIFICADOS - OBRA SOCIAL - -','723':'CONCEPTOS UNIFICADOS - OBRA SOCIAL - -','725':'SOCIEDAD MUTUAL - -','726':'CONCEPTOS UNIFICADOS - OBRA SOCIAL - -','727':'CONCEPTOS UNIFICADOS - OBRA SOCIAL - -','728':'CONCEPTOS UNIFICADOS - OBRA SOCIAL - -','732':'INST.MAGISTR. EN RETIRO - -','745':'CONCEPTOS UNIFICADOS - A.M. CIRCULO - -','746':'CONCEPTOS UNIFICADOS - A.M. CIRCULO - -','747':'CONCEPTOS UNIFICADOS - A.M. CIRCULO - -','748':'CONCEPTOS UNIFICADOS - A.M. CIRCULO - -','749':'CONCEPTOS UNIFICADOS - A.M. CIRCULO - -','751':'OBRA SOCIAL DEL PODER JUDICIAL - CUOTA ADHERENTE','752':'OBRA SOCIAL DEL PODER JUDICIAL - CUOTA ADHERENTE','753':'OBRA SOCIAL DEL PODER JUDICIAL - CUOTA ADHERENTE','754':'OBRA SOCIAL DEL PODER JUDICIAL - CUOTA ADHERENTE','755':'CONCEPTOS UNIFICADOS - OBRA SOCIAL - -','757':'OBRA SOCIAL DEL PODER JUDICIAL - CUOTA ADHERENTE','760':'CONCEPTOS UNIFICADOS - OBRA SOCIAL - -','765':'CLUB TRIBUNALES - -','771':'CONCEPTOS UNIFICADOS-ASOCIACION MAGISTRADOS- -','775':'CONCEPTOS UNIFICADOS-ASOCIACION MAGISTRADOS- -','777':'CONCEPTOS UNIFICADOS-ASOCIACION MAGISTRADOS- -','780':'CONCEPTOS UNIFICADOS-ASOCIACION MAGISTRADOS- -','785':'CONCEPTOS UNIFICADOS-ASOCIACION MAGISTRADOS- -','790':'CONCEPTOS UNIFICADOS - ASOCIAC.JUDICIAL - -','791':'CONCEPTOS UNIFICADOS - ASOCIAC.JUDICIAL - -','793':'CONCEPTOS UNIFICADOS - ASOCIAC.JUDICIAL - -','795':'CONCEPTOS UNIFICADOS - ASOCIAC.JUDICIAL - -','796':'CONCEPTOS UNIFICADOS - ASOCIAC.JUDICIAL - -','800':'CONCEPTOS UNIFICADOS - ASOCIAC.JUDICIAL - -','805':'CONCEPTOS UNIFICADOS-ASOCIACION MAGISTRADOS- -','815':'CONCEPTOS UNIFICADOS - ASOCIAC.JUDICIAL - -','820':'CONCEPTOS UNIFICADOS - CEDIM - -','821':'CONCEPTOS UNIFICADOS - CEDIM - -','828':'UNION PERSONAL DEL POD JUD NACION - COMPRA CON TARJETA','832':'UNION PERSONAL DEL POD JUD NACION - COMPRAS','833':'U. P. J. N.  - CREDITOS DEL BANCO CIUDAD (28/02/2011)','835':'CONCEPTOS UNIFICADOS - MUTUAL PERSONAL JUST. -','836':'CONCEPTOS UNIFICADOS - MUTUAL PERSONAL JUST. -','837':'CONCEPTOS UNIFICADOS - MUTUAL PERSONAL JUST. -','838':'CONCEPTOS UNIFICADOS - MUTUAL PERSONAL JUST. -','908':'DESCUENTO REDONDEO - -','909':'AJUSTE POR REDONDEO - -'}

let equivalenciaConceptos={'101':'001050','102':'001051','103':'001073','104':'001053','105':'001096','106':'001181','108':'001054','109':'001078','110':'001055','111':'001061','112':'001057','113':'014056','114':'201056','115':'008115','116':'001058','117':'001059','118':'014059','119':'001060','120':'001070','121':'001080','127':'001090','130':'014058','131':'014053','145':'001069','157':'001084','188':'001074','190':'001061','191':'001062','192':'001071','194':'101061','195':'001063','196':'001064','197':'014063','198':'014064','200':'021050','201':'221050','205':'001086','215':'001065','220':'001066','221':'001081','225':'001072','226':'001067','227':'001075','228':'001076','229':'001095','230':'001068','231':'221068','235':'001077','240':'021077','266':'221051','276':'001083','280':'014050','281':'014070','282':'014057','283':'014058','290':'201050','290':'201150','291':'201050','291':'201150','292':'201051','298':'204150','299':'204150','300':'014051','360':'002050','361':'002050','362':'102050','363':'202050','364':'002070','366':'002067','410':'068050','412':'067050','414':'060050','416':'061050','418':'064050','419':'053050','420':'062050','421':'046050','422':'072050','424':'063050','425':'054050','426':'073050','427':'045050','428':'058050','429':'055050','430':'065050','431':'057050','432':'069050','434':'066050','435':'066050','437':'066050','441':'170050','499':'701051','500':'005050','510':'268050','512':'267050','514':'260050','516':'261050','518':'264050','520':'262050','522':'272050','524':'263050','526':'273050','527':'246050','528':'258050','530':'265050','532':'269050','534':'266050','550':'168050','552':'167050','554':'160050','556':'161050','558':'164050','560':'162050','561':'146050','562':'172050','564':'163050','566':'173050','568':'158050','570':'165050','572':'169050','574':'166050','578':'170050','602':'309050','603':'309050','604':'509050','608':'309051','618':'518008','619':'322050','620':'322050','622':'322050','624':'322050','625':'322050','626':'322050','627':'322050','628':'322050','630':'300073','632':'500073','634':'314070','645':'324059','650':'310050','652':'510050','655':'401050','656':'402050','660':'401051','662':'401148','680':'357050','685':'358050','700':'324052','701':'324052','702':'324052','703':'358052','705':'332051','714':'332051','715':'332051','716':'332051','717':'332051','718':'332051','719':'322051','720':'322051','721':'322051','723':'322051','725':'324054','726':'322051','727':'322051','728':'322051','732':'324057','745':'324053','746':'324053','747':'324053','748':'324053','749':'324053','751':'326751','752':'326751','753':'326751','754':'326751','755':'322051','757':'326751','760':'322051','765':'324058','771':'324052','775':'324052','777':'324052','780':'324052','785':'324052','790':'324059','791':'324059','793':'324059','795':'324059','796':'324059','800':'324059','805':'324052','815':'324059','820':'324056','821':'324056','828':'315051','832':'315050','833':'314052','835':'324055','836':'324055','837':'324055','838':'324055','908':'299050','909':'099050'}

let counter=0

function verInfoBasica(mes,año) {
    var periodo=año+mes+"01";
    var nro=nPer.indexOf(periodo);
// mínima  
    var min=haberMin[nro];
    document.getElementById('minima').textContent=min
// tope
    var min=tope[nro];
    document.getElementById('tope').textContent=min
//PBU
    var PBU=pbu[nro];
    document.getElementById('pbu').textContent=PBU
// movilidad 24241
    var movLg=(coeficienteMovilidad[nro]-1)*100;
    document.getElementById('movLg').textContent=movLg.toFixed(2)+'%'
// movilidad docente
    var movDoc=(coefDocente[nro]-1)*100;
    document.getElementById('coefDocente').textContent=movDoc.toFixed(2)+'%'
 // movilidad investigadores
    var movInv=(coefInvestigadores[nro]-1)*100;
    document.getElementById('coefInv').textContent=movInv.toFixed(2)+'%'
// movilidad luz y fuerza
    var movLyF=(coefLyF[nro]-1)*100;
    document.getElementById('coefLyF').textContent=movLyF.toFixed(2)+'%'

    var nota='Los montos e índices en pantalla corresponden al período '+ mes + '/' + año
    document.getElementById('nota').textContent=nota    
}

function Calcular(mes,año,mHasta,aHasta, monto) {
    var fechaDesde=año+mes+"01"
    var fechaHasta=aHasta+mHasta+"01"
    var nro=nPer.indexOf(fechaDesde)
    var nFin=nPer.indexOf(fechaHasta)
    var importe=monto
    if(nro<nFin) {
        nro=nro+1;
        do {
            importe=importe* coeficienteMovilidad[nro];
		if(nro == 194) importe=importe+1500;
            nro=nro+1;          
        }   
        while (nro<nFin+1);
    } else {
        do {
            importe=importe/ coeficienteMovilidad[nro];
            	if(nro == 195) importe=importe-1500;
	    nro=nro-1;
         }   
        while (nro>nFin-1);
    }
    document.getElementById('result').value= importe.toFixed(2);
}

function pami(mes,año, monto) {
    var per=año+mes+"01"
    var perMin=nPer.indexOf(per)
    var minima=haberMin[perMin]
    if (monto>parseInt(tope[perMin])) {
        window.alert("El importe ingresado es mayor al tope para el período seleccionado. El resultado no estará limitado al tope de referencia (" + tope[perMin] + ")")
    }
    var haberMinimo=parseFloat(minima.replace(",","."))
    var resPami=haberMinimo*0.03+(monto-haberMinimo)*0.06
    document.getElementById('resultOs').value=resPami.toFixed(2)
}

function modifTabla() {
document.getElementById("liquidación").rows[1].cells[1].textContent="Cambiado";
// console.log=(getElementById('mesDesde'))
var pag=HTMLAllCollection(asistente.html)
console.log(pag.getElementById(mesDesde))
}

function liquidarTabla (mes,año,mHasta,aHasta, monto, montoA) {
// window.open("tabla.html")
// window.location.href='tabla.html'
var fechaDesde=año+mes+"01"
    var fechaHasta=aHasta+mHasta+"01"
    var nro=nPer.indexOf(fechaDesde)
    var nFin=nPer.indexOf(fechaHasta)
    var cantFilas = nFin-nro+3
    var importe =parseFloat(monto.replace(",","."))
    var importeA = parseFloat(montoA.replace(",","."))
    var dif = 0
    // let liq = Array()

    // Obtenemos la referencia del elemento body
var body = document.getElementById("Ajustes");
// Creamos un elemento <table> y un elemento <tbody>
var tabla = document.createElement("table");
var tblBody = document.createElement("tbody");



// Creamos las celdas
for (var i = 0; i < cantFilas; i++) {
  // Creamos las hileras de la tabla
  var fila = document.createElement("tr");
  for (var j = 0; j < 4; j++) {
    // Crea un elemento <td> y un nodo de texto, hace que el nodo de
    // texto sea el contenido de <td>, ubica el elemento <td> al final
    // de la hilera de la tabla
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(i + " - " + j);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
}
// agregamos la hilera al final de la tabla (al final del elemento tblbody)
tblBody.appendChild(fila);
}
// posicionamos el <tbody> debajo del elemento <table>
tabla.appendChild(tblBody);
// appends <table> into <body>
body.appendChild(tabla);
// modifica el atributo "border" de la tabla y lo fija a "2";
tabla.setAttribute("border", 2);
tabla.setAttribute("id", "tabla");
// tabla.setAttribute("text-align:right");

var result = document.getElementById("resultado");
// result.appendChild(tabla);

// pongo los títulos
var cuenta=0
document.getElementById("tabla").rows[cuenta].cells[1].textContent="Importe Original";
document.getElementById("tabla").rows[cuenta].cells[2].textContent="Nuevo Importe";
document.getElementById("tabla").rows[cuenta].cells[3].textContent="Diferencia";
document.getElementById("tabla").rows[cuenta].cells[0].textContent="Período";
cuenta=cuenta+1

var totimp=0
var totimpA=0
var totDif=0

if(nro<nFin) {
    // nro=nro+1;
    do {
        importe=importe* coeficienteMovilidad[nro];
        importeA=importeA* coeficienteMovilidad[nro];
        dif = importeA - importe
    if(nro == 194) {importe=importe+1500;
                    importeA=importeA+1500;
                    }          
    document.getElementById("tabla").rows[cuenta].cells[1].textContent=importe.toFixed(2).replace(".",",");
    document.getElementById("tabla").rows[cuenta].cells[2].textContent=importeA.toFixed(2).replace(".",",");
    document.getElementById("tabla").rows[cuenta].cells[3].textContent=dif.toFixed(2).replace(".",",");
    document.getElementById("tabla").rows[cuenta].cells[0].textContent=nPer[nro].substring(4,6)+"-"+nPer[nro].substring(0,4);
    
    var totimp=totimp+importe
    var totimpA=totimpA+importeA
    var totDif=totDif+dif

    liq.push(importe.toFixed(2));
    nro=nro+1;          
    cuenta=cuenta+1;
    }   
    while (nro<nFin+1);
}
// ESCRIBO LOS TOTALES
document.getElementById("tabla").rows[cuenta].cells[1].textContent=totimp.toFixed(2).replace(".",",");;
document.getElementById("tabla").rows[cuenta].cells[2].textContent=totimpA.toFixed(2).replace(".",",");;
document.getElementById("tabla").rows[cuenta].cells[3].textContent=totDif.toFixed(2).replace(".",",");;
document.getElementById("tabla").rows[cuenta].cells[0].textContent="TOTALES";
window.scroll(0,150)
console.log(liq);
// window.open("tabla.html")
// loadLiquidación();
}

function loadLiquidación() {

    liq.forEach(element => {

        var tableRef = document.getElementById('progresión').getElementsByTagName('tbody')[0];

        // Insert a row in the table at the last row
        var newRow = tableRef.insertRow();

        // Insert a cell in the row at index 0
        var newCell1 = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);

        // Append a text node to the cell
        var newText1 = document.createTextNode(element);
        newCell1.appendChild(newText1);

        var newText2 = document.createTextNode(element);
        newCell2.appendChild(newText2);

    });
}
function exportTablaAjustesAExcel(){
    liquidarTabla(document.getElementById('mesDesdeA').value,document.getElementById('añoDesdeA').value,document.getElementById('mesHastaA').value,document.getElementById('añoHastaA').value,document.getElementById('montoA').value,document.getElementById('montoAjustado').value);
    exportTableToExcel('tabla');
}

function exportTableToExcel(tableID, filename = ''){
    // liquidarTabla(document.getElementById('mesDesdeA').value,document.getElementById('añoDesdeA').value,document.getElementById('mesHastaA').value,document.getElementById('añoHastaA').value,document.getElementById('montoA').value,document.getElementById('montoAjustado').value);
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}

//FUNCIONES DE MAGISTRADOS

function cCC() {
    var tipeado=document.getElementById("cC").value
    document.getElementById("elegirPorDescCargo").value=tipeado
}

function eligeXCargo() {
    var tipeado=document.getElementById("elegirPorDescCargo").value
    document.getElementById("cC").value=tipeado
}

function formatoExpediente(){
    var ingreso=document.getElementById("expediente").value;
    if (ingreso.length==3 || ingreso.length==6 || ingreso.length==15 ||ingreso.length==17 ||ingreso.length==21) {
        document.getElementById("expediente").value=ingreso+"-";
    }
}

function formatoCóidgoCargo(){
    var ingreso=document.getElementById("cC").value;
    if (ingreso.length==2) {
        document.getElementById("cC").value=ingreso+"-";
    }
}

function autoTab(campoActual,largo,siguienteCampo){
    if (document.getElementById(campoActual).value.length==largo){
        document.getElementById(siguienteCampo).focus();
    }
}

function confirmaImporte (concepto,nPer,cargo) {
    var item=tablaMagis[cargo]+"-"+concepto;
    var importe=tablaCombinadaMagis[item];
    var number=nPerMagistrados.indexOf(nPer)+1;   
    var cont=0;

    do {
        importe=importe*coeficientesMagistrados[cont];
        cont=cont+1;
    }
    while(number>cont);
    // number=new Intl.NumberFormat("de-DE").format(importe.toFixed(2));
    document.getElementById('importeMagis').value=importe.toFixed(2);
}

function hacerMagia(concepto) {
    document.getElementById("conceptoAnses").value = equivalenciaConceptos[concepto];
    document.getElementById("descConcepto").value = descConcepto[concepto];
    confirmaImporte(document.getElementById('conceptoRecibo').value,document.getElementById('año').value+document.getElementById('mes').value+'01' ,document.getElementById('cC').value)
    document.getElementById('okCargaConcepto').focus()
}

// carga los conceptos en la tabla
function agregaConceptos(código,descripción,concepto,monto,porcentaje) {

        var tableRef = document.getElementById('detalleLiquidación').getElementsByTagName('tbody')[0];
        // Agrego una fila
        var newRow = tableRef.insertRow();

        // Insert a cell in the row at index 0
        var newCell1 = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);
        var newCell3 = newRow.insertCell(2);
        var newCell4 = newRow.insertCell(3);
        var newCell5 = newRow.insertCell(4);
        // Append a text node to the cell
        var newText1 = document.createTextNode(código);
        newCell1.appendChild(newText1);

        var newText2 = document.createTextNode(descripción);
        newCell2.appendChild(newText2);

        var newText3 = document.createTextNode(concepto);
        newCell3.appendChild(newText3);

        var newText4 = document.createTextNode(monto);
        newCell4.appendChild(newText4);

        var newText5 = document.createTextNode(porcentaje.toFixed(2));
        newCell5.appendChild(newText5);

        document.getElementById('conceptoRecibo').value=""
        document.getElementById('conceptoAnses').value=""
        document.getElementById('importeMagis').value=""
        document.getElementById('descConcepto').value=""
        document.getElementById('conceptoRecibo').focus()
        counter=counter+1
        window.scroll(0,45500)
}
//-----------------------------------------------------------------------
function liquidarTablaMagis (mes,año,mHasta,aHasta) {

var fechaDesde=año+mes+"01"
var fechaHasta=aHasta+mHasta+"01"
var nro=nPerMagistrados.indexOf(fechaDesde)
var nFin=nPerMagistrados.indexOf(fechaHasta)
var cantFilas = nFin-nro+3


        // Obtenemos la referencia del elemento body
    var body = document.getElementById("tablaLiqMagis");
    // Creamos un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    
    
    
    // Creamos las celdas
    for (var i = 0; i < cantFilas; i++) {
      // Creamos las hileras de la tabla
      var fila = document.createElement("tr");
      for (var j = 0; j < counter+3; j++) {
        // Crea un elemento <td> y un nodo de texto, hace que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(i + " - " + j);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
    }
    // agregamos la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(fila);
    }
    // posicionamos el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", 2);
    tabla.setAttribute("id", "tabla");
    // tabla.setAttribute("text-align:right");
    
    var result = document.getElementById("resultado");
    // result.appendChild(tabla);
    
    // pongo los títulos
    var cuenta=0
    var columnas=0
    do {
    document.getElementById("tabla").rows[0].cells[columnas+1].textContent= document.getElementById('detalleLiquidación').rows[cuenta+1].cells[2].textContent;
    cuenta=cuenta+1
    columnas=columnas+1  
    } while (counter>columnas);
    document.getElementById("tabla").rows[0].cells[counter+1].textContent="Total";
    document.getElementById("tabla").rows[0].cells[counter+2].textContent="Obra Social";
    document.getElementById("tabla").rows[0].cells[0].textContent="Período";

    //primer fila de conceptos proporcionados
    cuenta=1
    columnas=0
    var total=0
    do {
        monto=document.getElementById('detalleLiquidación').rows[cuenta].cells[4].textContent / 30 *(31 - document.getElementById('día').value);
        document.getElementById("tabla").rows[1].cells[columnas+1].textContent= monto.toFixed(2);
        total=total+monto
        cuenta=cuenta+1
        columnas=columnas+1  
        } while (counter>columnas);
        document.getElementById("tabla").rows[1].cells[counter+1].textContent= total.toFixed(2);
        var per=document.getElementById('año').value+document.getElementById('mes').value+'01'
        var nroPer=nPer.indexOf(per)
        var OS=parseInt(haberMin[nroPer])/30*(31-document.getElementById('día').value)*0.03+(total-parseInt(haberMin[nroPer]))*0.06;
        document.getElementById("tabla").rows[1].cells[counter+2].textContent= OS.toFixed(2);
        document.getElementById("tabla").rows[1].cells[0].textContent= document.getElementById('día').value+'/'+document.getElementById('mes').value+'/'+document.getElementById('año').value;
        
    //segunda fila
    nroPer=nroPer+1 //número de período
    per=nPer[nroPer] //perído (20200101)
    cuenta=1;
    columnas=0;
    total=0;
    
    fila=2
    var nro=nPerMagistrados.indexOf(per)
    columnas=0
    do {
        monto=document.getElementById('detalleLiquidación').rows[cuenta].cells[4].textContent *coeficientesMagistrados[nro];
        document.getElementById("tabla").rows[fila].cells[columnas+1].textContent= monto.toFixed(2);
        total=total+monto
        cuenta=cuenta+1
        columnas=columnas+1  

    } while (counter>columnas);
    OS=parseInt(haberMin[nroPer])*0.03+(total-parseInt(haberMin[nroPer]))*0.06;
    document.getElementById("tabla").rows[fila].cells[counter+2].textContent= OS.toFixed(2);
    document.getElementById("tabla").rows[fila].cells[counter+1].textContent= total.toFixed(2);
    document.getElementById("tabla").rows[fila].cells[0].textContent= '01/'+per.substring(4,6)+'/'+per.substring(0,4);

    //loop para el resto
    total=0
    do {

        do{
        document.getElementById("tabla").rows[fila].cells[columnas+1].textContent= (document.getElementById("tabla").rows[fila-1].cells[columnas+1].textContent * coeficientesMagistrados[nro]).toFixed(2);
        total = total + document.getElementById("tabla").rows[fila-1].cells[columnas+1].textContent * coeficientesMagistrados[nro]
        columnas=columnas+1
        
        } while (counter>columnas)
    OS=parseInt(haberMin[nroPer])*0.03+(total-parseInt(haberMin[nroPer]))*0.06;
    document.getElementById("tabla").rows[fila].cells[counter+2].textContent= OS.toFixed(2);
    document.getElementById("tabla").rows[fila].cells[counter+1].textContent= total.toFixed(2);
    document.getElementById("tabla").rows[fila].cells[0].textContent= '01/'+per.substring(4,6)+'/'+per.substring(0,4);

    nro=nro+1
    fila=fila+1
    columnas=0
    nroPer=nroPer+1
    per=nPer[nroPer]
    total=0
    } while (fila<cantFilas-1)

    // ultima fila totales
    total=0
    columnas=1
    document.getElementById("tabla").rows[cantFilas-1].cells[0].textContent= "Totales";
    do {
        total=0;
        for (var i = 1; i < cantFilas-1; i++) {    
            total= total + parseFloat(document.getElementById("tabla").rows[i].cells[columnas].textContent);
        }
        document.getElementById("tabla").rows[cantFilas-1].cells[columnas].textContent= total.toFixed(2);
        columnas=columnas+1;
    } while (counter>columnas-3)
}