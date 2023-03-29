package com.rook_rn_app_demo_hc;

import android.os.Build;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.rook.rnrookhealthconnect.RNRookHC;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class TestPackager implements ReactPackage {

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<NativeModule> createNativeModules(
            ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        System.out.println(Build.VERSION.SDK_INT >= Build.VERSION_CODES.P);
        modules.add(new RNRookHC(reactContext));

        return modules;
    }

}