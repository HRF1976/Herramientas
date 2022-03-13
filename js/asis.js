// ley 24241
let coeficienteMovilidad = [1, 1, 1, 1, 1, 1, 1, 1, 1.1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.11, 1, 1, 1, 1, 1, 1, 1.13, 1, 1, 1, 1, 1, 1, 1, 1.125, 1, 1, 1, 1, 1, 1.075, 1, 1, 1, 1.075, 1, 1, 1, 1, 1, 1, 1, 1.1169, 1, 1, 1, 1, 1, 1.0734, 1, 1, 1, 1, 1, 1.0821, 1, 1, 1, 1, 1, 1.169, 1, 1, 1, 1, 1, 1.1733, 1, 1, 1, 1, 1, 1.1682, 1, 1, 1, 1, 1, 1.1762, 1, 1, 1, 1, 1, 1.1142, 1, 1, 1, 1, 1, 1.1518, 1, 1, 1, 1, 1, 1.1441, 1, 1, 1, 1, 1, 1.1131, 1, 1, 1, 1, 1, 1.1721, 1, 1, 1, 1, 1, 1.1826, 1, 1, 1, 1, 1, 1.1249, 1, 1, 1, 1, 1, 1.1535, 1, 1, 1, 1, 1, 1.1416, 1, 1, 1, 1, 1, 1.1296, 1, 1, 1, 1, 1, 1.1332, 1, 1, 1, 1, 1, 1.0571, 1, 1, 1.0569, 1, 1, 1.0668, 1, 1, 1.0778, 1, 1, 1.1183, 1, 1, 1.1074, 1, 1, 1.1222, 1, 1, 1.0874, 1, 1, 1.023, 1, 1, 1.0612, 1, 1, 1.075, 1, 1, 1.05, 1, 1, 1.0807, 1, 1, 1.1212, 1, 1, 1.1239, 1, 1, 1.1211, 1, 1, 1.1228, 1, 1]

let nPer = ['20040101', '20040201', '20040301', '20040401', '20040501', '20040601', '20040701', '20040801', '20040901', '20041001', '20041101', '20041201', '20050101', '20050201', '20050301', '20050401', '20050501', '20050601', '20050701', '20050801', '20050901', '20051001', '20051101', '20051201', '20060101', '20060201', '20060301', '20060401', '20060501', '20060601', '20060701', '20060801', '20060901', '20061001', '20061101', '20061201', '20070101', '20070201', '20070301', '20070401', '20070501', '20070601', '20070701', '20070801', '20070901', '20071001', '20071101', '20071201', '20080101', '20080201', '20080301', '20080401', '20080501', '20080601', '20080701', '20080801', '20080901', '20081001', '20081101', '20081201', '20090101', '20090201', '20090301', '20090401', '20090501', '20090601', '20090701', '20090801', '20090901', '20091001', '20091101', '20091201', '20100101', '20100201', '20100301', '20100401', '20100501', '20100601', '20100701', '20100801', '20100901', '20101001', '20101101', '20101201', '20110101', '20110201', '20110301', '20110401', '20110501', '20110601', '20110701', '20110801', '20110901', '20111001', '20111101', '20111201', '20120101', '20120201', '20120301', '20120401', '20120501', '20120601', '20120701', '20120801', '20120901', '20121001', '20121101', '20121201', '20130101', '20130201', '20130301', '20130401', '20130501', '20130601', '20130701', '20130801', '20130901', '20131001', '20131101', '20131201', '20140101', '20140201', '20140301', '20140401', '20140501', '20140601', '20140701', '20140801', '20140901', '20141001', '20141101', '20141201', '20150101', '20150201', '20150301', '20150401', '20150501', '20150601', '20150701', '20150801', '20150901', '20151001', '20151101', '20151201', '20160101', '20160201', '20160301', '20160401', '20160501', '20160601', '20160701', '20160801', '20160901', '20161001', '20161101', '20161201', '20170101', '20170201', '20170301', '20170401', '20170501', '20170601', '20170701', '20170801', '20170901', '20171001', '20171101', '20171201', '20180101', '20180201', '20180301', '20180401', '20180501', '20180601', '20180701', '20180801', '20180901', '20181001', '20181101', '20181201', '20190101', '20190201', '20190301', '20190401', '20190501', '20190601', '20190701', '20190801', '20190901', '20191001', '20191101', '20191201', '20200101', '20200201', '20200301', '20200401', '20200501', '20200601', '20200701', '20200801', '20200901', '20201001', '20201101', '20201201', '20210101', '20210201', '20210301', '20210401', '20210501', '20210601', '20210701', '20210801', '20210901', '20211001', '20211101', '20211201', '20220101', '20220201', '20220301', '20220401', '20220501']

let coeficientesMagistrados = [1, 1, 1, 1.1, 1, 1, 1, 1, 1, 1, 1.05, 1, 1, 1.1, 1, 1, 1, 1.1, 1, 1.1, 1, 1, 1, 1, 1.1, 1, 1.075, 1.075, 1, 1, 1.1, 1, 1.1, 1.1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.1, 1.1, 1.075, 1, 1, 1, 1, 1, 1, 1, 1]

let nPerMagistrados = ['20170301', '20170401', '20170501', '20170601', '20170701', '20170801', '20170901', '20171001', '20171101', '20171201', '20180101', '20180201', '20180301', '20180401', '20180501', '20180601', '20180701', '20180801', '20180901', '20181001', '20181101', '20181201', '20190101', '20190201', '20190301', '20190401', '20190501', '20190601', '20190701', '20190801', '20190901', '20191001', '20191101', '20191201', '20200101', '20200201', '20200301', '20200401', '20200501', '20200601', '20200701', '20200801', '20200901', '20201001', '20201101', '20201201', '20210101', '20210201', '20210301', '20210401', '20210501', '20210601', '20210701', '20210801']

let tablaCombinadaMagis = { 'UNO-101': '17974.5', 'UNO-110': '26961.58', 'UNO-108': '53634.01', 'UNO-120': '4853.82', 'UNO-107': '4853.82', 'UNO-157': '0', 'UNO-105': '5171.14', 'UNO-115': '5171.14', 'UNO-TOT': '108595.05', 'DOS-101': '16362.28', 'DOS-110': '24543.16', 'DOS-108': '35432.41', 'DOS-120': '4853.82', 'DOS-107': '4853.82', 'DOS-157': '0', 'DOS-105': '4059.54', 'DOS-115': '4059.54', 'DOS-TOT': '85251.21', 'TRES-101': '19415.08', 'TRES-110': '27909.24', 'TRES-108': '55817.78', 'TRES-120': '4853.82', 'TRES-107': '4853.82', 'TRES-157': '0', 'TRES-105': '5399.82', 'TRES-115': '5399.82', 'TRES-TOT': '113395.74', 'CUATRO-101': '14366.85', 'CUATRO-110': '21550.12', 'CUATRO-108': '26914.14', 'CUATRO-120': '4853.82', 'CUATRO-107': '4853.82', 'CUATRO-157': '0', 'CUATRO-105': '3384.29', 'CUATRO-115': '3384.29', 'CUATRO-TOT': '71069.22', 'CINCO-101': '13069.69', 'CINCO-110': '19604.73', 'CINCO-108': '25263.73', 'CINCO-120': '4853.82', 'CINCO-107': '4853.82', 'CINCO-157': '0', 'CINCO-105': '3139.62', 'CINCO-115': '3139.62', 'CINCO-TOT': '65931.59', 'SEIS-101': '12670.91', 'SEIS-110': '19006.13', 'SEIS-108': '22206.16', 'SEIS-120': '4853.82', 'SEIS-107': '4853.82', 'SEIS-157': '0', 'SEIS-105': '2936.89', 'SEIS-115': '2936.89', 'SEIS-TOT': '61673.91', 'SIETE-101': '12471.16', 'SIETE-110': '18707.04', 'SIETE-108': '13590.43', 'SIETE-120': '4853.82', 'SIETE-107': '4853.82', 'SIETE-157': '3320.16', 'SIETE-105': '2647.12', 'SIETE-115': '2647.12', 'SIETE-TOT': '55589.73', 'OCHO-101': '12171.85', 'OCHO-110': '18257.9', 'OCHO-108': '13226.52', 'OCHO-120': '4853.82', 'OCHO-107': '4853.82', 'OCHO-157': '3320.16', 'OCHO-105': '2591.49', 'OCHO-115': '2591.49', 'OCHO-TOT': '54421.74', 'NUEVE-101': '10552.72', 'NUEVE-110': '15828.7', 'NUEVE-108': '11499.63', 'NUEVE-120': '7840.77', 'NUEVE-107': '7840.77', 'NUEVE-157': '3320.16', 'NUEVE-105': '2452.08', 'NUEVE-115': '2452.08', 'NUEVE-TOT': '51494.06', 'DIEZ-101': '8522.12', 'DIEZ-110': '12793.51', 'DIEZ-108': '10123.82', 'DIEZ-120': '7840.77', 'DIEZ-107': '7840.77', 'DIEZ-157': '3320.16', 'DIEZ-105': '2130', 'DIEZ-115': '2130', 'DIEZ-TOT': '44730.38', 'ONCE-101': '7105.05', 'ONCE-110': '10657.85', 'ONCE-108': '8440', 'ONCE-120': '7840.77', 'ONCE-107': '7840.77', 'ONCE-157': '2766.91', 'ONCE-105': '1840.51', 'ONCE-115': '1840.51', 'ONCE-TOT': '38651.09', 'DOCE-101': '6464.44', 'DOCE-110': '9696.74', 'DOCE-108': '5667.61', 'DOCE-120': '7840.77', 'DOCE-107': '7840.77', 'DOCE-157': '2766.91', 'DOCE-105': '1621.9', 'DOCE-115': '1621.9', 'DOCE-TOT': '34058.37', 'TRECE-101': '5684.13', 'TRECE-110': '8526.34', 'TRECE-108': '3984.05', 'TRECE-120': '7840.77', 'TRECE-107': '7840.77', 'TRECE-157': '2213.37', 'TRECE-105': '1412.47', 'TRECE-115': '1412.47', 'TRECE-TOT': '29661.13', 'CATORCE-101': '4591.68', 'CATORCE-110': '6887.43', 'CATORCE-108': '4702.68', 'CATORCE-120': '7840.77', 'CATORCE-107': '7840.77', 'CATORCE-157': '2213.37', 'CATORCE-105': '1311.78', 'CATORCE-115': '1311.78', 'CATORCE-TOT': '27547.71', 'QUINCE-101': '3745.56', 'QUINCE-110': '5618.35', 'QUINCE-108': '4127.68', 'QUINCE-120': '7840.77', 'QUINCE-107': '7840.77', 'QUINCE-157': '1660.21', 'QUINCE-105': '1149.63', 'QUINCE-115': '1149.63', 'QUINCE-TOT': '24142.2', 'DIECISEIS-101': '4591.68', 'DIECISEIS-110': '6887.43', 'DIECISEIS-108': '3675.76', 'DIECISEIS-120': '7840.77', 'DIECISEIS-107': '7840.77', 'DIECISEIS-157': '2213.37', 'DIECISEIS-105': '1260.51', 'DIECISEIS-115': '1260.51', 'DIECISEIS-TOT': '26469.52', 'DIECISIETE-101': '3745.56', 'DIECISIETE-110': '5618.35', 'DIECISIETE-108': '3265.04', 'DIECISIETE-120': '7840.77', 'DIECISIETE-107': '7840.77', 'DIECISIETE-157': '1660.21', 'DIECISIETE-105': '1106.48', 'DIECISIETE-115': '1106.48', 'DIECISIETE-TOT': '23236.41', 'DIECIOCHO-101': '19954.03', 'DIECIOCHO-110': '29930.96', 'DIECIOCHO-108': '70379.3', 'DIECIOCHO-120': '4853.83', 'DIECIOCHO-107': '4853.83', 'DIECIOCHO-157': '0', 'DIECIOCHO-105': '6255.94', 'DIECIOCHO-115': '6255.94', 'DIECIOCHO-TOT': '131374.07' }

