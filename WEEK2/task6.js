const fs = require('fs');

function compareFiles(file1, file2) {
  const data1 = fs.readFileSync(file1, 'utf-8').split('\n');
  const data2 = fs.readFileSync(file2, 'utf-8').split('\n');
  
  const largerFile = data1.length > data2.length ? file1 : file2;
  const smallerFile = data1.length > data2.length ? file2 : file1;
  
  console.log(`The larger file is: ${largerFile}`);
  
  console.log('Differences in lines:');
  for (let i = 0; i < Math.min(data1.length, data2.length); i++) {
    if (data1[i] !== data2[i]) {
      console.log(`Line ${i + 1} - ${file1}: ${data1[i]}`);
      console.log(`Line ${i + 1} - ${file2}: ${data2[i]}`);
      console.log('-------------------');
    }
  }
  
  if (data1.length > data2.length) {
    for (let i = data2.length; i < data1.length; i++) {
      console.log(`Line ${i + 1} - ${file1}: ${data1[i]}`);
      console.log(`Line ${i + 1} - ${file2}: [line does not exist in ${file2}]`);
      console.log('-------------------');
    }
  } else if (data1.length < data2.length) {
    for (let i = data1.length; i < data2.length; i++) {
      console.log(`Line ${i + 1} - ${file1}: [line does not exist in ${file1}]`);
      console.log(`Line ${i + 1} - ${file2}: ${data2[i]}`);
      console.log('-------------------');
    }
  }
}

compareFiles('file1.txt', 'file2.txt');
