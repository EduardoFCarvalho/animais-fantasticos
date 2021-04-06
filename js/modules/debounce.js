// Utilizando a função debounce para otimizar o sistema, com ela estamos evitando que o scroll seja contabilizado muitas vezes a cada uso, agora ela só conta uma vez após termino da ação depois do tempo determinado (delay)
export default function debounce(callback, delay) {
  let timer;
  // Da forma como a função do retorno está, não tem como usar argumentos então pra resolver isso pode-se desestruturar o args que assim é possivel utilizar argumentos definidos se precisar.
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}

// O debounce deve ser usado principalmente em eventos de scroll e resize