let tablaMagis = {
    '01-02': 'UNO', '01-03': 'DOS', '01-06': 'TRES', '15-01': 'UNO', '15-03': 'DOS', '15-04': 'DOS', '15-07': 'CINCO', '15-10': 'CINCO', '15-11': 'SEIS', '15-12': 'SEIS', '25-04': 'SEIS', '30-02': 'CINCO', '30-03': 'SIETE', '30-04': 'SEIS', '30-05': 'SEIS', '30-07': 'NUEVE', '35-01': 'DOS', '40-01': 'CUATRO', '55-01': 'OCHO', '60-01': 'NUEVE', '63-90': 'DIEZ', '64-00': 'ONCE', '64-01': 'DOCE', '64-02': 'TRECE', '64-03': 'DIECISEIS', '64-04': 'DIECISIETE', '83-01': 'DIEZ', '84-00': 'ONCE', '84-01': 'DOCE', '84-02': 'TRECE', '84-03': 'CATORCE', '84-04': 'QUINCE', '03-02': 'UNO', '05-01': 'UNO', '05-02': 'UNO', '05-03': 'UNO', '05-06': 'UNO', '05-12': 'UNO', '06-35': 'UNO', '06-40': 'UNO', '15-02': 'UNO', '15-20': 'UNO', '15-21': 'UNO', '05-04': 'DOS', '05-07': 'DOS', '05-08': 'DOS', '06-95': 'DOS', '07-01': 'DOS', '10-03': 'DOS', '15-05': 'DOS', '15-06': 'DOS', '07-15': 'CUATRO', '45-03': 'CUATRO', '03-03': 'TRES', '05-09': 'CINCO', '07-27': 'CINCO', '15-08': 'CINCO', '15-17': 'CINCO', '30-08': 'CINCO', '40-02': 'CINCO', '25-05': 'SEIS', '30-09': 'SEIS', '30-10': 'SEIS', '84-10': 'SEIS', '55-03': 'DIEZ', '03-01': 'DIECIOCHO', '08-03': 'TRES', '07-05': 'TRES', '07-07': 'TRES', '07-09': 'UNO', '08-27': 'UNO', '07-13': 'UNO', '07-17': 'UNO', '07-19': 'UNO', '07-21': 'UNO', '14-01': 'UNO', '07-23': 'DOS', '07-25': 'DOS', '07-29': 'DOS', '08-41': 'DOS', '08-43': 'DOS', '08-47': 'DOS', '14-04': 'DOS', '14-07': 'CINCO', '07-31': 'CINCO', '40-03': 'CINCO', '16-01': 'SEIS', '14-11': 'SEIS', '01-01': 'DIECIOCHO', '35-02': 'CUATRO', '45-01': 'CUATRO', '45-02': 'CUATRO', '45-07': 'CUATRO', '45-08': 'CUATRO', '45-04': 'CUATRO', '15-18': 'SEIS', '15-19': 'SEIS'
}

let haberMin = ['200', '200', '200', '200', '200', '260', '260', '260', '308', '308', '308', '308', '308', '308', '308', '308', '308', '308', '350', '350', '350', '350', '350', '350', '350', '350', '350', '350', '350', '470', '470', '470', '470', '470', '470', '470', '530', '530', '530', '530', '530', '530', '530', '530', '596,2', '596,2', '596,2', '596,2', '596,2', '596,2', '655', '655', '655', '655', '690', '690', '690', '690', '690', '690', '690', '690', '770,66', '770,66', '770,66', '770,66', '770,66', '770,66', '827,23', '827,23', '827,23', '827,23', '827,23', '827,23', '895,15', '895,15', '895,15', '895,15', '895,15', '895,15', '1046,43', '1046,43', '1046,43', '1046,43', '1046,43', '1046,43', '1227,77', '1227,77', '1227,77', '1227,77', '1227,77', '1227,77', '1434,29', '1434,29', '1434,29', '1434,29', '1434,29', '1434,29', '1687,01', '1687,01', '1687,01', '1687,01', '1687,01', '1687,01', '1879,67', '1879,67', '1879,67', '1879,67', '1879,67', '1879,67', '2165', '2165', '2165', '2165', '2165', '2165', '2476,98', '2476,98', '2476,98', '2476,98', '2476,98', '2476,98', '2757,13', '2757,13', '2757,13', '2757,13', '2757,13', '2757,13', '3231,63', '3231,63', '3231,63', '3231,63', '3231,63', '3231,63', '3821,72', '3821,72', '3821,72', '3821,72', '3821,72', '3821,72', '4299,06', '4299,06', '4299,06', '4299,06', '4299,06', '4299,06', '4958,96', '4958,96', '4958,96', '4958,96', '4958,96', '4958,96', '5661,15', '5661,15', '5661,15', '5661,15', '5661,15', '5661,15', '6394,84', '6394,84', '6394,84', '6394,84', '6394,84', '6394,84', '7246,63', '7246,63', '7246,63', '7246,63', '7246,63', '7246,63', '7660,41', '7660,41', '7660,41', '8096,29', '8096,29', '8096,29', '8637,12', '8637,12', '8637,12', '9309,09', '9309,09', '9309,09', '10410,36', '10410,36', '10410,36', '11528,43', '11528,43', '11528,43', '12937,2', '12937,2', '12937,2', '14067,91', '14067,91', '14067,91', '15891,47', '15891,47', '15891,47', '16864,03', '16864,03', '16864,03', '18128,83', '18128,83', '18128,83', '19035,27', '19035,27', '19035,27', '20571,44', '20571,44', '20571,44', '23064.70', '23064.70', '23064.70', '25922.42', '25922.42', '25922.42', '29061.62', '29061.62', '29061.62', '32630.39', '32630.39', '32630.39']

let tope = ['3441', '3441', '3441', '3441', '3441', '3441', '3441', '3441', '3441', '3441', '3441', '3441', '3441', '3441', '3441', '3441', '3441', '3441', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '3888,33', '4374,37', '4374,37', '4374,37', '4374,37', '4374,37', '4374,37', '4702,45', '4702,45', '4702,45', '4702,45', '5055,13', '5055,13', '5055,13', '5055,13', '5055,13', '5055,13', '5055,13', '5055,13', '5646,08', '5646,08', '5646,08', '5646,08', '5646,08', '5646,08', '6060,5', '6060,5', '6060,5', '6060,5', '6060,5', '6060,5', '6558,07', '6558,07', '6558,07', '6558,07', '6558,07', '6558,07', '7666,38', '7666,38', '7666,38', '7666,38', '7666,38', '7666,38', '8994,96', '8994,96', '8994,96', '8994,96', '8994,96', '8994,96', '10507,91', '10507,91', '10507,91', '10507,91', '10507,91', '10507,91', '12359,4', '12359,4', '12359,4', '12359,4', '12359,4', '12359,4', '13770,84', '13770,84', '13770,84', '13770,84', '13770,84', '13770,84', '15861,25', '15861,25', '15861,25', '15861,25', '15861,25', '15861,25', '18146,86', '18146,86', '18146,86', '18146,86', '18146,86', '18146,86', '20199,27', '20199,27', '20199,27', '20199,27', '20199,27', '20199,27', '23675,56', '23675,56', '23675,56', '23675,56', '23675,56', '23675,56', '27998,72', '27998,72', '27998,72', '27998,72', '27998,72', '27998,72', '31495,76', '31495,76', '31495,76', '31495,76', '31495,76', '31495,76', '36330,36', '36330,36', '36330,36', '36330,36', '36330,36', '36330,36', '41474,74', '41474,74', '41474,74', '41474,74', '41474,74', '41474,74', '46849,87', '46849,87', '46849,87', '46849,87', '46849,87', '46849,87', '53090,27', '53090,27', '53090,27', '53090,27', '53090,27', '53090,27', '56121,72', '56121,72', '56121,72', '59315,05', '59315,05', '59315,05', '63277,3', '63277,3', '63277,3', '68200,27', '68200,27', '68200,27', '76268,36', '76268,36', '76268,36', '84459,58', '84459,58', '84459,58', '94780,54', '94780,54', '94780,54', '103064,36', '103064,36', '103064,36', '106934,71', '106934,71', '106934,71', '113479,11', '113479,11', '113479,11', '121990,04', '121990,04', '121990,04', '128089,54', '128089,54', '128089,54', '138426,37', '138426,37', '138426,37', '155203.65', '155203.65', '155203.65', '174433.38', '174433.38', '174433.38', '195557.06', '195557.06', '195557.06', '219571.39', '219571.39', '219571.39']

let pbu = ['140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '364,1', '364,1', '364,1', '364,1', '364,1', '364,1', '390,82', '390,82', '390,82', '390,82', '390,82', '390,82', '422,91', '422,91', '422,91', '422,91', '422,91', '422,91', '494,38', '494,38', '494,38', '494,38', '494,38', '494,38', '580,06', '580,06', '580,06', '580,06', '580,06', '580,06', '677,62', '677,62', '677,62', '677,62', '677,62', '677,62', '797,02', '797,02', '797,02', '797,02', '797,02', '797,02', '888,04', '888,04', '888,04', '888,04', '888,04', '888,04', '1022,84', '1022,84', '1022,84', '1022,84', '1022,84', '1022,84', '1170,23', '1170,23', '1170,23', '1170,23', '1170,23', '1170,23', '1302,58', '1302,58', '1302,58', '1302,58', '1302,58', '1302,58', '1526,75', '1526,75', '1526,75', '1526,75', '1526,75', '1526,75', '1805,53', '1805,53', '1805,53', '1805,53', '1805,53', '1805,53', '2031,04', '2031,04', '2031,04', '2031,04', '2031,04', '2031,04', '2342,8', '2342,8', '2342,8', '2342,8', '2342,8', '2342,8', '2674,54', '2674,54', '2674,54', '2674,54', '2674,54', '2674,54', '3021,16', '3021,16', '3021,16', '3021,16', '3021,16', '3021,16', '3423,58', '3423,58', '3423,58', '3423,58', '3423,58', '3423,58', '3619,07', '3619,07', '3619,07', '3825', '3825', '3825', '4080,51', '4080,51', '4080,51', '4397,97', '4397,97', '4397,97', '4918,25', '4918,25', '4918,25', '5446,47', '5446,47', '5446,47', '6112,03', '6112,03', '6112,03', '6646,22', '6646,22', '6646,22', '6799,08', '6799,08', '6799,08', '7215,18', '7215,18', '7215,18', '7756,32', '7756,32', '7756,32', '8144,14', '8144,14', '8144,14', '8908.06', '8908.06', '8908.06', '9987.72', '9987.72', '9987.72', '11225.20', '11225.20', '11225.20', '13294.37', '13294.37', '13294.37', '14926.32', '14926.32', '14926.32']

let coefDocente = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.0733, 1, 1, 1, 1, 1, 1.0098, 1, 1, 1, 1, 1, 1.169, 1, 1, 1, 1, 1, 1.1733, 1, 1, 1, 1, 1, 1.1682, 1, 1, 1, 1, 1, 1.1762, 1, 1, 1, 1, 1, 1.0698, 1, 1, 1, 1, 1, 1.1548, 1, 1, 1, 1, 1, 1.0912, 1, 1, 1, 1, 1, 1.1131, 1, 1, 1, 1, 1, 1.1519, 1, 1, 1, 1, 1, 1.1826, 1, 1, 1, 1, 1, 1.0886, 1, 1, 1, 1, 1, 1.1535, 1, 1, 1, 1, 1, 1.1449, 1, 1, 1, 1, 1, 1.1296, 1, 1, 1, 1, 1, 1.1166, 1, 1, 1, 1, 1, 1.1165, 1, 1, 1, 1, 1, 1.0954, 1, 1, 1, 1, 1, 1.2562, 1, 1, 1, 1, 1, 1.1885, 1, 1, 1, 1, 1, 1.2329, 1, 1, 1, 1, 1, 1.1422, 1, 1, 1, 1, 1, 1.1037, 1, 1, 1, 1, 1, 1.1906, 1, 1, 1.1461, 1, 1, 1.0938, 1, 1]

