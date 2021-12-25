FROM fusuf/whatsasena:latest

RUN git clone https://github.com/hasiya22/Test /root/Test
WORKDIR /root/Test/

ENV TZ=Europe/Istanbul
RUN npm install -g npm@8.3.0
RUN yarn install --no-audit

CMD ["node", "bot.js"]
