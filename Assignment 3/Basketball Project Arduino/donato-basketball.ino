int footA = analogRead(A0);
int footB = analogRead(A1);
int Board = analogRead(A2);


int net = digitalRead(2);

int FAmax = -1;
int FAmin = 3000;

int FBmax = -1;
int FBmin = 3000;

int Boardmin = 3000;
int Boardmax = -1;

int FAnum;
int FBnum;
int Boardnum;

void setup() {
  Serial.begin(9600);
  //basket digital
  pinMode(2, INPUT);
}

void loop() {
  footA = analogRead(A0);
  footB = analogRead(A1);

  Board = analogRead(A2);

  net = digitalRead(2);

  if (millis() > 3000) {

    ////feet=================================
    if (footA < FAmin) {
      FAmin = footA;
    }else if (footA > FAmax) {
      FAmax = footA;
    }
    if (footB < FBmin) {
      FBmin = footB;
    }else if (footB > FBmax) {
      FBmax = footB;
    }

    ////backboard=============================
    if (Board < Boardmin) {
      Boardmin = Board;
    }
    if (Board > Boardmax) {
      Boardmax = Board;
    }

    FAnum = map(footA, FAmin, FAmax, 1, 100);
    FBnum = map(footB, FBmin, FBmax, 1, 100);
    Boardnum = map(Board, Boardmin, Boardmax, 1, 100);
  }



//  Serial.print(FAmin);
//  Serial.print(",");
//  Serial.print(FAmax);






  ////raw values==================================
  //  Serial.print(net);
  //  Serial.print(",");
  //  Serial.print(footA);
  //  Serial.print(",");
  //  Serial.print(footB);
  //  Serial.print(",");
  //  Serial.print(Board);


  //will be finals=============================
    Serial.print(net);
    Serial.print(",");
    ////feet
    Serial.print(FAnum);
    Serial.print(",");
    Serial.print(FBnum);
    Serial.print(",");
    ////backboard
    Serial.print(Boardnum);






  Serial.println();
  delay(1);
}
