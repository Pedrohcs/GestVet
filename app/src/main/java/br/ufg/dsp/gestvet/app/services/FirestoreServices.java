package br.ufg.dsp.gestvet.app.services;

import com.google.api.core.ApiFuture;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.cloud.FirestoreClient;
import com.google.firebase.database.FirebaseDatabase;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

@Service
public class FirestoreServices {
    String firebase_config_file = "src/main/resources/gestvet-c366e-firebase-adminsdk-16ymt-836c36d816.json";
    FirebaseApp defaultApp;
    FirebaseAuth defaultAuth;
    FirebaseDatabase defaultDatabase;
    Firestore db;

    FirestoreServices() {
        try {
            FileInputStream serviceAccount = new FileInputStream(firebase_config_file);
            FirebaseOptions options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .setDatabaseUrl("https://gestvet-c366e.firebaseio.com")
                    .build();
            defaultApp = FirebaseApp.initializeApp(options);
            defaultAuth = FirebaseAuth.getInstance(defaultApp);
            defaultDatabase = FirebaseDatabase.getInstance(defaultApp);
            db = FirestoreClient.getFirestore();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public String getUser() {
        return this.defaultDatabase.getClass().toString();
    }
}
