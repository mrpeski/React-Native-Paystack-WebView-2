//
//  RNPaystackWebview2Module.swift
//  RNPaystackWebview2Module
//
//  Copyright © 2022 Olayinka Ogunwemimo. All rights reserved.
//

import Foundation

@objc(RNPaystackWebview2Module)
class RNPaystackWebview2Module: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
