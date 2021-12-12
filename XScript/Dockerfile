FROM fusuf/whatsasena:latest

RUN git clone https://github.com/hasiya22/Test /root/Test
WORKDIR /root/Test/
RUN git clone https://github.com/tenuh/Config
RUN git clone https://github.com/jesonpro/Angela-x
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