let coefInvestigadores = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1., 1, 1, 1, 1, 1, 1., 1, 1, 1, 1, 1, 1.0972, 1, 1, 1, 1, 1, 1.1237, 1, 1, 1, 1, 1, 1.2281, 1, 1, 1, 1, 1, 1.12, 1, 1, 1, 1, 1, 1.193, 1, 1, 1, 1, 1, 1.0304, 1, 1, 1, 1, 1, 1.1754, 1, 1, 1, 1, 1, 1.0607, 1, 1, 1, 1, 1, 1.1118, 1, 1, 1, 1, 1, 1.2819, 1, 1, 1, 1, 1, 1.1709, 1, 1, 1, 1, 1, 1.1221, 1, 1, 1, 1, 1, 1.186, 1, 1, 1, 1, 1, 1.1341, 1, 1, 1, 1, 1, 1.1024, 1, 1, 1, 1, 1, 1.134, 1, 1, 1, 1, 1, 1.0738, 1, 1, 1, 1, 1, 1.1931, 1, 1, 1, 1, 1, 1.086, 1, 1, 1, 1, 1, 1.3064, 1, 1, 1, 1, 1, 1.1919, 1, 1, 1, 1, 1, 1.07, 1, 1, 1, 1, 1, 1.2540, 1, 1, 1.0877, 1, 1, 1.1129, 1, 1]

let coefLyF = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1., 1, 1, 1, 1, 1, 1., 1, 1, 1, 1, 1, 1.0923, 1, 1, 1, 1, 1, 1.1061, 1, 1, 1, 1, 1, 1.1061, 1, 1, 1, 1, 1, 1.1818, 1, 1, 1, 1, 1, 1.1818, 1, 1, 1, 1, 1, 1.1273, 1, 1, 1, 1, 1, 1.1273, 1, 1, 1, 1, 1, 1.1356, 1, 1, 1, 1, 1, 1.1356, 1, 1, 1, 1, 1, 1.1648, 1, 1, 1, 1, 1, 1.1648, 1, 1, 1, 1, 1, 1.1609, 1, 1, 1, 1, 1, 1.1609, 1, 1, 1, 1, 1, 1.1483, 1, 1, 1, 1, 1, 1.1483, 1, 1, 1, 1, 1, 1.1354, 1, 1, 1, 1, 1, 1.1354, 1, 1, 1, 1, 1, 1.134, 1, 1, 1, 1, 1, 1.134, 1, 1, 1, 1, 1, 1.1876, 1, 1, 1, 1, 1, 1.1876, 1, 1, 1, 1, 1, 1.1543, 1, 1, 1, 1, 1, 1.1876, 1, 1, 1, 1, 1, 1.2112, 1, 1, 1, 1, 1]

let liq = []

let ConceptosM = { '001050': 'SUELDO BASICO -', '001051': 'JUBILACION LIMITADA -', '001073': 'HABER ACUMULADO MINIMO -', '001053': 'JUBILACION LEY 18037 -', '008115': 'INCENTIVO MEJORAS AL SERVICIO DE JUSTICIA', '001181': 'PRESTACION BASICA UNIVERS.LEY 24241-', '001054': 'SUPLEMENTO REMUNER.ACORDADA 71/93 -', '001078': 'HABER MINIMO ART.20 LEY 22940      ', '001055': 'COMPENSACION JERARQUICA -', '001056': 'COMPENSACION FUNCIONAL -', '001057': 'COMPENSACION FUNCIONAL PORCENTAJE -', '014056': 'AJUSTE COMPENSACION FUNCIONAL -', '201056': 'DEDUCCION COMPENSACION FUNCIONAL -', '008115': 'INCENTIVO MEJORAS AL SERVICIO DE JUSTICIA', '001058': 'HABER ACUMULATIVO -', '001059': 'PERMANENCIA CATEGORIA -', '014059': 'AJUSTE PERMANENCIA CATEGORIA -', '001060': 'DIFERENCIA ART.4 LEY 22738 -', '001070': 'RESOLUCION  47/04 Y 195/04          ', '001080': 'EQUIPARACION CARGO CONSEJERO       ', '001090': 'HABER ACUMULATIVO - LEY 26.508', '014058': 'AJUSTE HABER ACUMULATIVO -', '014053': 'AJUSTE LEY 18037 -', '001069': 'MOVILIDAD FIJA -', '001084': 'ACORDADA CSJN Nº 18/2008', '001074': 'DIFERENCIA ACORDADA 71/93 -', '001061': 'BONIFICACION TITULO -', '001062': 'BONIFICACION TITULO PORCENTAJE -', '001071': 'BONIFICACION TITULO SECUNDARIO MINISTERIO PUBLICO ', '101061': 'AJUSTE TITULO', '001063': 'BONIFICACION ANTIGUEDAD SERVICIO -', '001064': 'BONIFICACION ANTIGUEDAD TITULO -', '014063': 'AJUSTE ANTIGUEDAD -', '014064': 'AJUSTE ANTIGUEDAD TITULO -', '021050': 'COMPENSACION RESIDENCIA BONIF. 20%' }

