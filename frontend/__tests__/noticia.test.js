import { render, screen } from '@testing-library/react';
import Home from '../src/pages/home';

/* Testes para se fazer com as notícias:
    0. Se renderiza a pagina
    1. A notícia deve estar disponível imediatamente após a postagem (noticia autoral e externa) (29 e 30)
    2. A notícia deve poder ser avaliada imediatamente depois de ser postada (noticia autoral e externa) (29 e 30)
    3. A notícia deve poder receber comentários imediatamente após ser postada* (noticia autoral e externa) (29 e 30)
    4. A notícia deve estar disponível imediatamente após a edição (31)
    5. A versão editada deve estar presente no lugar da versão anterior (31)
    6. A notícia deve ser excluída completamente da plataforma (32)
    7. Os comentários devem ser excluídos juntos da notícia* (32)
    8. As pontuações de comentários de usuários não deve ser alterada* (32)
    9. A postagem receberá um acréscimo no valor "curtir" (27)
    10. Caso o voto seja retirado, a pontuação deve retornar ao valor anterior (27)
    11. A postagem receberá um acréscimo no valor "descurtir" (28)
    12. Caso o voto seja retirado, a pontuação deve retornar ao valor anterior (28)
*/ 
    
