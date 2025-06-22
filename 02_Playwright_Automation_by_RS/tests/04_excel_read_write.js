const excelJS = require('exceljs');


    const workbook = new excelJS.Workbook();
    await workbook.xlsx.readFile('02_Playwright_Automation_by_RS\tests\download.xlsx').then(function(){

   

    const worksheet = workbook.getWorksheet('Sheet1');

    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) =>{

            console.log(cell.value)

        });

    });

});