let descConcepto = { '101': 'SUELDO BASICO -', '102': 'JUBILACION LIMITADA -', '103': 'HABER ACUMULADO MINIMO -', '104': 'JUBILACION LEY 18037 -', '105': 'INCENTIVO MEJORAS AL SERVICIO DE JUSTICIA', '106': 'PRESTACION BASICA UNIVERS.LEY 24241-', '108': 'SUPLEMENTO REMUNER.ACORDADA 71/93 -', '109': 'HABER MINIMO ART.20 LEY 22940      ', '110': 'COMPENSACION JERARQUICA -', '111': 'BONIFICACION TITULO- PODER JUDICIAL -', '112': 'COMPENSACION FUNCIONAL PORCENTAJE -', '113': 'AJUSTE COMPENSACION FUNCIONAL -', '114': 'DEDUCCION COMPENSACION FUNCIONAL -', '115': 'INCENTIVO MEJORAS AL SERVICIO DE JUSTICIA', '116': 'HABER ACUMULATIVO -', '117': 'PERMANENCIA CATEGORIA -', '118': 'AJUSTE PERMANENCIA CATEGORIA -', '119': 'DIFERENCIA ART.4 LEY 22738 -', '120': 'RESOLUCION  47/04 Y 195/04          ', '121': 'EQUIPARACION CARGO CONSEJERO       ', '127': 'HABER ACUMULATIVO - LEY 26.508', '130': 'AJUSTE HABER ACUMULATIVO -', '131': 'AJUSTE LEY 18037 -', '145': 'MOVILIDAD FIJA -', '157': 'ACORDADA CSJN Nº 18/2008', '188': 'DIFERENCIA ACORDADA 71/93 -', '190': 'BONIFICACION TITULO -', '191': 'BONIFICACION TITULO PORCENTAJE -', '192': 'BONIFICACION TITULO SECUNDARIO MINISTERIO PUBLICO ', '194': 'AJUSTE TITULO', '195': 'BONIFICACION ANTIGUEDAD SERVICIO -', '196': 'BONIFICACION ANTIGUEDAD TITULO -', '197': 'AJUSTE ANTIGUEDAD -', '198': 'AJUSTE ANTIGUEDAD TITULO -', '200': 'COMPENSACION RESIDENCIA BONIF. 20%', '201': 'DEDUCCION COMPENSACION RESIDENCIA', '205': 'RES. PROCURACION GRAL NACION 87/06', '215': 'COMPENSACION ELECTORES -', '220': 'SUPLEMENTO ACORDADA 37/94 Y 35/95 -', '221': 'SUPLEMENTO ACORDADA 37/94 Y 35/95 - BONIFICABLE', '225': 'HABER LEY 22955 -', '226': 'CARGOS PROVINCIALES -', '227': 'EQUIPARACION LEY 24946             ', '228': 'REPRESENTACION O.S.P.J.            ', '229': 'SUBROGANCIA - R 76/04', '230': 'TAREAS PELIGROSAS E INSALUBRES -', '231': 'DEDUCCION TAREAS INSALUBRES -', '235': 'TAREAS INSALUBRES ACORDADA 21/97   ', '240': 'COMPENSACION RESIDENCIA - ACORDADA 19/99', '266': 'DEDUCCION POR FALLECIMIENTO', '276': 'DESARRAIGO', '280': 'MES ANTERIOR', '281': 'MES ANTERIOR DOCENTE', '282': 'AJUSTE MES ANTERIOR', '283': 'AJUSTE HABER ACUMULATIVO -', '290': 'DEDUCCION HABERES', '290': 'DEDUCCION HABERES', '291': 'DEDUCCION HABERES', '291': 'DEDUCCION HABERES', '292': 'DEDUCCION DE HABERES 20% ', '298': 'LEY 24463 SOLIDARIDAD PREVISIONAL - LEY24241', '299': 'LEY 24463 SOLIDARIDAD PREVISIONAL - LEY24241', '300': 'AJUSTE OCTUBRE / 93 - -', '360': 'AGUINALDO NORMAL -', '361': 'AGUINALDO NORMAL -', '362': 'AJUSTE AGUINALDO', '363': 'DEDUCCION AGUINALDO - -', '364': 'AGUINALDO DOCENTE -', '366': 'AGUINALDO CARGOS PROVINCIALES -', '410': 'ASIGNACION POR MATRIMONIO -', '412': 'ASIGNACION POR NACIMIENTO -', '414': 'ASIGNACION POR CONYUGE -', '416': 'ASIGNACION POR HIJO -', '418': 'ASIGNACION FAMILIA NUMEROSA -', '419': 'ESCOLARIDAD PRIMARIA INCAPACITADO -', '420': 'ESCOLARIDAD PRIMARIA -', '421': 'ASIGNACION PREESCOLAR -', '422': 'ESCOLARIDAD PRIMARIA FLIA.NUMEROSA -', '424': 'ESCOLARIDAD MEDIA O SUPERIOR -', '425': 'ESC.MEDIA O SUPERIOR INCAPACITADO -', '426': 'ESC.MEDIA O SUPERIOR FLIA.NUMEROSA -', '427': 'ASIGNACION PREESCOLAR FLIA.NUMEROSA-', '428': 'ASIGNACION HIJO INCAPACITADO -', '429': 'ESC.PRIM.FLIA.NUM.HIJO INCAPACITADO-', '430': 'AYUDA ESCALAR PRIMARIA -', '431': 'AYUDA ESC.PRIM.P/HIJO INCAPACITDO -', '432': 'PRE-NATAL -', '434': 'ASIG.ANUALCOMPL.DE VACACIONES -', '435': 'ASIG.ANUALCOMPL.DE VACACIONES -', '437': 'ASIG.ANUALCOMPL.DE VACACIONES -', '441': 'REAJUSTE ASIGNACION FAMILIAR -', '499': 'REINTEGRO - PODER JUDICIAL  DTO. 109', '500': 'LIQ.AUSENTE AL COBRO - -', '510': 'DEDUCCION POR MATRIMONIO -', '512': 'DEDUCCION ASIG. POR NACIMIENTO -', '514': 'DEDUCCION ASIG. POR CONYUGE -', '516': 'DEDUCCION ASIG. POR HIJO -', '518': 'DEDUCCION ASIG. POR FLIA.NUMEROSA -', '520': 'DEDUCCION ASIG. POR ESC.PRIMARIA -', '522': 'DEDUCCION ESC.PRIM.FLIA.NUMEROSA -', '524': 'DEDUCCION ESC.MEDIA O SUPERIOR -', '526': 'DEDUCC.ESC.MEDIA O SUP.FLIA.NUMEROSA -', '527': 'DEDUCCION PREESCOLAR -', '528': 'DEDUCCION ASIG. POR HIJO INCAPACITADO -', '530': 'DEDUCCION ASIG. AYUDA ESC.PRIMARIA -', '532': 'DEDUCCION ASIG. POR PRENATAL -', '534': 'DEDUCC.ASIG.ANUAL COMP.VACACIONES -', '550': 'REAJUSTE POR MATRIMONIO -', '552': 'REAJUSTE POR NACIMIENTO -', '554': 'REAJUSTE POR CONYUGE -', '556': 'REAJUSTE POR HIJO -', '558': 'REAJUSTE POR FLIA.NUMEROSA -', '560': 'REAJUSTE POR ESCOLARIDAD PRIMARIA -', '561': 'REAJUSTE PRE-ESCOLARIDAD -', '562': 'REAJUSTE ESC.PRIMARIA FLIA.NUMEROSA -', '564': 'REAJUSTE ESC.MEDIA O SUPERIOR -', '566': 'REAJUSTE ESC.MEDIA O SUP.FLIA.NUMEROSA -', '568': 'REAJUSTE ASIG.POR HIJO INCAPACITADO -', '570': 'REAJUSTE AYUDA ESCOLAR PRIMARIA -', '572': 'REAJUSTE POR PRE-NATAL -', '574': 'REAJUSTE ASIG.ANUAL C.VACACIONES -', '578': 'REAJUSTE ASIGNACION FAMILIAR -', '602': 'RETENCION IMPUESTO A LAS GANANCIAS -', '603': 'RETENCION IMPUESTO A LAS GANANCIAS -', '604': 'AJUSTE RETENCION IMPUESTO A LAS GANANCIAS -', '608': 'RETENCION LEY 23549 TIT.1RO. -', '618': 'I.N.S.S.J.P. - DESCUENTO SOBRE HABERES RETROCTIVOS', '619': 'CONCEPTOS UNIFICADOS OBRA SOCIAL ACORDADA 40/87 -', '620': 'CONCEPTOS UNIFICADOS OBRA SOCIAL ACORDADA 40/87 -', '622': 'CONCEPTOS UNIFICADOS OBRA SOCIAL ACORDADA 40/87 -', '624': 'CONCEPTOS UNIFICADOS OBRA SOCIAL ACORDADA 40/87 -', '625': 'CONCEPTOS UNIFICADOS OBRA SOCIAL ACORDADA 40/87 -', '626': 'CONCEPTOS UNIFICADOS OBRA SOCIAL ACORDADA 40/87 -', '627': 'CONCEPTOS UNIFICADOS OBRA SOCIAL ACORDADA 40/87 -', '628': 'CONCEPTOS UNIFICADOS OBRA SOCIAL ACORDADA 40/87 -', '630': 'APORTES LEY 23278 - -', '632': 'AJUSTE APORTE LEY 23278 -', '634': 'APORTES JUBILATORIOS OMITIDOS', '645': 'CONCEPTOS UNIFICADOS - ASOCIAC.JUDICIAL - -', '650': 'EMBARGO COMUN -', '652': 'AJUSTE EMBARGO COMUN -', '655': 'CUOTA ALIMENTO -', '656': 'CUOTA ALIMENTO - S.A.C. -', '660': 'AJUSTE CUOTA ALIMENTO -', '662': 'PRIMER EMBARGO % SOBRE HABER BRUTO - -', '680': 'AJUSTE SEGURO OBLIGATORIO -', '685': 'AJUSTE SEGURO ADICIONAL -', '700': 'CONCEPTOS UNIFICADOS-ASOCIACION MAGISTRADOS- -', '701': 'CONCEPTOS UNIFICADOS-ASOCIACION MAGISTRADOS- -', '702': 'CONCEPTOS UNIFICADOS-ASOCIACION MAGISTRADOS- -', '703': 'ASOC. MAGISTRADOS Y FUNC - SEG. COLECTIVO DE SEPELIO', '705': 'CONCEPTOS UNIFICADOS-OBRA SOCIAL- -', '714': 'CONCEPTOS UNIFICADOS-OBRA SOCIAL- -', '715': 'CONCEPTOS UNIFICADOS-OBRA SOCIAL- -', '716': 'CONCEPTOS UNIFICADOS-OBRA SOCIAL- -', '717': 'CONCEPTOS UNIFICADOS-OBRA SOCIAL- -', '718': 'CONCEPTOS UNIFICADOS-OBRA SOCIAL- -', '719': 'CONCEPTOS UNIFICADOS - OBRA SOCIAL - -', '720': 'CONCEPTOS UNIFICADOS - OBRA SOCIAL - -', '721': 'CONCEPTOS UNIFICADOS - OBRA SOCIAL - -', '723': 'CONCEPTOS UNIFICADOS - OBRA SOCIAL - -', '725': 'SOCIEDAD MUTUAL - -', '726': 'CONCEPTOS UNIFICADOS - OBRA SOCIAL - -', '727': 'CONCEPTOS UNIFICADOS - OBRA SOCIAL - -', '728': 'CONCEPTOS UNIFICADOS - OBRA SOCIAL - -', '732': 'INST.MAGISTR. EN RETIRO - -', '745': 'CONCEPTOS UNIFICADOS - A.M. CIRCULO - -', '746': 'CONCEPTOS UNIFICADOS - A.M. CIRCULO - -', '747': 'CONCEPTOS UNIFICADOS - A.M. CIRCULO - -', '748': 'CONCEPTOS UNIFICADOS - A.M. CIRCULO - -', '749': 'CONCEPTOS UNIFICADOS - A.M. CIRCULO - -', '751': 'OBRA SOCIAL DEL PODER JUDICIAL - CUOTA ADHERENTE', '752': 'OBRA SOCIAL DEL PODER JUDICIAL - CUOTA ADHERENTE', '753': 'OBRA SOCIAL DEL PODER JUDICIAL - CUOTA ADHERENTE', '754': 'OBRA SOCIAL DEL PODER JUDICIAL - CUOTA ADHERENTE', '755': 'CONCEPTOS UNIFICADOS - OBRA SOCIAL - -', '757': 'OBRA SOCIAL DEL PODER JUDICIAL - CUOTA ADHERENTE', '760': 'CONCEPTOS UNIFICADOS - OBRA SOCIAL - -', '765': 'CLUB TRIBUNALES - -', '771': 'CONCEPTOS UNIFICADOS-ASOCIACION MAGISTRADOS- -', '775': 'CONCEPTOS UNIFICADOS-ASOCIACION MAGISTRADOS- -', '777': 'CONCEPTOS UNIFICADOS-ASOCIACION MAGISTRADOS- -', '780': 'CONCEPTOS UNIFICADOS-ASOCIACION MAGISTRADOS- -', '785': 'CONCEPTOS UNIFICADOS-ASOCIACION MAGISTRADOS- -', '790': 'CONCEPTOS UNIFICADOS - ASOCIAC.JUDICIAL - -', '791': 'CONCEPTOS UNIFICADOS - ASOCIAC.JUDICIAL - -', '793': 'CONCEPTOS UNIFICADOS - ASOCIAC.JUDICIAL - -', '795': 'CONCEPTOS UNIFICADOS - ASOCIAC.JUDICIAL - -', '796': 'CONCEPTOS UNIFICADOS - ASOCIAC.JUDICIAL - -', '800': 'CONCEPTOS UNIFICADOS - ASOCIAC.JUDICIAL - -', '805': 'CONCEPTOS UNIFICADOS-ASOCIACION MAGISTRADOS- -', '815': 'CONCEPTOS UNIFICADOS - ASOCIAC.JUDICIAL - -', '820': 'CONCEPTOS UNIFICADOS - CEDIM - -', '821': 'CONCEPTOS UNIFICADOS - CEDIM - -', '828': 'UNION PERSONAL DEL POD JUD NACION - COMPRA CON TARJETA', '832': 'UNION PERSONAL DEL POD JUD NACION - COMPRAS', '833': 'U. P. J. N.  - CREDITOS DEL BANCO CIUDAD (28/02/2011)', '835': 'CONCEPTOS UNIFICADOS - MUTUAL PERSONAL JUST. -', '836': 'CONCEPTOS UNIFICADOS - MUTUAL PERSONAL JUST. -', '837': 'CONCEPTOS UNIFICADOS - MUTUAL PERSONAL JUST. -', '838': 'CONCEPTOS UNIFICADOS - MUTUAL PERSONAL JUST. -', '908': 'DESCUENTO REDONDEO - -', '909': 'AJUSTE POR REDONDEO - -' }

