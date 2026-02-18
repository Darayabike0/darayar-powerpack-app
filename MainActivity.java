package com.example.Battery_18650_Unit
; // แอปดารายาร์-พาวเวอร์แพ็ค

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private WebView myWebView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        myWebView = (WebView) findViewById(R.id.webview);
        
        // การตั้งค่า WebView
        WebSettings webSettings = myWebView.getSettings();
        webSettings.setJavaScriptEnabled(true); // เปิดใช้งาน JS
        webSettings.setBuiltInZoomControls(true); // ให้ซูมดูตารางแบตเตอรี่ได้
        webSettings.setDisplayZoomControls(false); // ซ่อนปุ่มซูมที่ดูเกะกะ
        webSettings.setDomStorageEnabled(true); // ช่วยให้เว็บโหลดเร็วขึ้น

        // ป้องกันไม่ให้เด้งไปเปิด Chrome นอกแอป
        myWebView.setWebViewClient(new WebViewClient());

        // โหลด URL ข้อมูลแบตเตอรี่ของคุณ
        myWebView.loadUrl("https://darayar.online/ExportBlock/%E0%B9%81%E0%B8%9A%E0%B8%95%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%8B%E0%B8%A5%E0%B8%A5%E0%B9%8C18650/ICR18650-3Ah/inr18650.html");
    }

    // เมื่อกดปุ่ม Back ให้ถอยหลังในเว็บ ไม่ใช่การปิดแอป
    @Override
    public void onBackPressed() {
        if (myWebView.canGoBack()) {
            myWebView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
