const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetDir = path.resolve('src/assets/carrossel');

async function aprimorarFotos() {
  const arquivos = fs.readdirSync(targetDir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
  console.log(`Iniciando aprimoramento digital de ${arquivos.length} fotos em ${targetDir}...`);

  let sucesso = 0;
  for (const arquivo of arquivos) {
    const filePath = path.join(targetDir, arquivo);
    const buffer = fs.readFileSync(filePath);

    try {
      const processedBuffer = await sharp(buffer)
        .rotate()
        .modulate({
          brightness: 1.03,
          saturation: 1.22,
        })
        .clahe({
          width: 120,
          height: 120,
          maxSlope: 2.0,
        })
        .sharpen({
          sigma: 1.1,
          m1: 1.4,
          m2: 0.7,
        })
        .jpeg({
          quality: 92,
          mozjpeg: true,
          chromaSubsampling: '4:4:4',
        })
        .toBuffer();

      fs.writeFileSync(filePath, processedBuffer);
      sucesso++;
      if (sucesso % 10 === 0 || sucesso === arquivos.length) {
        console.log(`Progresso: ${sucesso}/${arquivos.length} fotos aprimoradas.`);
      }
    } catch (err) {
      console.error(`Erro ao processar ${arquivo}:`, err.message);
    }
  }

  console.log(`\nConcluído! ${sucesso} fotos aprimoradas com sucesso.`);
}

aprimorarFotos().catch(console.error);