let equivalenciaConceptos = { '101': '001050', '102': '001051', '103': '001073', '104': '001053', '105': '001096', '106': '001181', '108': '001054', '109': '001078', '110': '001055', '111': '001061', '112': '001057', '113': '014056', '114': '201056', '115': '008115', '116': '001058', '117': '001059', '118': '014059', '119': '001060', '120': '001070', '121': '001080', '127': '001090', '130': '014058', '131': '014053', '145': '001069', '157': '001084', '188': '001074', '190': '001061', '191': '001062', '192': '001071', '194': '101061', '195': '001063', '196': '001064', '197': '014063', '198': '014064', '200': '021050', '201': '221050', '205': '001086', '215': '001065', '220': '001066', '221': '001081', '225': '001072', '226': '001067', '227': '001075', '228': '001076', '229': '001095', '230': '001068', '231': '221068', '235': '001077', '240': '021077', '266': '221051', '276': '001083', '280': '014050', '281': '014070', '282': '014057', '283': '014058', '290': '201050', '290': '201150', '291': '201050', '291': '201150', '292': '201051', '298': '204150', '299': '204150', '300': '014051', '360': '002050', '361': '002050', '362': '102050', '363': '202050', '364': '002070', '366': '002067', '410': '068050', '412': '067050', '414': '060050', '416': '061050', '418': '064050', '419': '053050', '420': '062050', '421': '046050', '422': '072050', '424': '063050', '425': '054050', '426': '073050', '427': '045050', '428': '058050', '429': '055050', '430': '065050', '431': '057050', '432': '069050', '434': '066050', '435': '066050', '437': '066050', '441': '170050', '499': '701051', '500': '005050', '510': '268050', '512': '267050', '514': '260050', '516': '261050', '518': '264050', '520': '262050', '522': '272050', '524': '263050', '526': '273050', '527': '246050', '528': '258050', '530': '265050', '532': '269050', '534': '266050', '550': '168050', '552': '167050', '554': '160050', '556': '161050', '558': '164050', '560': '162050', '561': '146050', '562': '172050', '564': '163050', '566': '173050', '568': '158050', '570': '165050', '572': '169050', '574': '166050', '578': '170050', '602': '309050', '603': '309050', '604': '509050', '608': '309051', '618': '518008', '619': '322050', '620': '322050', '622': '322050', '624': '322050', '625': '322050', '626': '322050', '627': '322050', '628': '322050', '630': '300073', '632': '500073', '634': '314070', '645': '324059', '650': '310050', '652': '510050', '655': '401050', '656': '402050', '660': '401051', '662': '401148', '680': '357050', '685': '358050', '700': '324052', '701': '324052', '702': '324052', '703': '358052', '705': '332051', '714': '332051', '715': '332051', '716': '332051', '717': '332051', '718': '332051', '719': '322051', '720': '322051', '721': '322051', '723': '322051', '725': '324054', '726': '322051', '727': '322051', '728': '322051', '732': '324057', '745': '324053', '746': '324053', '747': '324053', '748': '324053', '749': '324053', '751': '326751', '752': '326751', '753': '326751', '754': '326751', '755': '322051', '757': '326751', '760': '322051', '765': '324058', '771': '324052', '775': '324052', '777': '324052', '780': '324052', '785': '324052', '790': '324059', '791': '324059', '793': '324059', '795': '324059', '796': '324059', '800': '324059', '805': '324052', '815': '324059', '820': '324056', '821': '324056', '828': '315051', '832': '315050', '833': '314052', '835': '324055', '836': '324055', '837': '324055', '838': '324055', '908': '299050', '909': '099050' }

let counter = 0

function verInfoBasica(mes, año) {
    var periodo = año + mes + "01";
    var nro = nPer.indexOf(periodo);

    // mínima  
    var min = haberMin[nro];
    document.getElementById('minima').textContent = min
    // tope
    var min = tope[nro];
    document.getElementById('tope').textContent = min
    //PBU
    var PBU = pbu[nro];
    document.getElementById('pbu').textContent = PBU
    // movilidad 24241
    var movLg = (coeficienteMovilidad[nro] - 1) * 100;
    document.getElementById('movLg').textContent = movLg.toFixed(2) + '%'
    // movilidad docente
    var movDoc = (coefDocente[nro] - 1) * 100;
    document.getElementById('coefDocente').textContent = movDoc.toFixed(2) + '%'
    // movilidad investigadores
    var movInv = (coefInvestigadores[nro] - 1) * 100;
    document.getElementById('coefInv').textContent = movInv.toFixed(2) + '%'
    // movilidad luz y fuerza
    var movLyF = (coefLyF[nro] - 1) * 100;
    document.getElementById('coefLyF').textContent = movLyF.toFixed(2) + '%'

    var nota = 'Los montos e índices en pantalla corresponden al período ' + mes + '/' + año
    document.getElementById('nota').textContent = nota
}

function Calcular(mes, año, mHasta, aHasta, monto) {
    var fechaDesde = año + mes + "01"
    var fechaHasta = aHasta + mHasta + "01"
    var nro = nPer.indexOf(fechaDesde)
    var nFin = nPer.indexOf(fechaHasta)
    var importe = monto
    if (nro < nFin) {
        nro = nro + 1;
        do {
            importe = importe * coeficienteMovilidad[nro];
            if (nro == 194) importe = importe + 1500;
            nro = nro + 1;
        }
        while (nro < nFin + 1);
    } else {
        do {
            importe = importe / coeficienteMovilidad[nro];
            if (nro == 195) importe = importe - 1500;
            nro = nro - 1;
        }
        while (nro > nFin - 1);
    }
    document.getElementById('result').value = importe.toFixed(2);
    return importe.toFixed(2)
}

function pami(mes, año, monto) {
    var per = año + mes + "01"
    var perMin = nPer.indexOf(per)
    var minima = haberMin[perMin]
    if (monto > parseInt(tope[perMin])) {
        window.alert("El importe ingresado es mayor al tope para el período seleccionado. El resultado no estará limitado al tope de referencia (" + tope[perMin] + ")")
    }
    var haberMinimo = parseFloat(minima.replace(",", "."))
    var resPami = haberMinimo * 0.03 + (monto - haberMinimo) * 0.06

    if (monto < haberMinimo) {
        window.alert("El importe ingresado es menor a la mínima de Ley para el período seleccionado. El resultado será el 3% de la mínima (" + haberMinimo + ")")
        resPami = monto * 0.03
    }

    document.getElementById('resultOs').value = resPami.toFixed(2)

}

function modifTabla() {
    document.getElementById("liquidación").rows[1].cells[1].textContent = "Cambiado";
    // console.log=(getElementById('mesDesde'))
    var pag = HTMLAllCollection(asistente.html)
    console.log(pag.getElementById(mesDesde))
}

