const { spawn } = require('child_process')

const ls = spawn('ls', ['-lh', '/usr'])

ls.stdout.on('data', (data) => {
    console.log('stdout: ', data.toString())
})

ls.stderr.on('data', (data) => {
    console.log('stderr: ', data)
})
ls.on('close', (code)=>{
    console.log('Processo em segundo plano finalizado com sucesso!', code)
})