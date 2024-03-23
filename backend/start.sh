if [ "$NODE_ENV" = "production" ]; then
  echo "API inicializada em ambiente de produção"
  npm run build
  npm start
else
  echo "API inicializada em ambiente de desenvolvimento"
  npm run dev
fi