function liquidarTabla(mes, año, mHasta, aHasta, monto, montoA) {
    // window.open("tabla.html")
    // window.location.href='tabla.html'
    var fechaDesde = año + mes + "01"
    var fechaHasta = aHasta + mHasta + "01"
    var nro = nPer.indexOf(fechaDesde)
    var nFin = nPer.indexOf(fechaHasta)
    var cantFilas = nFin - nro + 3
    var importe = parseFloat(monto.replace(",", "."))
    var importeA = parseFloat(montoA.replace(",", "."))
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
    var cuenta = 0
    document.getElementById("tabla").rows[cuenta].cells[1].textContent = "Importe Original";
    document.getElementById("tabla").rows[cuenta].cells[2].textContent = "Nuevo Importe";
    document.getElementById("tabla").rows[cuenta].cells[3].textContent = "Diferencia";
    document.getElementById("tabla").rows[cuenta].cells[0].textContent = "Período";
    cuenta = cuenta + 1

    var totimp = 0
    var totimpA = 0
    var totDif = 0

    if (nro < nFin) {
        // nro=nro+1;
        do {
            importe = importe * coeficienteMovilidad[nro];
            importeA = importeA * coeficienteMovilidad[nro];
            dif = importeA - importe
            if (nro == 194) {
                importe = importe + 1500;
                importeA = importeA + 1500;
            }
            document.getElementById("tabla").rows[cuenta].cells[1].textContent = importe.toFixed(2).replace(".", ",");
            document.getElementById("tabla").rows[cuenta].cells[2].textContent = importeA.toFixed(2).replace(".", ",");
            document.getElementById("tabla").rows[cuenta].cells[3].textContent = dif.toFixed(2).replace(".", ",");
            document.getElementById("tabla").rows[cuenta].cells[0].textContent = nPer[nro].substring(4, 6) + "-" + nPer[nro].substring(0, 4);

            var totimp = totimp + importe
            var totimpA = totimpA + importeA
            var totDif = totDif + dif

            liq.push(importe.toFixed(2));
            nro = nro + 1;
            cuenta = cuenta + 1;
        }
        while (nro < nFin + 1);
    }
    // ESCRIBO LOS TOTALES
    document.getElementById("tabla").rows[cuenta].cells[1].textContent = totimp.toFixed(2).replace(".", ",");;
    document.getElementById("tabla").rows[cuenta].cells[2].textContent = totimpA.toFixed(2).replace(".", ",");;
    document.getElementById("tabla").rows[cuenta].cells[3].textContent = totDif.toFixed(2).replace(".", ",");;
    document.getElementById("tabla").rows[cuenta].cells[0].textContent = "TOTALES";
    // window.scroll(0, 150)
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
function exportTablaAjustesAExcel() {
    liquidarTabla(document.getElementById('mesDesdeA').value, document.getElementById('añoDesdeA').value, document.getElementById('mesHastaA').value, document.getElementById('añoHastaA').value, document.getElementById('montoA').value, document.getElementById('montoAjustado').value);
    exportTableToExcel('tabla');
}

function exportTableToExcel(tableID, filename = '') {
    // liquidarTabla(document.getElementById('mesDesdeA').value,document.getElementById('añoDesdeA').value,document.getElementById('mesHastaA').value,document.getElementById('añoHastaA').value,document.getElementById('montoA').value,document.getElementById('montoAjustado').value);
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    // Specify file name
    filename = filename ? filename + '.xls' : 'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
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
    var tipeado = document.getElementById("cC").value
    document.getElementById("elegirPorDescCargo").value = tipeado
}

function eligeXCargo() {
    var tipeado = document.getElementById("elegirPorDescCargo").value
    document.getElementById("cC").value = tipeado
}

function formatoExpediente() {
    var ingreso = document.getElementById("expediente").value;
    if (ingreso.length == 3 || ingreso.length == 6 || ingreso.length == 15 || ingreso.length == 17 || ingreso.length == 21) {
        document.getElementById("expediente").value = ingreso + "-";
    }
}

function formatoCóidgoCargo() {
    var ingreso = document.getElementById("cC").value;
    if (ingreso.length == 2) {
        document.getElementById("cC").value = ingreso + "-";
    }
}

function autoTab(campoActual, largo, siguienteCampo) {
    if (document.getElementById(campoActual).value.length == largo) {
        document.getElementById(siguienteCampo).focus();
    }
}

function confirmaImporte(concepto, nPer, cargo) {
    var item = tablaMagis[cargo] + "-" + concepto;
    var importe = tablaCombinadaMagis[item];
    var number = nPerMagistrados.indexOf(nPer) + 1;
    var cont = 0;

    do {
        importe = importe * coeficientesMagistrados[cont];
        cont = cont + 1;
    }
    while (number > cont);
    // number=new Intl.NumberFormat("de-DE").format(importe.toFixed(2));
    document.getElementById('importeMagis').value = importe.toFixed(2);
}

function hacerMagia(concepto) {
    document.getElementById("conceptoAnses").value = equivalenciaConceptos[concepto];
    document.getElementById("descConcepto").value = descConcepto[concepto];
    confirmaImporte(document.getElementById('conceptoRecibo').value, document.getElementById('año').value + document.getElementById('mes').value + '01', document.getElementById('cC').value)
    document.getElementById('okCargaConcepto').focus()
}

// carga los conceptos en la tabla
function agregaConceptos(código, descripción, concepto, monto, porcentaje) {

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

    document.getElementById('conceptoRecibo').value = ""
    document.getElementById('conceptoAnses').value = ""
    document.getElementById('importeMagis').value = ""
    document.getElementById('descConcepto').value = ""
    document.getElementById('conceptoRecibo').focus()
    counter = counter + 1
    window.scroll(0, 45500)
}
//-----------------------------------------------------------------------
function liquidarTablaMagis(mes, año, mHasta, aHasta) {

    var fechaDesde = año + mes + "01"
    var fechaHasta = aHasta + mHasta + "01"
    var nro = nPerMagistrados.indexOf(fechaDesde)
    var nFin = nPerMagistrados.indexOf(fechaHasta)
    var cantFilas = nFin - nro + 3


    // Obtenemos la referencia del elemento body
    var body = document.getElementById("tablaLiqMagis");
    // Creamos un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");



    // Creamos las celdas
    for (var i = 0; i < cantFilas; i++) {
        // Creamos las hileras de la tabla
        var fila = document.createElement("tr");
        for (var j = 0; j < counter + 3; j++) {
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
    var cuenta = 0
    var columnas = 0
    do {
        document.getElementById("tabla").rows[0].cells[columnas + 1].textContent = document.getElementById('detalleLiquidación').rows[cuenta + 1].cells[2].textContent;
        cuenta = cuenta + 1
        columnas = columnas + 1
    } while (counter > columnas);
    document.getElementById("tabla").rows[0].cells[counter + 1].textContent = "Total";
    document.getElementById("tabla").rows[0].cells[counter + 2].textContent = "Obra Social";
    document.getElementById("tabla").rows[0].cells[0].textContent = "Período";

    //primer fila de conceptos proporcionados
    cuenta = 1
    columnas = 0
    var total = 0
    do {
        monto = document.getElementById('detalleLiquidación').rows[cuenta].cells[4].textContent / 30 * (31 - document.getElementById('día').value);
        document.getElementById("tabla").rows[1].cells[columnas + 1].textContent = monto.toFixed(2);
        total = total + monto
        cuenta = cuenta + 1
        columnas = columnas + 1
    } while (counter > columnas);
    document.getElementById("tabla").rows[1].cells[counter + 1].textContent = total.toFixed(2);
    var per = document.getElementById('año').value + document.getElementById('mes').value + '01'
    var nroPer = nPer.indexOf(per)
    var OS = parseInt(haberMin[nroPer]) / 30 * (31 - document.getElementById('día').value) * 0.03 + (total - parseInt(haberMin[nroPer])) * 0.06;
    document.getElementById("tabla").rows[1].cells[counter + 2].textContent = OS.toFixed(2);
    document.getElementById("tabla").rows[1].cells[0].textContent = document.getElementById('día').value + '/' + document.getElementById('mes').value + '/' + document.getElementById('año').value;

    //segunda fila
    nroPer = nroPer + 1 //número de período
    per = nPer[nroPer] //perído (20200101)
    cuenta = 1;
    columnas = 0;
    total = 0;

    fila = 2
    var nro = nPerMagistrados.indexOf(per)
    columnas = 0
    do {
        monto = document.getElementById('detalleLiquidación').rows[cuenta].cells[4].textContent * coeficientesMagistrados[nro];
        document.getElementById("tabla").rows[fila].cells[columnas + 1].textContent = monto.toFixed(2);
        total = total + monto
        cuenta = cuenta + 1
        columnas = columnas + 1

    } while (counter > columnas);
    OS = parseInt(haberMin[nroPer]) * 0.03 + (total - parseInt(haberMin[nroPer])) * 0.06;
    document.getElementById("tabla").rows[fila].cells[counter + 2].textContent = OS.toFixed(2);
    document.getElementById("tabla").rows[fila].cells[counter + 1].textContent = total.toFixed(2);
    document.getElementById("tabla").rows[fila].cells[0].textContent = '01/' + per.substring(4, 6) + '/' + per.substring(0, 4);

    //loop para el resto
    total = 0
    do {

        do {
            document.getElementById("tabla").rows[fila].cells[columnas + 1].textContent = (document.getElementById("tabla").rows[fila - 1].cells[columnas + 1].textContent * coeficientesMagistrados[nro]).toFixed(2);
            total = total + document.getElementById("tabla").rows[fila - 1].cells[columnas + 1].textContent * coeficientesMagistrados[nro]
            columnas = columnas + 1

        } while (counter > columnas)
        OS = parseInt(haberMin[nroPer]) * 0.03 + (total - parseInt(haberMin[nroPer])) * 0.06;
        document.getElementById("tabla").rows[fila].cells[counter + 2].textContent = OS.toFixed(2);
        document.getElementById("tabla").rows[fila].cells[counter + 1].textContent = total.toFixed(2);
        document.getElementById("tabla").rows[fila].cells[0].textContent = '01/' + per.substring(4, 6) + '/' + per.substring(0, 4);

        nro = nro + 1
        fila = fila + 1
        columnas = 0
        nroPer = nroPer + 1
        per = nPer[nroPer]
        total = 0
    } while (fila < cantFilas - 1)

    // ultima fila totales
    total = 0
    columnas = 1
    document.getElementById("tabla").rows[cantFilas - 1].cells[0].textContent = "Totales";
    do {
        total = 0;
        for (var i = 1; i < cantFilas - 1; i++) {
            total = total + parseFloat(document.getElementById("tabla").rows[i].cells[columnas].textContent);
        }
        document.getElementById("tabla").rows[cantFilas - 1].cells[columnas].textContent = total.toFixed(2);
        columnas = columnas + 1;
    } while (counter > columnas - 3)
}

//ASISTENTE OTRA VEZ----------------------------------------
function deFebAMar(pbu, pc, pap) {
    pbu = document.getElementById('PBU').value
    pc = document.getElementById('PC').value
    pap = document.getElementById('PAP').value
    supl = 0
    var nroPeríodo = 193
    var porcent = document.getElementById("porcBenef").value
    var f = 2
    document.getElementById("tablaMov2020").rows[1].cells[1].textContent = pbu
    document.getElementById("tablaMov2020").rows[1].cells[2].textContent = pc
    document.getElementById("tablaMov2020").rows[1].cells[3].textContent = pap

    nroPeríodo += 1
    //escribo marzo
    pbu = pbu * coeficienteMovilidad[nroPeríodo]
    pc = pc * coeficienteMovilidad[nroPeríodo]
    pap = pap * coeficienteMovilidad[nroPeríodo]
    supl = 1500 * porcent
    document.getElementById("tablaMov2020").rows[2].cells[4].textContent = supl
    document.getElementById("tablaMov2020").rows[f].cells[1].textContent = pbu.toFixed(2)
    document.getElementById("tablaMov2020").rows[f].cells[2].textContent = pc.toFixed(2)
    document.getElementById("tablaMov2020").rows[f].cells[3].textContent = pap.toFixed(2)
    nroPeríodo += 3
    f += 1
    //loop para el resto
    do {
        pbu = pbu * coeficienteMovilidad[nroPeríodo]
        pc = pc * coeficienteMovilidad[nroPeríodo]
        pap = pap * coeficienteMovilidad[nroPeríodo]
        supl = supl * coeficienteMovilidad[nroPeríodo]

        document.getElementById("tablaMov2020").rows[f].cells[1].textContent = pbu.toFixed(2)
        document.getElementById("tablaMov2020").rows[f].cells[2].textContent = pc.toFixed(2)
        document.getElementById("tablaMov2020").rows[f].cells[3].textContent = pap.toFixed(2)
        document.getElementById("tablaMov2020").rows[f].cells[4].textContent = supl.toFixed(2)

        nroPeríodo = nroPeríodo + 3
        f = f + 1

    } while (f < 6);
    //SOLO PBU
    if (pc == 0) {
        if (pap == 0) {

            pbu = pbu + supl
            pbu = pbu * coeficienteMovilidad[nroPeríodo]
            supl = 0

            //PBU Y PAP
        } else {
            console.log("PBU y PAP")
            if (pbu >= 8144 * porcent) {
                pap = pap + supl
                pbu = pbu * coeficienteMovilidad[nroPeríodo]
                pap = pap * coeficienteMovilidad[nroPeríodo]
                supl = 0

            } else {
                suplEntero = 1796.35
                cpbu = (pbu / 8144.14).toFixed(2)
                difPbu = 563.64
                difPcPap = 1233.10 * porcent
                aRepartir = suplEntero * porcent - difPbu * cpbu
                pbu = pbu + (difPbu * cpbu)
                pap = pap + aRepartir
                pbu = pbu * coeficienteMovilidad[nroPeríodo]
                pap = pap * coeficienteMovilidad[nroPeríodo]
                supl = 0
            }
        }
        //PBU Y PC
    } else {
        if (pap == 0) {
            console.log("PBU y PC")
            if (pbu >= 8144 * porcent) {
                pc = pc + supl
                pbu = pbu * coeficienteMovilidad[nroPeríodo]
                pc = pc * coeficienteMovilidad[nroPeríodo]
                supl = 0

            } else {
                suplEntero = 1796.35
                cpbu = (pbu / 8144.14).toFixed(2)
                difPbu = 563.64
                difPcPap = 1233.10 * porcent
                aRepartir = suplEntero * porcent - difPbu * cpbu
                pbu = pbu + (difPbu * cpbu)
                pc = pc + aRepartir
                pbu = pbu * coeficienteMovilidad[nroPeríodo]
                pc = pc * coeficienteMovilidad[nroPeríodo]
                supl = 0
            }
            //PBU-PC-PAP
        } else {
            var pcPap = pc + pap
            var partPc = pc / pcPap
            var partPap = pap / pcPap
            if (pbu >= 8144 * porcent) {
                pc = pc + supl * partPc
                pap = pap + supl * partPap
                supl = 0
                pbu = pbu * coeficienteMovilidad[nroPeríodo]
                pc = pc * coeficienteMovilidad[nroPeríodo]
                pap = pap * coeficienteMovilidad[nroPeríodo]
            } else {
                suplEntero = 1796.35
                cpbu = (pbu / 8144.14).toFixed(2)
                difPbu = 563.64
                difPcPap = 1233.10 * porcent
                aRepartir = suplEntero * porcent - difPbu * cpbu
                pbu = pbu + (difPbu * cpbu)
                pc = pc + aRepartir * partPc
                pap = pap + aRepartir * partPap

                pbu = pbu * coeficienteMovilidad[nroPeríodo]
                pc = pc * coeficienteMovilidad[nroPeríodo]
                pap = pap * coeficienteMovilidad[nroPeríodo]
                supl = 0
            }

        }
    }
    //ESCRIBO RESULTADOS MZO Y ABRIL
    document.getElementById("tablaMov2020").rows[f].cells[1].textContent = pbu.toFixed(2)
    document.getElementById("tablaMov2020").rows[f].cells[2].textContent = pc.toFixed(2)
    document.getElementById("tablaMov2020").rows[f].cells[3].textContent = pap.toFixed(2)
    document.getElementById("tablaMov2020").rows[f].cells[4].textContent = supl.toFixed(2)
    f += 1
    document.getElementById("tablaMov2020").rows[f].cells[1].textContent = pbu.toFixed(2)
    document.getElementById("tablaMov2020").rows[f].cells[2].textContent = pc.toFixed(2)
    document.getElementById("tablaMov2020").rows[f].cells[3].textContent = pap.toFixed(2)
    document.getElementById("tablaMov2020").rows[f].cells[4].textContent = supl.toFixed(2)

}

function pensiones(cony, hijos) {
    cony = document.getElementById("cónyuges").value
    hijos = document.getElementById("hijos").value
    var cómputo = 0
    var bCony = 0
    var bHijos = 0
    console.log(cony)

    if (cony == "0") {
        switch (hijos) {
            case "1":
                cómputo = 70
                bCony = 0
                bHijos = 100
                break;
            case "2":
                cómputo = 90
                bCony = 0
                bHijos = 50
                break;
            case "3":
                cómputo = 100
                bCony = 0
                bHijos = 33.33
                break;
            case "4":
                cómputo = 100
                bCony = 0
                bHijos = 25
                break;
            case "5":
                cómputo = 100
                bCony = 0
                bHijos = 20
                break;
            case "6":
                cómputo = 100
                bCony = 0
                bHijos = 16.67
                break;
            case "7":
                cómputo = 100
                bCony = 0
                bHijos = 14.29
                break;
            case "8":
                cómputo = 100
                bCony = 0
                bHijos = 12.50
                break;
            case "9":
                cómputo = 100
                bCony = 0
                bHijos = 11.11
                break;
            case "10":
                cómputo = 100
                bCony = 0
                bHijos = 10
                break;

            default:
                break;

        }
    } else if (cony == "1") {
        switch (hijos) {
            case "0":
                cómputo = 70
                bCony = 100
                bHijos = 0
                break;
            case "1":
                cómputo = 70
                bCony = 71.43
                bHijos = 28.57
                break;
            case "2":
                cómputo = 90
                bCony = 55.56
                bHijos = 22.22
                break;
            case "3":
                cómputo = 100
                bCony = 45.46
                bHijos = 18.18
                break;
            case "4":
                cómputo = 100
                bCony = 38.48
                bHijos = 15.38
                break;
            case "5":
                cómputo = 100
                bCony = 33.35
                bHijos = 13.33
                break;
            case "6":
                cómputo = 100
                bCony = 29.44
                bHijos = 11.76
                break;
            case "7":
                cómputo = 100
                bCony = 26.29
                bHijos = 10.53
                break;
            case "8":
                cómputo = 100
                bCony = 23.84
                bHijos = 9.52
                break;
            case "9":
                cómputo = 100
                bCony = 21.70
                bHijos = 8.70
                break;
            case "10":
                cómputo = 100
                bCony = 20
                bHijos = 8
                break;

            default:
                break;

        }

    }
    else if (cony == "2") {
        switch (hijos) {
            case "0":
                cómputo = 70
                bCony = 50
                bHijos = 0
                break;
            case "1":
                cómputo = 70
                bCony = 35.71
                bHijos = 28.57
                break;
            case "2":
                cómputo = 90
                bCony = 27.78
                bHijos = 22.22
                break;
            case "3":
                cómputo = 100
                bCony = 22.73
                bHijos = 18.18
                break;
            case "4":
                cómputo = 100
                bCony = 19.24
                bHijos = 15.38
                break;
            case "5":
                cómputo = 100
                bCony = 16.68
                bHijos = 13.33
                break;
            case "6":
                cómputo = 100
                bCony = 29.44
                bHijos = 14.72
                break;
            case "7":
                cómputo = 100
                bCony = 13.15
                bHijos = 10.53
                break;
            case "8":
                cómputo = 100
                bCony = 11.92
                bHijos = 9.52
                break;
            case "9":
                cómputo = 100
                bCony = 10.85
                bHijos = 8.70
                break;
            case "10":
                cómputo = 100
                bCony = 10
                bHijos = 8
                break;

            default:
                break;

        }
    }

    document.getElementById("resPorcComp").value = cómputo + "%"
    document.getElementById("resCónyuges").value = bCony + "%"
    document.getElementById("resHijos").value = bHijos + "%"
    console.log(cony)
    console.log(hijos)
}

//CÁLCULOS DE RH----------------------------------------
let actJubi = ['1,6542', '1,6459', '1,6357', '1,6025', '1,5992', '1,6158', '1,5821', '1,583', '1,5863', '1,5868', '1,5902', '1,6088', '1,5996', '1,6059', '1,6141', '1,6234', '1,6351', '1,653', '1,669', '1,6917', '1,7221', '1,7427', '1,7496', '1,7628', '1,7587', '1,7441', '1,7398', '1,7401', '1,7269', '1,7254', '1,7114', '1,7032', '1,6964', '1,6905', '1,6868', '1,6862', '1,6922', '1,6997', '1,6941', '1,6844', '1,6712', '1,6423', '1,5873', '1,5866', '1,5945', '1,5968', '1,6088', '1,6011', '1,6154', '1,6141', '1,6266', '1,6184', '1,6057', '1,5749', '1,5152', '1,5096', '1,5091', '1,4989', '1,5007', '1,5354', '1,5232', '1,4769', '1,4598', '1,4632', '1,4392', '1,3674', '1,2997', '1,265', '1,2207', '1,1993', '1,1838', '1,1735', '1,1595', '1,1478', '1,1382', '1,1291', '1,1213', '1,1139', '1,1069', '1,1008', '1,0946', '1,0867', '1,0807', '1,0763', '1,0704', '1,0657', '1,0613', '1,0571', '1,0531', '1,0491', '1,0454', '1,0431', '1,0391', '1,0364', '1,0339', '1,0311', '1,0385', '1,0281', '1,0281', '1,0302', '1,0258', '1,027', '1,0191', '1,02', '1,0192', '1,0172', '1,0152', '1,0216', '1,0304', '1,0488', '1,0819', '1,1212', '1,1327', '1,1537', '1,1788', '1,2055', '1,216', '1,21', '1,1964', '1,2074', '1,1914', '1,1865', '1,1833', '1,1867', '1,1871', '1,1987', '1,1962', '1,1954', '1,2061', '1,2503', '1,2638', '1,2895', '1,3247', '1,3718', '1,397', '1,4451', '1,4555', '1,4569', '1,4707', '1,4874', '1,5189', '1,5389', '1,5731', '1,5945', '1,6174', '1,6414', '1,6492', '1,6823', '1,6838', '1,7091', '1,7239', '1,752', '1,7812', '1,8247', '1,8311', '1,8304', '1,8806', '1,9158', '1,9111', '1,9724', '1,9635', '1,9746', '1,9718', '2,0387', '2,0841', '2,2101', '1,3519', '1,3578', '1,3545', '1,351', '1,3474', '1,3439', '1,3405', '1,3371', '1,334', '1,3307', '1,3274', '1,3243', '1,321', '1,3177', '1,3145', '1,3112', '1,3079', '1,3045', '1,3012', '1,2978', '1,2944', '1,291', '1,2874', '1,284', '1,2802', '1,2766', '1,2733', '1,2696', '1,2658', '1,2622', '1,2585', '1,2547', '1,251', '1,2473', '1,2436', '1,24', '1,2363', '1,2324', '1,2286', '1,2246', '1,2204', '1,2163', '1,2122', '1,2079', '1,2034', '1,199', '1,1947', '1,1904', '1,1859', '1,1814', '1,1766', '1,1724', '1,1677', '1,1631', '1,1586', '1,1538', '1,1491', '1,1439', '1,1387', '1,1335', '1,1282', '1,1227', '1,1174', '1,1124', '1,1077', '1,1036', '1,1001', '1,0968', '1,0937', '1,091', '1,0888', '1,0866', '1,0844', '1,0819', '1,0795', '1,0769', '1,0741', '1,0713', '1,0682', '1,0649', '1,0615', '1,0578', '1,0538', '1,0497', '1,0461', '1,0425', '1,039', '1,0358', '1,0331', '1,0306', '1,0285', '1,0264', '1,024', '1,0216', '1,0193', '1,0171', '1,015', '1,0131', '1,0113', '1,0096']

let actRTI = ['1,5154', '1,5105', '1,5363', '1,5752', '1,5866', '1,5541', '1,4951', '1,4626', '1,3973', '1,3662', '1,3429', '1,334', '1,3047', '1,2851', '1,2687', '1,253', '1,2395', '1,2301', '1,2156', '1,2004', '1,1884', '1,1737', '1,1628', '1,1587', '1,1425', '1,1347', '1,1287', '1,1211', '1,1069', '1,1055', '1,0917', '1,0846', '1,0776', '1,0719', '1,0669', '1,0648', '1,0577', '1,0537', '1,0502', '1,047', '1,0432', '1,0413', '1,0378', '1,0348', '1,0324', '1,0294', '1,0269', '1,0283', '1,0224', '1,0203', '1,0184', '1,0165', '1,0147', '1,0146', '1,0116', '1,0107', '1,0092', '1,0073', '1,006', '1,006', '1,0035', '1,0022', '1,0015', '1,0011', '1,0006', '1,0009', '1,0003', '1,0013', '1,0004', '1', '1,0001', '1,006', '1,0003', '1,0003', '1,0003', '1,0002', '1,0001', '1,0008', '1,0014', '1,003', '1,003', '1,0008', '1,0004', '1,002', '1,0003', '1,0002', '1,0001', '1,0003', '1,0001', '1', '1,0002', '1,0027', '1,0011', '1,0011', '1,0011', '1,0001', '1,0192', '1,0024', '1,0063', '1,0139', '1,0085', '1,0139', '1,0012', '1,0056', '1,0067', '1,0051', '1,0034', '1,0183', '1,0353', '1,0601', '1,0936', '1,1332', '1,1443', '1,1647', '1,1893', '1,2149', '1,224', '1,2165', '1,2013', '1,2103', '1,1931', '1,1866', '1,1814', '1,1825', '1,1807', '1,1897', '1,1849', '1,1814', '1,1896', '1,2305', '1,2405', '1,2624', '1,2934', '1,3356', '1,3557', '1,3978', '1,4026', '1,3986', '1,4062', '1,4166', '1,4408', '1,4538', '1,4796', '1,4928', '1,507', '1,5216', '1,5208', '1,5428', '1,5355', '1,5498', '1,5537', '1,5694', '1,5861', '1,6147', '1,61', '1,5987', '1,631', '1,651', '1,6353', '1,6758', '1,6561', '1,6531', '1,6382', '1,6798', '1,7029', '1,7902', '1,1819', '1,1806', '1,1715', '1,163', '1,1551', '1,1482', '1,1424', '1,1369', '1,132', '1,1278', '1,1242', '1,1209', '1,1175', '1,1137', '1,1102', '1,1062', '1,1024', '1,0983', '1,0938', '1,0891', '1,0842', '1,0789', '1,0729', '1,0672', '1,0621', '1,0571', '1,0522', '1,0478', '1,0441', '1,0406', '1,0377', '1,0348', '1,0316', '1,0284', '1,0252', '1,0223', '1,0196', '1,0171', '1,0147', '1,0125', '1,0104', '1,0082', '1,0063', '1,0041', '1,0022', '1,0002', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']

let perActRh = ['199407', '199408', '199409', '199410', '199411', '199412', '199501', '199502', '199503', '199504', '199505', '199506', '199507', '199508', '199509', '199510', '199511', '199512', '199601', '199602', '199603', '199604', '199605', '199606', '199607', '199608', '199609', '199610', '199611', '199612', '199701', '199702', '199703', '199704', '199705', '199706', '199707', '199708', '199709', '199710', '199711', '199712', '199801', '199802', '199803', '199804', '199805', '199806', '199807', '199808', '199809', '199810', '199811', '199812', '199901', '199902', '199903', '199904', '199905', '199906', '199907', '199908', '199909', '199910', '199911', '199912', '200001', '200002', '200003', '200004', '200005', '200006', '200007', '200008', '200009', '200010', '200011', '200012', '200101', '200102', '200103', '200104', '200105', '200106', '200107', '200108', '200109', '200110', '200111', '200112', '200201', '200202', '200203', '200204', '200205', '200206', '200207', '200208', '200209', '200210', '200211', '200212', '200301', '200302', '200303', '200304', '200305', '200306', '200307', '200308', '200309', '200310', '200311', '200312', '200401', '200402', '200403', '200404', '200405', '200406', '200407', '200408', '200409', '200410', '200411', '200412', '200501', '200502', '200503', '200504', '200505', '200506', '200507', '200508', '200509', '200510', '200511', '200512', '200601', '200602', '200603', '200604', '200605', '200606', '200607', '200608', '200609', '200610', '200611', '200612', '200701', '200702', '200703', '200704', '200705', '200706', '200707', '200708', '200709', '200710', '200711', '200712', '200801', '200802', '200803', '200804', '200805', '200806', '200807', '200808', '200809', '200810', '200811', '200812', '200901', '200902', '200903', '200904', '200905', '200906', '200907', '200908', '200909', '200910', '200911', '200912', '201001', '201002', '201003', '201004', '201005', '201006', '201007', '201008', '201009', '201010', '201011', '201012', '201101', '201102', '201103', '201104', '201105', '201106', '201107', '201108', '201109', '201110', '201111', '201112', '201201', '201202', '201203', '201204', '201205', '201206', '201207', '201208', '201209', '201210', '201211', '201212', '201301', '201302', '201303', '201304', '201305', '201306', '201307', '201308', '201309', '201310', '201311', '201312', '201401', '201402', '201403', '201404', '201405', '201406', '201407', '201408', '201409', '201410', '201411', '201412', '201501', '201502', '201503', '201504', '201505', '201506', '201507', '201508', '201509', '201510', '201511', '201512', '201601', '201602', '201603', '201604', '201605', '201606', '201607', '201608']

let coefBadaro = [' 99.738563836197', ' 99.6447069467365', ' 99.57493056029', ' 99.521652071896', ' 99.5582464263307', ' 99.6736686327938', ' 105.896282880488', ' 106.49035339555', ' 106.679334780159', ' 106.718544447437', ' 107.279260512083', ' 107.588871899924', ' 111.073634083029', ' 111.411709326321', ' 111.507635837392', ' 111.92818555192', ' 115.211648390973', ' 115.845958282536', ' 116.547957147038', ' 117.477747237203', ' 118.459051264828', ' 119.421717684007', ' 119.838573719716', ' 120.575678417608', ' 123.722026928731', ' 125.83525878065', ' 126.951354550322', ' 127.544336686724', ' 127.915813239789', ' 128.132343520861', ' 128.963212991528', ' 130.095255961679', ' 130.518752408864', ' 130.673297172261', ' 131.200322760844', ' 131.815230670843', ' 136.650986170692', ' 139.459156307887', ' 140.391959899524', ' 142.211253416816', ' 144.388233018647', ' 145.656157110774', ' 148.044542502433', ' 150.30304036426', ' 153.101495194978', ' 155.251467586506', ' 156.773837988318', ' 158.593441898788', ' 161.265876097912', ' 162.795189294231', ' 164.186831100824', ' 166.852066180752', ' 169.40747414157', ' 171.48433171783', ' 174.734766275789', ' 177.346560661856', ' 180.828214908106', ' 184.094264045209', ' 186.627907436629', ' 188.558998569077', ' 191.005811972083']

function badaroPuro(haber) {
    var h = haber
    var porc = document.getElementById("porcBenef").value
    var porc2 = document.getElementById("porcBenef2").value
    resultado = h * porc * porc2 * 19.908886958248

    document.getElementById("res082016").value = resultado.toFixed(2)

}

function actualizarPrestación(fad, pComp, pBen, pbu, pc, pap) {

    fad = document.getElementById("FAD").value
    var nroA = perActRh.indexOf(fad)
    if (document.getElementById("prestación").value == "Jubi") {
        document.getElementById("coef").value = actJubi[nroA];

    } else {
        document.getElementById("coef").value = actRTI[nroA];

    }

    console.log(Number(actJubi[nroA].replace(",", ".")) + 1);

}

function nvoHaberFad(pbu, pc, pap, pComp, pBen, coeficiente) {
    pbu = document.getElementById("pbu").value
    pc = document.getElementById("pc").value
    pap = document.getElementById("pap").value
    pComp = Number(document.getElementById("porcBenef3").value)
    pBen = Number(document.getElementById("porcBenef4").value)
    coeficiente = Number(document.getElementById("coef").value.replace(",", "."))
    h2007=0

    document.getElementById("npbu").value = pbu * pComp
    document.getElementById("npc").value = (pc * pComp * pBen * coeficiente).toFixed(2)
    if (perActRh.indexOf(document.getElementById("FAD").value) > 155) {
        document.getElementById("npap").value = (pap * pComp * pBen * coeficiente).toFixed(2)

    } else {
        document.getElementById("npap").value = (pap / 0.85 * 1.5 * pComp * pBen * coeficiente).toFixed(2)
    }
    document.getElementById("nHFad").value = (Number(document.getElementById("npbu").value) + Number(document.getElementById("npc").value) + Number(document.getElementById("npap").value)).toFixed(2)

	if (perActRh.indexOf(document.getElementById("FAD").value) < 150) {

    h2007=badaroProporcional(document.getElementById("nHFad").value,document.getElementById("FAD").value)
    console.log(document.getElementById("FAD").value)

    document.getElementById("r082016").value=Calcular('12','2006','08','2016',h2007)
	} else {
	
	h2007=document.getElementById("nHFad").value
	document.getElementById("r082016").value=Calcular(document.getElementById("FAD").value.slice(4,6),document.getElementById("FAD").value.slice(0,4),'08','2016',h2007)
	}
}

function badaroProporcional(haber, período) {
    resBadaro = 0
    nCoefBadaro = 0
    nCoefBadaro = perActRh.indexOf(período) - 90
    if (perActRh.indexOf(período) < 90) {
        resBadaro = haber * 1.885589771
    } else {
        switch (período.slice(0, 4)) {
            case '2002':
                resBadaro = haber * (111.0736341 / Number(coefBadaro[nCoefBadaro])) * 1.752588136
                break;
            case '2003':
                if (período.slice(4, 6) == "01") {
                    resBadaro = haber * 1.752588136
                } else {
                    resBadaro = haber * (123.7220269 / Number(coefBadaro[nCoefBadaro])) * 1.563822695
                }
                break;
            case '2004':
                if (período.slice(4, 6) == "01") {
                    resBadaro = haber * 1.563822695
                } else {
                    resBadaro = haber * (136.6509862 / Number(coefBadaro[nCoefBadaro])) * 1.430479543
                }
                break;
            case '2005':
                if (período.slice(4, 6) == "01") {
                    resBadaro = haber * 1.430479543
                } else {
                    resBadaro = haber * (161.2658761 / Number(coefBadaro[nCoefBadaro])) * 1.1889457
                }
                break;
            case '2006':
                if (período.slice(4, 6) == "01") {
                    resBadaro = haber * 1.1889457
                } else {
                    resBadaro = haber * (191.005812 / Number(coefBadaro[nCoefBadaro]))
                }

                break;
            default:
                break;
        }
    }
    return resBadaro

}

function final630(mhasta,ahasta,monto,monto2) {
    mhasta=document.getElementById("Omes").value
    ahasta=document.getElementById("Oaño").value
    monto=document.getElementById("r082016").value
    monto2=document.getElementById("perc082016").value

    document.getElementById("rRH").value=Calcular('08','2016',mhasta,ahasta,monto)
    document.getElementById("rSRH").value=Calcular('08','2016',mhasta,ahasta,monto2)

}

function liquidarTablaRH(mes, año, mHasta, aHasta, monto, montoA) {
    // window.open("tabla.html")
    // window.location.href='tabla.html'
    var fechaDesde = año + mes + "01"
    var fechaHasta = aHasta + mHasta + "01"
    var nro = nPer.indexOf(fechaDesde)
    var nFin = nPer.indexOf(fechaHasta)
    var cantFilas = nFin - nro + 3
    var importe = monto
    var importeA = montoA
    var dif = 0
    // let liq = Array()

    // Obtenemos la referencia del elemento body
    var body = document.getElementById("tablaLiq");
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
    var cuenta = 0
    document.getElementById("tabla").rows[cuenta].cells[1].textContent = "Percibido";
    document.getElementById("tabla").rows[cuenta].cells[2].textContent = "Haber Recompuesto";
    document.getElementById("tabla").rows[cuenta].cells[3].textContent = "001-020";
    document.getElementById("tabla").rows[cuenta].cells[0].textContent = "Período";
    cuenta = cuenta + 1

    var totimp = 0
    var totimpA = 0
    var totDif = 0

    if (nro < nFin) {
        // nro=nro+1;
        do {
            importe = importe * coeficienteMovilidad[nro];
            importeA = importeA * coeficienteMovilidad[nro];
            dif = importeA - importe
            if (nro == 194) {
                importe = importe + 1500;
                importeA = importeA + 1500;
            }
            document.getElementById("tabla").rows[cuenta].cells[1].textContent = importe.toFixed(2).replace(".", ",");
            document.getElementById("tabla").rows[cuenta].cells[2].textContent = importeA.toFixed(2).replace(".", ",");
            document.getElementById("tabla").rows[cuenta].cells[3].textContent = dif.toFixed(2).replace(".", ",");
            document.getElementById("tabla").rows[cuenta].cells[0].textContent = nPer[nro].substring(4, 6) + "-" + nPer[nro].substring(0, 4);

            var totimp = totimp + importe
            var totimpA = totimpA + importeA
            var totDif = totDif + dif

            liq.push(importe.toFixed(2));
            nro = nro + 1;
            cuenta = cuenta + 1;
        }
        while (nro < nFin + 1);
    }
    // ESCRIBO LOS TOTALES
    document.getElementById("tabla").rows[cuenta].cells[1].textContent = totimp.toFixed(2).replace(".", ",");;
    document.getElementById("tabla").rows[cuenta].cells[2].textContent = totimpA.toFixed(2).replace(".", ",");;
    document.getElementById("tabla").rows[cuenta].cells[3].textContent = totDif.toFixed(2).replace(".", ",");;
    document.getElementById("tabla").rows[cuenta].cells[0].textContent = "TOTALES";
    // window.scroll(0, 150)
    console.log(liq);
    // window.open("tabla.html")
    // loadLiquidación();
}

