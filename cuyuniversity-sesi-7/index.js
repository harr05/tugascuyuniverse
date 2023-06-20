// request adalah data masuk dari luar
// response adalah data keluar dari sistem
// yt/deaafrizal/sesi7/42.36

const { constants } = require('buffer');
const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const os = require('os');
const host = '127.0.0.1';
const port = 3002


const server = http.createServer(function(request, response) {
 const nama = "Muhar Ferdiansyah";
 let uang = 500000;
 let jajan = 150000;
 let sisa = uang - jajan;

uang = rupiah.convert(uang);
jajan = rupiah.convert(jajan);
sisa = rupiah.convert(sisa);

fs.appendFile('sisauang.txt', sisa, () => {
    console.log('data uang berhasil disimpan')
});

const sisaRam = os.freemem();
const jumlahCpu = os.cpus();

function checkCpu(){
    let myCpu = [];
    jumlahCpu.map((cpu, i) => {
        myCpu.push(cpu.model)
    })
    return myCpu[0]
}

 const hasil = `
 <head>
 <title>${nama}</title>
 </head>
 <body>
 <h1 style='background-color: black; color: white; padding:20px; text-align:center;'>NODE JS UANG JAJAN SAYA</h1>
 <p> halo nama saya ${nama}, saya jajan sebanyak ${jajan}, uang saya tadinya ${uang}, sekarang menjadi ${sisa}</p>
 <h5>Sisa ram saya adalah: ${sisaRam}</h5>
 <h5>merk cpu yang saya pakai: ${checkCpu()}</h5>
 `;

 response.statusCode = 203;
 response.end(hasil);
})

server.listen(port, host, function () {
    console.log(`server menyala di ${host}:${port} 🙉`);
});