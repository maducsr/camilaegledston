# Como subir o site

## 1. Push pro GitHub
```
git add .
git commit -m "site completo"
git push
```
O Vercel publica automaticamente.

## 2. Cadastrar convidados no Supabase
1. Acesse supabase.com → seu projeto
2. Vá em **SQL Editor**
3. Cole o conteúdo do arquivo `convidados.sql`
4. Clique em **Run**

Pronto! O site estará no ar com todos os convidados cadastrados.
